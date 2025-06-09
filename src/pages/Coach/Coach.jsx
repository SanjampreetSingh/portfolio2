import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { careerCoachPageData } from "../../constants/careerCoachPageData";
import SectionLayout from "../../components/common/layout/SectionLayout.jsx";
import Title from "../../components/Coach/title/Title.jsx";

// A component for the service cards
const ServiceCard = ({ title, description, icon }) => (
  <VStack
    p={8}
    borderRadius="lg"
    spacing={4}
    alignItems="center"
    textAlign="center"
    boxShadow="md"
  >
    <Text fontSize="4xl">{icon}</Text>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
);

// A component for the testimonial cards
const TestimonialCard = ({ name, story, image }) => (
  <VStack
    spacing={4}
    p={8}
    borderRadius="lg"
    alignItems="center"
    textAlign="center"
    boxShadow="md"
  >
    <Avatar size="xl" name={name} src={image} />
    <Text fontStyle="italic">{story}</Text>
    <Text fontWeight="bold">- {name}</Text>
  </VStack>
);

export default function Coach() {
  const { title, about, services, testimonials } = careerCoachPageData;

  return (
    <VStack
      alignItems="stretch"
      flex={1}
      w="full"
      spacing={0}
    >
      <Title {...title} />

      <SectionLayout heading={about.title} subheading={about.subtitle}>
        <Text
          fontSize="lg"
          maxW="3xl"
          textAlign="center"
          mx="auto"
          color={useColorModeValue("gray.700", "gray.300")}
        >
          {about.bio}
        </Text>
      </SectionLayout>

      <SectionLayout heading={services.title} subheading={services.subtitle}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {services.items.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </SectionLayout>

      <SectionLayout
        heading={testimonials.title}
        subheading={testimonials.subtitle}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </SectionLayout>
    </VStack>
  );
}
