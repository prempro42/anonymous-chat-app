import { Box, HStack, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { BsSendFill } from "react-icons/bs";

function ChatFooter({ inputMessage, setInputMessage, handleSendMessage }) {
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
        <IconButton
          isDisabled={inputMessage.trim().length <= 0}
          onClick={handleSendMessage}
          aria-label="Search database"
          icon={<BsSendFill size={24} />}
        />
      </HStack>
    </Box>
  );
}

export default ChatFooter;
