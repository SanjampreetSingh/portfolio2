import { IconButton, useColorModeValue } from "@chakra-ui/react";
import ICONS from "../../../constants/icons";

export default function ScrollDownButton({ onClick }) {
  const iconColor = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <IconButton
      aria-label="Scroll to next section"
      icon={<ICONS.ARROW_DOWN />}
      onClick={onClick}
      size="lg"
      variant="ghost"
      isRound
      position="absolute"
      bottom={{ base: 4, md: 8 }}
      left="50%"
      transform="translateX(-50%)"
      color={iconColor}
      _hover={{
        bg: hoverBg,
      }}
      zIndex={10}
    />
  );
}
