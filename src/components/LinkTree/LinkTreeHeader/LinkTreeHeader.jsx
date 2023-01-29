import { Image, Text, useColorMode } from "@chakra-ui/react";

import logoWt from "../../../assets/images/logo-wt.webp";
import logoDk from "../../../assets/images/logo-dk.webp";

export default function LinkTreeHeader() {
  const { colorMode } = useColorMode();
  const logo = colorMode === "light" ? logoWt : logoDk;

  return (
    <>
      <Image
        src={logo}
        boxSize="14"
        w="100"
        objectFit="fill"
        loading="lazy"
        alt="Sanjam Dev logo"
      />
      <Text fontSize="3xl">Sanjampreet Singh</Text>
      <Text fontSize="xl" marginBottom="2rem !important">
        Fullstack Developer | Content Creator | Kirtaniya | Turbanator
      </Text>
    </>
  );
}
