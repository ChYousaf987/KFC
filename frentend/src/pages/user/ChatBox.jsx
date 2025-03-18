import * as React from "react";
import {
  Box,
  SwipeableDrawer,
  Button,
  TextField,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
// import bgImage from "../../assets/"; // Import your WhatsApp-style background image

// console.log(bgImage);
export default function ChatBox({ socket }) {
  const [state, setState] = React.useState({ bottom: false });
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const { user } = useSelector((state) => state.auth);

  const toggleDrawer = (open) => () => {
    setState({ bottom: open });
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      username: user.username, // Replace with actual username from context or state
      message,
      sent: true,
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit("sent_message", newMessage);
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  React.useEffect(() => {
    socket.on("show_message", (data) => {
      setMessages([...messages, { ...data, sent: false }]);
    });
  }, [messages]);

  return (
    <div>
      <Button
        className="w-100 mt-2"
        color="success"
        variant="contained"
        onClick={toggleDrawer(true)}
      >
        Chat With Seller
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: { height: "60%", borderRadius: "20px 20px 0 0" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundImage:
              "url(https://cdn.wallpapersafari.com/27/32/jt4AoG.jpg)",

            backgroundPosition: "center",
          }}
        >
          {/* Chat Header */}
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              bgcolor: "#075E54",
              color: "white",
            }}
          >
            <FaUser style={{ marginRight: 8 }} />
            <Typography variant="h6">Chat with Seller</Typography>
          </Paper>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {messages.map((msg) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: msg.sent ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    width: "30%",
                    borderRadius: "12px",
                    bgcolor: msg.sent ? "#D9FDD3" : "#FFF",
                    color: msg.sent ? "black" : "black",
                    maxWidth: "75%",
                    fontSize: "14px",
                    boxShadow: 1,
                  }}
                >
                  <strong
                    style={{
                      fontSize: "12px",
                      color: msg.sent ? "#5a8fe4" : "#e45866",
                    }}
                  >
                    {msg.username}
                  </strong>
                  <br />
                  {msg.message}
                  <br />
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "10px",
                      color: msg.sent ? "gray" : "gray",
                      display: "block",
                      textAlign: "right",
                    }}
                  >
                    {msg.timestamp}
                  </Typography>
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              display: "flex",
              p: 2,
              bgcolor: "white",
              borderTop: "1px solid #ddd",
            }}
          >
            <TextField
              fullWidth
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              sx={{ bgcolor: "#F0F0F0", borderRadius: "20px" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <IconButton color="primary" onClick={sendMessage} sx={{ ml: 1 }}>
              <FaPaperPlane />
            </IconButton>
          </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
