import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

import "./search.css";
import ActionList from "../actionList/ActionList";

export default function Search(props) {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus
      blockScrollOnMount
      closeOnEsc
      closeOnOverlayClick
      size={"3xl"}
      className="search-model"
      style={{ zIndex: 1700 }}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(2px)"
        style={{ zIndex: 1400 }}
      />
      <ModalContent style={{ zIndex: 1700 }} className="search-content">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={1}
          align="stretch"
        >
          <Input
            placeholder="Search commands (ex. Change theme)"
            className="search-bar"
            variant="outline"
            focusBorderColor="transparent"
          />
          <ActionList />
        </VStack>
      </ModalContent>
    </Modal>
  );
}
