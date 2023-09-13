import { useState } from "react";
import { Container } from "@chakra-ui/react";
import ChatHeader from "../components/ChatHeader";
import ChatFooter from "../components/ChatFooter";
import ChatMessages from "../components/ChatMessages";

function Chat() {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Naruto" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Container
      maxW={{ base: "100%", md: "container.sm" }}
      h={"100vh"}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
    >
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatFooter
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </Container>
  );
}

export default Chat;
