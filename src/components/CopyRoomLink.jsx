import { Button, Flex, Input, useClipboard } from "@chakra-ui/react";

export function CopyRoomLink() {
  const { onCopy, hasCopied } = useClipboard(
    "https://anonymous.chat.app/join/abc"
  );

  return (
    <>
      <Flex mb={2}>
        <Input
          isDisabled
          variant="flushed"
          value={"https://anonymous.chat.app/join/abc"}
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
    </>
  );
}
