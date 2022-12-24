import { Modal, ModalOverlay, ModalContent, Input } from "@chakra-ui/react";

import "./search.css";

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
        backdropFilter="blur(10px)"
        style={{ zIndex: 1400 }}
      />
      <ModalContent style={{ zIndex: 1700 }} className="search-content">
        <Input
          placeholder="Search commands (ex. Change theme)"
          className="search-bar"
          variant="outline"
        />
      </ModalContent>
    </Modal>
  );
}
