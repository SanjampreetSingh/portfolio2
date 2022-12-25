import { List, ListItem, Text, useMenu, useColorMode } from "@chakra-ui/react";
import { createDescendantContext } from "@chakra-ui/descendant";
import { useKeyPressEvent } from "react-use";
import { CgArrowRight } from "react-icons/cg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import "./actionList.css";
import actionListData from "./actionListData";
import ActionCommand from "./ActionCommand";

export const [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant,
] = createDescendantContext();

export default function ActionList(props) {
  const { focusedIndex, setFocusedIndex, onClose } = props;
  const { descendants } = useMenu();
  const { colorMode, toggleColorMode } = useColorMode();

  const actionItemGrid = (data, section, activeIndex) =>
    data.map((command) => {
      if (section === "pages") {
        const { key, title, link } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={CgArrowRight}
            href={link}
          />
        );
      } else if (section === "social") {
        const { key, title, link, icon } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            href={link}
          />
        );
      } else if (section === "theme") {
        const { title, key } = command;

        const icon = colorMode === "dark" ? SunIcon : MoonIcon;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            onClick={toggleColorMode}
          />
        );
      }
    });

  useKeyPressEvent("ArrowDown", () => {
    const next = descendants.nextEnabled(focusedIndex);
    if (next) {
      setFocusedIndex(next.index);
      next.node.focus();
      next.node.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  useKeyPressEvent("ArrowUp", () => {
    const prev = descendants.prevEnabled(focusedIndex);
    if (prev) {
      setFocusedIndex(prev.index);
      prev.node.focus();
      prev.node.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  return (
    <List
      spacing={3}
      className="list-style"
      overflow="auto"
      w="full"
      pb={2}
      px={2}
    >
      <MenuDescendantsProvider value={descendants}>
        {actionListData.map((data) => (
          <span key={data.key}>
            <ListItem>
              <Text className="list-heading-text">{data.title}</Text>
            </ListItem>
            {actionItemGrid(data.children, data.key, focusedIndex)}
          </span>
        ))}
      </MenuDescendantsProvider>
    </List>
  );
}
