import {
  Center,
  Divider,
  Stack,
  Heading,
  VStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import skillsListData from "../../constants/skillsListData";
import RoundSocialButton from "../common/button/RoundSocialButton";

export default function Skills() {
  return (
    <VStack spacing="4" align="stretch">
      {skillsListData.map((s) => (
        <Stack direction="row" spacing="8" h="3" my="4" key={s.key}>
          <Box display="flex" direction="row">
            <Heading as="h3" size="md" pr="5">
              {s.title}
            </Heading>
            <Center height="30px">
              <Divider
                orientation="vertical"
                colorScheme={useColorModeValue("black", "white")}
              />
            </Center>
          </Box>
          {s.children.map((i) => (
            <RoundSocialButton
              label={i.title}
              href={i.link}
              key={i.key}
              icon={i.icon}
            />
          ))}
        </Stack>
      ))}
    </VStack>
  );
}
