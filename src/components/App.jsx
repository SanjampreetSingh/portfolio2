import { Container, VStack } from "@chakra-ui/react";

import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Experience from "./experience/Experience";
import LeftSocial from "./leftSocial/LeftSocial";
import SectionLayout from "./layout/SectionLayout";

export default function App() {
  return (
    <>
      <Container maxW="5xl">
        <Header />
      </Container>
      <LeftSocial />
      <Container
        display="flex"
        maxW="5xl"
        minH={{ base: "auto", md: "100vh" }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing="20">
            <Introduction />
            <SectionLayout heading="Experience" subheading="The companies I've worked with." section={<Experience />} />;
          </VStack>
        </VStack>
      </Container>
    </>
  );
}
