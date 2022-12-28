import { Container, VStack } from "@chakra-ui/react";

import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Experience from "./experience/Experience";
import LeftSocial from "./leftSocial/LeftSocial";
import SectionLayout from "./layout/SectionLayout";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Skills from "./skills/Skills";

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
          <VStack as="main" flex={1} w="full" spacing="24">
            <Introduction />
            <SectionLayout
              heading="Experience"
              subheading="The companies I've worked with."
              section={<Experience />}
            />
            <SectionLayout
              heading="Skills"
              subheading="The things I've worked with."
              section={<Skills />}
            />
            <SectionLayout
              heading="Education"
              subheading="The things I've learnt."
              section={<Education />}
            />
          </VStack>
        </VStack>
      </Container>
      <Container maxW="5xl">
        <Footer />
      </Container>
    </>
  );
}
