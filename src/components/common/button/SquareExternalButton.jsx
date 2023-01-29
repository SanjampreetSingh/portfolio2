import { Icon, chakra, useColorModeValue } from "@chakra-ui/react";
import ICONS from "../../../constants/icons";

export default function SquareExternalButton(props) {
  const { label, href } = props;

  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      w={"full"}
      rounded={"5"}
      h={"3rem"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      position={"relative"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={
        "background 0.3s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
      }
      _hover={{
        bg: "#aeccec",
        color: "#000",
        // top: "-10px",
      }}
    >
      {label}
      <Icon as={ICONS.EXTERNAL_LINK} position={"absolute"} right={10} />
    </chakra.button>
  );
}
