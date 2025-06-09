import { SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import ServiceCard from "../../components/Coach/service-cards/ServiceCard.jsx";
import Title from "../../components/Coach/title/Title.jsx";
import SectionLayout from "../../components/common/layout/SectionLayout.jsx";
import { careerCoachPageData } from "../../constants/careerCoachPageData";

export default function Coach() {
  const { title, about, services } = careerCoachPageData;

  return (
    <VStack alignItems="stretch" flex={1} w="full" spacing={0}>
      <Title {...title} />

      <SectionLayout
        heading={about.title}
        subheading={about.subtitle}
        section={
          <SimpleGrid
            columns={{ base: 1 }}
            spacing={10}
            w="full"
            maxW="7xl"
            mx="auto"
            py={{ base: 12, md: 24 }}
            px={{ base: 6, md: 10 }}
          >
            <Text
              fontSize="lg"
              maxW="3xl"
              textAlign="center"
              mx="auto"
              color={useColorModeValue("gray.700", "gray.300")}
            >
              {about.bio}
            </Text>
          </SimpleGrid>
        }
      />

      <SectionLayout
        heading={services.title}
        subheading={services.subtitle}
        section={
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={10}
            w="full"
            maxW="7xl"
            mx="auto"
            py={{ base: 12, md: 24 }}
            px={{ base: 6, md: 10 }}
          >
            {services.items.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </SimpleGrid>
        }
      ></SectionLayout>

      {/* <SectionLayout
        heading={testimonials.title}
        subheading={testimonials.subtitle}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </SectionLayout> */}
    </VStack>
  );
}
