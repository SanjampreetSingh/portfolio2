import {
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import ScrollDownButton from "../../components/Coach/scroll-button/ScrollDownButton.jsx";
import ServiceCard from "../../components/Coach/service-cards/ServiceCard.jsx";
import Title from "../../components/Coach/title/Title.jsx";
import SectionLayout from "../../components/common/layout/SectionLayout.jsx";
import { careerCoachPageData } from "../../constants/careerCoachPageData.js";

const FullScreenSection = forwardRef(({ children, minH, ...props }, ref) => (
  <Flex
    ref={ref}
    minHeight={minH ?? { base: "auto", md: "100vh" }}
    py={{ base: 20, md: 0 }}
    w="full"
    position="relative"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    {children}
  </Flex>
));

FullScreenSection.displayName = "FullScreenSection";

export default function Coach() {
  const { title, about, services } = careerCoachPageData;
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  // const testimonialsRef = useRef(null);

  const handleScrollDown = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <VStack alignItems="stretch" flex={1} w="full" spacing={0}>
      <FullScreenSection id="title" minH={{ base: "80vh", md: "85vh" }}>
        <Title {...title} />
        <ScrollDownButton onClick={() => handleScrollDown(aboutRef)} />
      </FullScreenSection>

      <FullScreenSection id="about" ref={aboutRef}>
        <SectionLayout
          heading={about.title}
          subheading={about.subtitle}
          section={
            <SimpleGrid columns={{ base: 1 }} spacing={10} w="full">
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
        <ScrollDownButton onClick={() => handleScrollDown(servicesRef)} />
      </FullScreenSection>

      <FullScreenSection id="services" ref={servicesRef}>
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
        />
        {/* <ScrollDownButton onClick={() => handleScrollDown(testimonialsRef)} /> */}
      </FullScreenSection>

      {/* <FullScreenSection id="testimonials" ref={testimonialsRef}>
        <Text>Testimonials Section</Text>
      </FullScreenSection> */}
    </VStack>
  );
}
