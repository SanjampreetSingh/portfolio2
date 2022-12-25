import {
  Box,
  VStack,
  Link,
  Icon,
  Divider,
  Center,
  Show,
} from "@chakra-ui/react";

import "./leftSocial.css";
import leftSocialLinkData from "../../constants/leftSocialLinkData";

export default function LeftSocial() {
  return (
    <Show breakpoint="(min-width: 1200px)">
      <Box zIndex={10} className="left-social-container">
        <VStack as={"ul"} className="left-social-stack">
          {leftSocialLinkData?.map((d) => (
            <li key={d.key}>
              <Link className="left-social-link" href={d.link}>
                <Icon h="18px" w="18px" as={d.icon} />
              </Link>
            </li>
          ))}
          <Center height="40vh">
            <Divider orientation="vertical" className="left-social-hr" />
          </Center>
        </VStack>
      </Box>
    </Show>
  );
}
