/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Card, Button } from "@mui/material";

import { Chat } from "@mui/icons-material";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import InputSection from "./InputSection";

const FloatingChatBox = () => {
  const [open, setOpen] = useState(false);

  const toggleChatbox = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {!open && (
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleChatbox}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            borderRadius: "50%",
            minWidth: "56px",
            minHeight: "56px",
          }}
        >
          <Chat />
        </Button>
      )}

      {open && (
        <Card
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            width: "320px",
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            border: "1px solid #ddd",
          }}
        >
          <ChatHeader toggleChatbox={toggleChatbox} />
          <ChatContent />
          <InputSection />
        </Card>
      )}
    </Box>
  );
};

export default FloatingChatBox;
