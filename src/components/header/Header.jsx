import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BsCommand } from "react-icons/bs";

import Search from "../search/Search";
import "./header.css";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav className="nav-style">
        <Box
          px={4}
          style={{ width: "100%" }}
          bg={colorMode === "light" ? "white" : "#1A202C"}
        >
          <Search isOpen={isOpen} onClose={onClose} />
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>Logo</Box>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Button onClick={onOpen}>
                  <BsCommand />
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </>
  );
}
