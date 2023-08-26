import { Spinner, useColorMode } from "@chakra-ui/react";

export default function BlogLoader() {
  const { colorMode } = useColorMode();
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={colorMode === "light" ? "var(--chakra-colors-gray-700)" : "white"}
      size="xl"
    />
  );
}
