import { List, ListItem, Text, HStack } from "@chakra-ui/react";

import "./actionList.css";

export default function ActionList() {
  return (
    <List spacing={3} className="list-style">
      {/* <ListItem>
        <Text className="list-heading-text">
          Pages
        </Text>
      </ListItem> */}
      <ListItem>
        <Text className="list-heading-text">Social</Text>
      </ListItem>
      <ListItem className="list-actionable-item">
        <HStack className="actionable-item-container">
          <Text mt={4}>Twitter</Text>
        </HStack>
      </ListItem>
    </List>
  );
}
