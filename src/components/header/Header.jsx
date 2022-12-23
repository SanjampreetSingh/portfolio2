import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav
      style={{
        zIndex: 1500,
        marginBottom: "4rem",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        right: "0xp",
        left: "0px",
      }}
    >
      <Box
        px={4}
        style={{ width: "100%" }}
        bg={colorMode === "light" ? "white" : "#1A202C"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}
