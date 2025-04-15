import { useState } from "react";
import ChatRoom from "./chatRoom";

export default function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false); // falsy-початковий стан чату
  return (
    <>
      <label htmlFor="#">
        Chose the chat room:{""}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
