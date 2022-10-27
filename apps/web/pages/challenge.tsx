import { dateToProtocolTimestamp } from "@influxdata/influxdb-client";
import { useState, useEffect } from "react";
import { Button, Box, Card, Flex, Heading, Input, ThemeProvider, themes } from "ui";

type AvailableThemes = keyof typeof themes;

const todos: {tw: string, time: number, name: string}[] = [];

export default function Challenge() {
  const defaultTheme: AvailableThemes = "nineties"
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(defaultTheme)
  const [tweet, setState] = useState("")
  const [seconds, setSeconts] = useState(0);

  const handleChange = (e: any) => {
    console.log('handleSubmit ran');
    e.preventDefault(); // 👈️ prevent page refresh

    if (tweet.trim() !== ''){
      if (tweet.length <= 100){
        console.log('firstName 👉️', tweet);
        todos.unshift({tw: tweet, time: Date.now(), name: 'Human'})
      } else {
        alert('Too many characters(100 max)')
      }
    } else {
      alert("Can't send empty tweet")
    }
    // 👇️ access input values here
    
    console.log(todos);
    // 👇️ clear all input values in the form
    setState('');
    setSeconts(0);
  }

  function renderTweet(element: {tw: string, time: number, name: string}) {
    const dif = (Date.now() - element.time) / 60000;
    
    return (
      <Card mb={4} ml={4} p={3} key={Math.random()} >
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading as="h3">{element.name}</Heading>
          <Box as="time" color="lightgray">{Math.round(dif)} min</Box>
        </Flex>

        <Box as="p" sx={{ pt: 2 }}>{element.tw}</Box>
      </Card>
    )
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex sx={{ justifyContent: "center", maxWidth: "850px", margin: "64px auto" }}>
        <Box sx={{ width: "50%" }} >
          <Card sx={{ p: 3 }}>
            <Heading as="h1">
              Welcome back, Human!
            </Heading>
            <form onSubmit={handleChange}>
            <Box mt={4}>
              <Input placeholder="What's happening? " type="text" value={tweet} onChange={e => setState(e.target.value)} />
              <Button type="submit" mt={3}>Tweet</Button>
            </Box>
            </form>

            <Heading as="h5" mt={4} mb={3}>Theme switcher</Heading>
            <Button onClick={() => setCurrentTheme("modern")}>Modern</Button>
            <Button onClick={() => setCurrentTheme("nineties")} ml={2}>90s</Button>
            <Button onClick={() => setCurrentTheme("darkModern")} ml={2}>Dark Modern</Button>
          </Card>
        </Box>

        <Box sx={{ width: "66%" }}>
          {todos.map((element) => {
            return(
              renderTweet(element)
            );
            })}
        </Box>
      </Flex>
    </ThemeProvider >
  );
}
