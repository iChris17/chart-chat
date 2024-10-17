/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialMessage = {
    body: "Welcome to Pharus, how can we help you?",
    sender: "Pharus",
    timestamp: new Date(),
  };
  const [messages, setMessages] = useState([initialMessage]);
  const [loading, setLoading] = useState(false);

  const getMessage = () => {
    setLoading(true);
    axios
      .get(
        "https://tenant-api-448160755331.us-central1.run.app/response_generator"
      )
      .then((response) => {
        console.log(response);
        const botResponse = {
          body: response.data.data,
          sender: "Pharus",
          timestamp: new Date(response.data.timestamp),
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addMessage = (message) => {
    const newMessage = {
      body: message,
      sender: "Christopher",
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    getMessage();
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
};
