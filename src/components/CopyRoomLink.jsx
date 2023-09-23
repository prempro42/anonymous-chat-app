import { Button, Flex, Input, useClipboard } from "@chakra-ui/react";

export function CopyRoomLink({ state }) {
  const { onCopy, value, hasCopied } = useClipboard(
    `${window.location.origin}/join/${state.room}`
  );

  return (
    <>
      <Flex mb={2}>
        <Input isDisabled variant="flushed" value={value} mr={2} />
        <Button colorScheme="green" onClick={onCopy}>
          {hasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
    </>
  );
}
