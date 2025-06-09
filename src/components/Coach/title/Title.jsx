import {
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Title({
  headline,
  subheadline,
  ctaButton,
  image,
}) {
  return (
    <Flex
      align="center"
      justify="center"
      w="full"
      py={{ base: 12, md: 24 }}
      px={{ base: 6, md: 10 }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 10, md: 20 }}
        maxW="7xl"
        mx="auto"
      >
        <VStack
          align={{ base: "center", md: "flex-start" }}
          spacing={6}
          maxW="xl"
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color={useColorModeValue("gray.900", "white")}
          >
            {headline}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {subheadline}
          </Text>
          <Button colorScheme="teal" size="lg" px={8} py={6}>
            {ctaButton}
          </Button>
        </VStack>
        <Image
          src={image}
          alt="Coach Sanjam"
          borderRadius="full"
          boxSize={{ base: "280px", md: "400px" }}
          objectFit="cover"
          boxShadow="2xl"
          border="8px solid"
          borderColor={useColorModeValue("white", "gray.700")}
        />
      </Flex>
    </Flex>
  );
}
