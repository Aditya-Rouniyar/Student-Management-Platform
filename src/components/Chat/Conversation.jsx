import React, { useState } from 'react';

function Conversation({ thread, onSend }) {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex-1 flex flex-col p-4">
      <div className="flex-1 overflow-auto mb-4">
        {thread.messages.map((m, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${m.sender === 'student' ? 'self-end bg-blue-200' : 'self-start bg-gray-200'}`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message"
          className="border p-2 flex-1"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Conversation;
