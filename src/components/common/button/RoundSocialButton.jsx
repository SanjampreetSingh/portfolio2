import {
  chakra,
  VisuallyHidden,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

export default function RoundSocialButton(props) {
  const { icon, label, href } = props;
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#aeccec",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon as={icon} />
    </chakra.button>
  );
}
