import React, { useEffect, useRef } from "react";
import { AbsoluteCenter, Badge, Box, Divider, Flex, Text } from "@chakra-ui/react";

const ChatMessages = ({ messages, username }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView(), []);
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" className="chatMessages">
      {messages.map((item, index) => {
        if (item.message.type === "notice") {
          return (
            <Box key={index} position="relative" padding="8">
              <Divider />
              <AbsoluteCenter px="4">
                <Badge variant="subtle" colorScheme="green">
                  {item.message.content}
                </Badge>
              </AbsoluteCenter>
            </Box>
          );
        } else if (item.user.username === username) {
          return (
            <Flex key={index} w="100%" flexDirection="column" alignItems="flex-end">
              <Text position="relative" fontSize="xs">
                you ~
              </Text>
              <Flex
                borderRadius="md"
                // bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                bgGradient="linear(to-r, teal.500, green.500)"
              >
                <Text>{item.message.content}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%" flexDirection="column" alignItems="flex-start">
              <Text position="relative" fontSize="xs" style={{ textTransform: "lowercase" }}>
                ~ {item.user.username}
              </Text>
              <Flex borderRadius="md" bg="gray.100" color="black" minW="100px" maxW="350px" my="1" p="3">
                <Text>{item.message.content}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default ChatMessages;
