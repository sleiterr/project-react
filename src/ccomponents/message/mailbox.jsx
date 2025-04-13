// mailbox.jsx
const Mailbox = ({ username, messages = [] }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread message</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread message</p>
      )}
    </div>
  );
};

export default Mailbox;