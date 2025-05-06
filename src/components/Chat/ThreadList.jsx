import React from 'react';

function ThreadList({ threads, selected, onSelect }) {
  return (
    <div className="w-1/4 border-r p-2 overflow-auto">
      {threads.map(t => (
        <div
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`p-2 cursor-pointer ${t.id === selected ? 'bg-gray-200' : ''}`}
        >
          {t.name}
        </div>
      ))}
    </div>
  );
}

export default ThreadList;
