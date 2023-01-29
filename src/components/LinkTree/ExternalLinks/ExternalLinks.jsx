import { VStack } from "@chakra-ui/react";
import linktreeExternalButtonData from "../../../constants/linktreeExternalButtonData";
import SquareExternalButton from "../../common/button/SquareExternalButton";

export default function ExternalLinks() {
  return (
    <VStack as="main" flex={1} w="3xl" spacing="5">
      {linktreeExternalButtonData.map((data) => (
        <SquareExternalButton
          key={data.key}
          href={data.link}
          label={data.title}
        />
      ))}
    </VStack>
  );
}
