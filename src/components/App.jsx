import { Container, VStack } from "@chakra-ui/react";

import Header from "./header/Header";
import Introduction from "./introduction/Introduction";

export default function App() {
  return (
    <Container maxW="5xl">
      <Header />
      <Container
        display="flex"
        maxW="5xl"
        minH={{ base: "auto", md: "100vh" }}
        px={{ base: 4, lg: 0 }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            <Introduction />
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
}
