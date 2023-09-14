import { Button, Flex, Input, useClipboard } from "@chakra-ui/react";

export function CopyRoomLink({ state }) {
  const { onCopy, value, hasCopied } = useClipboard(
    `https://anonymous-chat-app-prem.vercel.app/join/${state.room}`
  );

  return (
    <>
      <Flex mb={2}>
        <Input isDisabled variant="flushed" value={value} mr={2} />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
    </>
  );
}
