import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCommand } from "react-icons/bs";

import Search from "../search/Search";
import "./header.css";

export default function Header() {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav className="nav-style">
        <Box
          px={4}
          style={{ width: "100%" }}
          bg={colorMode === "light" ? "white" : "#1A202C"}
        >
          <Search isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>Logo</Box>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
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
