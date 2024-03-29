import { Stack } from "@chakra-ui/react";
import ImageCardWithExtLink from "../../common/cards/ImageCardWithExtLink";
import projectsData from "../../../constants/projectsData";

export default function Projects() {
  return (
    <Stack direction={["column", "row"]} spacing="10" w="full">
      {projectsData.map((data) => (
        <ImageCardWithExtLink
          key={data.key}
          img={data.img}
          imgAlt={data.imgAlt}
          title={data.title}
          description={data.description}
          href={data.href}
        />
      ))}
    </Stack>
  );
}
