import { VStack, Heading } from "@chakra-ui/react";

export default function SectionLayout(props) {
  const { heading, section } = props;
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">{heading}.</Heading>
      {section}
    </VStack>
  );
}
