import { VStack, Heading } from "@chakra-ui/react";

export default function Coach() {
  return (
    <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
      <VStack as="main" flex={1} w="full" spacing="24">
        <Heading as="h1">Coach Sanjam</Heading>
      </VStack>
    </VStack>
  );
}
