import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import socialLinkData from "../../constants/socialLinkData";
import pagesData from "../../constants/pagesData";
import RoundSocialButton from "../common/button/RoundSocialButton";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "#1A202C")}
      color={useColorModeValue("black", "white")}
      mt="4rem !important"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        {/* <Logo /> */}
        <Stack direction={"row"} spacing={6}>
          {pagesData.map((i) => (
            <Link href={i.link} key={i.key}>
              {i.title}
            </Link>
          ))}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "white")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© {new Date().getFullYear()} Sanjampreet Singh</Text>
          <Stack direction={"row"} spacing={6}>
            {socialLinkData.map((i) => (
              <RoundSocialButton
                label={i.title}
                href={i.link}
                key={i.key}
                icon={i.icon}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
