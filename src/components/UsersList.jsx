import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { socket } from "../socket-client";
import { useEffect, useState } from "react";

export function UsersList({ usersListModal }) {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    socket.on("users", (usersListData) => {
      // console.log("users ", usersListData);
      setUsersList(usersListData);
    });
  }, [socket]);

  return (
    <Drawer
      isOpen={usersListModal.isOpen}
      placement="right"
      onClose={usersListModal.onClose}
    >
      <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
      <DrawerContent maxW={{ base: "68vw", md: "40vw", lg: "30vw" }}>
        <DrawerCloseButton fontSize={"md"} />
        <DrawerHeader>Users in room</DrawerHeader>
        <DrawerBody>
          <UnorderedList>
            {usersList &&
              usersList.map((user, index) => (
                <ListItem key={index} style={{ textTransform: "capitalize" }}>
                  {user.username}
                </ListItem>
              ))}
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
