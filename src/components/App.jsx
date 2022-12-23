import { Container } from "@chakra-ui/react";

import Header from "./header/Header";
import Introduction from "./introduction/Introduction";

export default function App() {
  return (
    <Container maxW="5xl">
      <Header />
      <Introduction />
    </Container>
  );
}
