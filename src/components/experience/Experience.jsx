import { VStack, HStack, Heading, Text, Icon, Link } from "@chakra-ui/react";

import experienceData from "../../constants/experienceData";
import ICONS from "../../constants/icons";

export default function Experience() {
  return (
    <VStack w="full" spacing={1} align="stretch">
      {experienceData.map((i) => (
        <HStack
          p="3"
          h="40px"
          key={i.key}
          display="flex"
          direction="row"
          borderRadius="5px"
          border="1px black solid"
          justifyContent="space-between"
        >
          <Link isExternal href={i.link} textDecoration="none !important">
            <Heading fontSize="md">
              {i.title} <Icon as={ICONS.EXTERNAL_LINK} />
            </Heading>
          </Link>
          <Text fontSize="sm">{i.timeline}</Text>
        </HStack>
      ))}
    </VStack>
  );
}
