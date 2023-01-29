import { VStack } from "@chakra-ui/react";

import SectionLayout from "../../components/common/layout/SectionLayout";
import Introduction from "../../components/introduction/Introduction";
import { sectionsData } from "../../constants/sectionsData";

export default function Main() {
  return (
    <VStack as="main" flex={1} w="full" spacing="24">
      <Introduction />
      {sectionsData.map((i, k) => (
        <SectionLayout
          key={k}
          heading={i.title}
          subheading={i.subtitle}
          section={<i.component />}
        />
      ))}
    </VStack>
  );
}
