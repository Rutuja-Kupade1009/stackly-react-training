
import { useState } from "react";
import "./App.css";

export default function App() {
  // Store the current input value
  const [message, setMessage] = useState("");

  // Store all sent messages
  const [messages, setMessages] = useState([]);

  // Update state whenever the user types
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Send the message
  const handleSendMessage = () => {
    const trimmedMessage = message.trim();

    // Prevent empty messages
    if (trimmedMessage === "") {
      return;
    }

    // Add the new message to the list
    setMessages((previousMessages) => [
      ...previousMessages,
      trimmedMessage,
    ]);

    // Clear the input field
    setMessage("");
  };

  // Send the message when Enter is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <h1>Mini Chat Application</h1>
        <p className="subtitle">
          Send a message using React useState
        </p>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleSendMessage}>
            Send Message
          </button>
        </div>
      </div>

      <div className="messages-container">
        <h2>Messages</h2>

        {messages.length === 0 ? (
          <p className="empty-message">
            No messages yet. Send your first message!
          </p>
        ) : (
          <ul className="message-list">
            {messages.map((msg, index) => (
              <li key={index} className="message-item">
                <span className="message-number">
                  {index + 1}.
                </span>
                {msg}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}