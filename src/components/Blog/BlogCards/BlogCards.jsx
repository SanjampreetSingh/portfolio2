import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { devToAPI } from "../../../constants/links";
import ICONS from "../../../constants/icons";

export default function BlogCards() {
  const [articles, setArticles] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    fetch(devToAPI)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      {articles?.length === 0
        ? [1, 2, 3]?.map((i) => (
            <Box
              overflow="hidden"
              boxShadow="lg"
              padding="2"
              bg={useColorModeValue("", "whiteAlpha.100")}
              key={i}
              w="100%"
            >
              <Stack direction={{ base: "column" }}>
                <Skeleton height="20" maxW={{ base: "100%" }} />
                <SkeletonText
                  mt="4"
                  noOfLines={2}
                  spacing="2"
                  skeletonHeight="2"
                />
              </Stack>
            </Box>
          ))
        : articles?.map((data) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={data.id}
              bg={useColorModeValue("", "whiteAlpha.100")}
              transition={
                "background 0.5s ease, top 0.5s ease, box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;"
              }
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={data?.social_image}
                alt={data?.title}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">
                    <Link
                      href={data?.url}
                      target="__blank"
                      rel="nofollow noopener noreferrer"
                      isExternal
                    >
                      {data?.title} <Icon as={ICONS.EXTERNAL_LINK} />
                    </Link>
                  </Heading>
                  <Text py="2">{data?.description}</Text>
                </CardBody>
                <Divider />
                <CardFooter display="flex" justifyContent="space-between">
                  <div>
                    {data?.tag_list?.map((tag) => (
                      <Tag
                        size="sm"
                        key={tag}
                        variant="solid"
                        colorScheme="teal"
                        mr="1"
                        borderRadius="full"
                        backgroundColor={
                          colorMode === "light"
                            ? "var(--chakra-colors-blue-50)"
                            : "var(--chakra-colors-blue-900)"
                        }
                        color={
                          colorMode === "light"
                            ? "var(--chakra-colors-gray-700)"
                            : "white"
                        }
                      >
                        #{tag}
                      </Tag>
                    ))}
                  </div>
                  <Text>| Published on: {data?.readable_publish_date}</Text>
                </CardFooter>
              </Stack>
            </Card>
          ))}
    </>
  );
}
