import { VStack } from "@chakra-ui/react";

import LinkTreeSocial from "../../components/LinkTree/LinkTreeSocial/LinkTreeSocial";
import LinkTreeHeader from "../../components/LinkTree/LinkTreeHeader/LinkTreeHeader";
import BlogCards from "../../components/Blog/BlogCards/BlogCards";

export default function Blog() {
  return (
    <VStack alignItems="center" flex={1} w="full">
      <VStack as="main" maxWidth="3xl" align={"center"} spacing="5">
        <LinkTreeHeader />
        <BlogCards />
        <span style={{ marginBottom: "2rem" }}></span>
        <LinkTreeSocial />
      </VStack>
    </VStack>
  );
}
