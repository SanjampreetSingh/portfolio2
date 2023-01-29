import { Container, VStack } from "@chakra-ui/react";
import Header from "../components/common/header/Header";
import LeftSocial from "../components/common/leftSocial/LeftSocial";
import RightSocial from "../components/common/rightEmail/RightSocial";
import Footer from "../components/common/footer/Footer";

export default function MainLayout(props) {
  const { Children } = props;
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
          <Children />
        </VStack>
      </Container>
      <Container maxW="5xl">
        <Footer />
      </Container>
    </>
  );
}
