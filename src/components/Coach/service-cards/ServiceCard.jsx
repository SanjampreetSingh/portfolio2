import {
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import ICONS from "../../../constants/icons";

export default function ServiceCard({ icon, title, description, features }) {
  const cardBg = useColorModeValue("white", "gray.800");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  // const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <VStack
      bg={cardBg}
      p={{ base: 6, md: 8 }}
      borderRadius="xl"
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      align="flex-start"
      spacing={5}
      flex={1}
      h="full"
      textAlign="left"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
      }}
    >
      <Icon as={icon} color={iconColor} boxSize={10} />

      <Heading as="h3" size="md" color={headingColor}>
        {title}
      </Heading>
      <Text color={textColor}>{description}</Text>

      <VStack align="flex-start" spacing={3} pt={2} flex={1}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={ICONS.CHECKMARK} color="green.500" w={5} h={5} />
            <Text color={textColor}>{feature}</Text>
          </HStack>
        ))}
      </VStack>

      {/* <Link
        href="#"
        color={linkColor}
        fontWeight="bold"
        pt={4}
        display="flex"
        alignItems="center"
        gap={2}
      >
        Learn More <Icon as={ICONS.ARROW_RIGHT} />
      </Link> */}
    </VStack>
  );
}
