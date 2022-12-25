import {
  Stack,
  VStack,
  Heading,
  Image,
  Flex,
  Text,
  Link,
  // IconButton,
  Icon,
} from "@chakra-ui/react";

import profilePic from "../../assets/images/profile-pic.png";
import ICONS from "../../constants/icons";

export default function Introduction() {
  return (
    <Stack
      direction={["column-reverse", "row"]}
      spacing="24px"
      style={{ alignItems: "center" }}
    >
      <VStack align="stretch" >
        <Heading
          as="h1"
          size="lg"
          noOfLines={3}
          style={{ alignItems: "center" }}
        >
          Hi, I&apos;m Sanjampreet Singh.{" "}
          {/* <IconButton
            aria-label="Play pronunciation track"
            variant="link"
            isRound
            icon={<Icon as={FaPlayCircle} boxSize="2rem" color="purple.500" />}
          /> */}
        </Heading>
        <Text fontSize="md">
          I&apos;m full-stack engineer, a designer, and a content creator. I
          work at{" "}
          <Link href="https://www.bcg.com/x" isExternal>
            BCG X<Icon as={ICONS.EXTERNAL_LINK} mx="2px" />
          </Link>{" "}
          as a Software Engineer.
          <br />
          I am passionate for creating things. I love to build and develop
          software that help society. <br />
          In my pass-time, I socialize with my friends, and go for long
          walks. I meditate and also sing Gurbani Shabads.
        </Text>
      </VStack>
      <Flex>
        <Image
          borderRadius="full"
          src={profilePic}
          boxSize="224px"
          objectFit={"cover"}
          loading="lazy"
        />
      </Flex>
    </Stack>
  );
}
