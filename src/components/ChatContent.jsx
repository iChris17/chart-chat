/* eslint-disable react/prop-types */
import { Avatar, Box, Typography } from "@mui/material";
import { useCallback, useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const ReceivedMessage = ({ message }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
      <Avatar sx={{ width: 24, height: 24 }} />
      <Box>
        <Typography
          variant="body2"
          bgcolor="#ffff"
          sx={{
            padding: "8px 12px",
            borderRadius: "5px",
            maxWidth: "90%",
            lineHeight: 1.5,
            wordWrap: "break-word",
          }}
        >
          {message.body}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ marginTop: "4px", fontSize: "0.75rem" }}
        >
          {`${message.sender} ${formatTimestamp(message.timestamp)}`}
        </Typography>
      </Box>
    </Box>
  );
};

const SentMessage = ({ message }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
      <Box>
        <Typography
          variant="body2"
          bgcolor="primary.main"
          color="#ffff"
          sx={{
            padding: "8px 12px",
            borderRadius: "5px",
            maxWidth: "90%",
            lineHeight: 1.5,
            wordWrap: "break-word",
          }}
        >
          {message.body}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            marginTop: "4px",
            fontSize: "0.75rem",
            textAlign: "right",
          }}
        >
          {`${message.sender} ${formatTimestamp(message.timestamp)}`}
        </Typography>
      </Box>
      <Avatar sx={{ width: 24, height: 24 }} />
    </Box>
  );
};

const ChatContent = () => {
  const { messages, loading } = useContext(ChatContext);
  const chatBodyRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatBodyRef]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <Box
      sx={{
        flex: 1,
        padding: "8px 16px",
        backgroundColor: "#f7f8fc",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
      ref={chatBodyRef}
    >
      {messages.map((message, index) => {
        if (message.sender === "Pharus") {
          return <ReceivedMessage message={message} key={`message-${index}`} />;
        }
        return <SentMessage message={message} key={`message-${index}`} />;
      })}

      {loading && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <MoreHorizIcon sx={{ color: "#999" }} />
        </Box>
      )}
    </Box>
  );
};

export default ChatContent;
