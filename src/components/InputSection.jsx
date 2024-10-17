import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import SendIcon from "@mui/icons-material/Send";

const InputSection = () => {
  const [text, setText] = useState("");
  const { addMessage } = useContext(ChatContext);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addMessage(text);
    setText("");
  };

  return (
    <Box
      sx={{
        padding: "8px",
        borderTop: "1px solid #E0E0E0",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleOnSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          padding: "4px 8px",
          borderRadius: "24px",
          border: "1px solid #E0E0E0",
          backgroundColor: "#f7f8fc",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Type your question here..."
          value={text}
          onChange={handleOnChange}
        />
        <IconButton type="button" sx={{ p: "10px" }} onClick={handleOnSubmit}>
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default InputSection;
