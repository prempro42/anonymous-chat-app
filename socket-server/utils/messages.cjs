async function formatMessage(user, usermessage) {
  let messages = [];

  // Create default message
  messages.push({
    user,
    message: {
      content: usermessage,
      type: "message",
    },
    timestamp: new Date(),
  });

  return messages;
}

function formatNotice(message) {
  const user = {
    id: 1,
    username: "bot",
  };

  return {
    user,
    message: {
      content: message,
      type: "notice",
    },
    timestamp: new Date(),
  };
}

module.exports = {
  formatMessage,
  formatNotice,
};
