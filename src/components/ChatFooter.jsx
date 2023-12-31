import { Box, HStack, IconButton, Input } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BsSendFill } from "react-icons/bs";

function ChatFooter({ inputMessage, setInputMessage, handleSendMessage }) {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView(), []);
    return <div ref={elementRef} />;
  };
  return (
    <Box pos="relative" bottom={0} mx={"auto"} w={"100%"}>
      <HStack py={4}>
        <Input
          variant="filled"
          placeholder="enter message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <IconButton isDisabled={inputMessage.trim().length <= 0} onClick={handleSendMessage} aria-label="Send Icon" icon={<BsSendFill size={24} />} />
      </HStack>
      <AlwaysScrollToBottom />
    </Box>
  );
}

export default ChatFooter;
