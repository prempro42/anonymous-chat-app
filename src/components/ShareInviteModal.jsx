import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CopyRoomLink } from "./CopyRoomLink";

export function ShareInviteModal({ shareInviteModal, state }) {
  return (
    <Modal
      isOpen={shareInviteModal.isOpen}
      onClose={shareInviteModal.onClose}
      isCentered
      size={{ base: "xs", md: "md" }}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px) " />
      <ModalContent>
        <ModalHeader>Share link to a friend</ModalHeader>
        <ModalBody>
          <CopyRoomLink state={state} />
        </ModalBody>
        <ModalFooter alignSelf="center">
          <Button colorScheme="green" onClick={shareInviteModal.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
