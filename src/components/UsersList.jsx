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
            <ListItem>VG Rajan</ListItem>
            <ListItem>Suruthika</ListItem>
            <ListItem>Mohanraj</ListItem>
            <ListItem>Sathya</ListItem>
            <ListItem>Sharanya</ListItem>
            <ListItem>Bharath</ListItem>
            <ListItem>Prem</ListItem>
            <ListItem>Naruto Uzumaki</ListItem>
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
