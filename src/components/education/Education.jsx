import { useState } from "react";
import {
  Box,
  Text,
  Icon,
  Link,
  VStack,
  HStack,
  Heading,
  ListItem,
  SlideFade,
  useColorMode,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";

import educationData from "../../constants/educationData";
import ICONS from "../../constants/icons";

export default function Education() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openedDesc, setOpenedDesc] = useState("");
  const { colorMode } = useColorMode();

  const handleOpen = (key) => {
    onOpen();
    setOpenedDesc(key);
  };

  const handleClose = () => {
    onClose();
    setOpenedDesc("");
  };

  return (
    <VStack w="full" spacing={4} align="stretch">
      {educationData.map((i) => (
        <>
          <HStack
            p="3"
            h="60px"
            key={i.key}
            borderRadius="5px"
            spacing="-3"
            border={
              colorMode === "light" ? "1px black solid" : "1px white solid"
            }
            onMouseEnter={() => handleOpen(i.key)}
            onMouseLeave={handleClose}
          >
            <VStack w="full" spacing="0" align="stretch" p="3">
              <Box
                w="full"
                display="flex"
                direction="row"
                justifyContent="space-between"
              >
                <Link isExternal href={i.link} textDecoration="none !important">
                  <Heading fontSize="md">
                    {i.title} <Icon as={ICONS.EXTERNAL_LINK} />
                  </Heading>
                </Link>

                <Text
                  fontSize="sm"
                  color={
                    colorMode === "light"
                      ? "var(--chakra-colors-gray-600)"
                      : "var(--chakra-colors-gray-50)"
                  }
                >
                  {i.timeline}
                </Text>
              </Box>

              <Box
                w="full"
                display="flex"
                direction="row"
                justifyContent="space-between"
              >
                <Text
                  fontSize="sm"
                  color={
                    colorMode === "light"
                      ? "var(--chakra-colors-gray-600)"
                      : "var(--chakra-colors-gray-50)"
                  }
                >
                  {i.course}
                </Text>
              </Box>
            </VStack>
          </HStack>
          {openedDesc === i.key && (
            <SlideFade in={isOpen && openedDesc === i.key} unmountOnExit>
              <Box
                w="full"
                px="5"
                mt="-4"
                backgroundColor={
                  colorMode === "light"
                    ? "var(--chakra-colors-blue-50)"
                    : "var(--chakra-colors-blue-900)"
                }
                borderRadius="0 0 8px 8px"
                color={
                  colorMode === "light"
                    ? "var(--chakra-colors-gray-700)"
                    : "white"
                }
                onMouseEnter={() => handleOpen(i.key)}
                onMouseLeave={handleClose}
              >
                <Text
                  color={
                    colorMode === "light"
                      ? "var(--chakra-colors-gray-700)"
                      : "white"
                  }
                >
                  {i?.description}
                </Text>
                <UnorderedList
                  color={
                    colorMode === "light"
                      ? "var(--chakra-colors-gray-700)"
                      : "white"
                  }
                >
                  {i?.data.map((d, k) => (
                    <ListItem key={k}>{d}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </SlideFade>
          )}
        </>
      ))}
    </VStack>
  );
}
