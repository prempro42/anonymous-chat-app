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
      placement="bottom"
      onClose={usersListModal.onClose}
    >
      <DrawerOverlay />
      <DrawerContent maxH="60vh" minH="40vh">
        <DrawerCloseButton fontSize={"md"} />
        <DrawerHeader>Users in room</DrawerHeader>
        <DrawerBody>
          <UnorderedList>
            <ListItem>VG Rajan</ListItem>
            <ListItem>Suruthika</ListItem>
            <ListItem>Mohanraj</ListItem>
            <ListItem>Sathya</ListItem>
            <ListItem>Sharanya</ListItem>
            <ListItem>Bharath</ListItem>
            <ListItem>Prem</ListItem>
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
