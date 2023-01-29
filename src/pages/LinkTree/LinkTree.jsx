import { VStack } from "@chakra-ui/react";
import ExternalLinks from "../../components/LinkTree/ExternalLinks/ExternalLinks";
import LinkTreeSocial from "../../components/LinkTree/LinkTreeSocial/LinkTreeSocial";

export default function LinkTree() {
  return (
    <VStack alignItems="center" flex={1} w="full" spacing={1}>
      <ExternalLinks />
      <LinkTreeSocial />
    </VStack>
  );
}
