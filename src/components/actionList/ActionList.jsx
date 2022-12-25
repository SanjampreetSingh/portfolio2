import { List, ListItem } from "@chakra-ui/react";

import "./actionList.css";

export default function ActionList() {
  return (
    <List spacing={3} className="list-style">
      <ListItem className="list-heading-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
    </List>
  );
}
