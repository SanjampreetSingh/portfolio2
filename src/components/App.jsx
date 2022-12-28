import { Container, VStack } from "@chakra-ui/react";

import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import LeftSocial from "./leftSocial/LeftSocial";
import Footer from "./footer/Footer";
import SectionLayout from "./common/layout/SectionLayout";
import { sectionsData } from "../constants/sectionsData";
import RightSocial from "./rightEmail/RightSocial";

export default function App() {
  return (
    <>
      <Container maxW="5xl">
        <Header />
      </Container>
      <LeftSocial />
      <RightSocial />
      <Container
        display="flex"
        maxW="5xl"
        minH={{ base: "auto", md: "100vh" }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing="24">
            <Introduction />
            {sectionsData.map((i, k) => (
              <SectionLayout
                key={k}
                heading={i.title}
                subheading={i.subtitle}
                section={<i.component />}
              />
            ))}
          </VStack>
        </VStack>
      </Container>
      <Container maxW="5xl">
        <Footer />
      </Container>
    </>
  );
}
