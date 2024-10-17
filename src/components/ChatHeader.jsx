/* eslint-disable react/prop-types */
import { Box, Button, CardContent, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const ChatHeader = ({ toggleChatbox }) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      {/* New chat button */}
      <Button variant="contained" color="ligth" startIcon={<AddIcon />}>
        New chat
      </Button>

      {/* Icon buttons */}
      <Box>
        <IconButton>
          <OpenInFullIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <IconButton onClick={toggleChatbox}>
          <CloseIcon />
        </IconButton>
      </Box>
    </CardContent>
  );
};

export default ChatHeader;
