import { VStack } from "@chakra-ui/react";
import SquareExternalButton from "../../components/common/button/SquareExternalButton";
import linktreeExternalButtonData from "../../constants/linktreeExternalButtonData";

export default function LinkTree() {
  return (
    <VStack alignItems="center" flex={1} w="full" spacing={16}>
      <VStack as="main" flex={1} w="3xl" spacing="5">
        {linktreeExternalButtonData.map((data) => (
          <SquareExternalButton
            key={data.key}
            href={data.link}
            label={data.title}
          />
        ))}
      </VStack>
    </VStack>
  );
}
