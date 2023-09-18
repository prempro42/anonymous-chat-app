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

export function UsersList({ usersListModal }) {
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
            <ListItem>Ed Winters</ListItem>
            <ListItem>Joey Carbstrong</ListItem>
            <ListItem>Seb Alex </ListItem>
            <ListItem>Soytheist </ListItem>
            <ListItem>Prem</ListItem>
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
