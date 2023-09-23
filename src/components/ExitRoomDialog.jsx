import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket-client";

function ExitRoomDialog({ isOpen, onClose }) {
  const cancelRef = React.useRef();
  const navigate = useNavigate();

  const handleExitRoom = () => {
    localStorage.removeItem("user");
    socket.disconnect();
    navigate("/");
  };

  return (
    <AlertDialog
      p={4}
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={{ base: "xs", md: "md" }}
    >
      <AlertDialogOverlay backdropFilter="blur(8px)" />
      <AlertDialogContent>
        <AlertDialogHeader>
          Are you sure you want to exit the room?
        </AlertDialogHeader>
        {/* <AlertDialogCloseButton /> */}
        <AlertDialogBody>
          You won't be recieving new messages until you rejoin.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" ml={3} onClick={handleExitRoom}>
            Exit Room
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ExitRoomDialog;
