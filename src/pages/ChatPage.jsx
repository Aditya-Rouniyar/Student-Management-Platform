import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ThreadList from '../components/Chat/ThreadList';
import Conversation from '../components/Chat/Conversation';

function ChatPage() {
  const [threads, setThreads] = useLocalStorage('threads', [
    { id: '1', name: 'Advisor', messages: [{ sender: 'advisor', text: 'Hello, how can I help?' }] },
  ]);
  const [selected, setSelected] = useState(threads[0].id);

  const handleSend = text => {
    setThreads(threads.map(t =>
      t.id === selected
        ? { ...t, messages: [...t.messages, { sender: 'student', text }] }
        : t
    ));
  };

  const currentThread = threads.find(t => t.id === selected);

  return (
    <div className="flex h-full">
      <ThreadList threads={threads} selected={selected} onSelect={setSelected} />
      <Conversation thread={currentThread} onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
