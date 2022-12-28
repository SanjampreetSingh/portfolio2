import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Icon,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

import socialLinkData from "../../constants/socialLinkData";
import pagesData from "../../constants/pagesData";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#aeccec",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("black", "gray.200")}
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
        borderColor={useColorModeValue("gray.200", "gray.700")}
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
              <SocialButton label={i.title} href={i.link} key={i.key}>
                <Icon as={i.icon} />
              </SocialButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
