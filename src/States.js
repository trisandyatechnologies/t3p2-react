import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

const API =
  "https://countriesnow.space/api/v0.1/countries/states/q?country=India";

export default function States() {
  const [states, setStates] = useState([{ name: "AP", state_code: "AP" }]);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((states) => {
        console.log(states);
        setStates(states.data.states);
      })
      .catch((err) => {
        console.log("ERROR", err);
      })
      .finally(() => {
        console.log("Finished");
      });
  }, []);

  return (
    <List>
      {states.map((state) => (
        <ListItem key={state.name}>
          <ListItemText
            primary={state.name}
            secondary={state.state_code}
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
