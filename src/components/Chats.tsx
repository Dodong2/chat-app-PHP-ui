import { useState } from "react";
/********** Hooks **********/
import { useChat } from "../hooks/useChatHooks";

const Chats = () => {
  const { chat, loading, addChat } = useChat();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  //send
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await addChat(name, message);

    if (result.success) {
      setName("");
      setMessage("");
    } else {
      alert("Failed to send");
    }
  };

  return (
    <>
    {/* messages */}
    {loading && <p>Loading...</p>}

<div>
  {chat && chat.length > 0 ? (
    chat.map((chats) => (
      <div key={chats.id}>
        <div>{chats.name}</div>
        <div>{chats.message}</div>
      </div>
    ))
  ) : (
    <p>No messages available</p>
  )}
</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
          />
          <button type="submit">send</button>
        </form>

        
      </div>
    </>
  );
};

export default Chats;
