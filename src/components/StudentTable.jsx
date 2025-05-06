import React, { useState, useMemo } from 'react';

function StudentTable({ students }) {
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  const [filterTerm, setFilterTerm] = useState('');

  const sortedStudents = useMemo(() => {
    let filtered = students.filter(s =>
      s.id.includes(filterTerm) || s.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    return [...filtered].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [students, sortConfig, filterTerm]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const headers = [
    { key: 'id',    label: 'Student ID' },
    { key: 'name',  label: 'Name' },
    { key: 'course',label: 'Course' },
    { key: 'grade', label: 'Grade' },
    { key: 'date',  label: 'Enrollment Date' },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search by ID or name"
        value={filterTerm}
        onChange={e => setFilterTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {headers.map(h => (
              <th
                key={h.key}
                onClick={() => requestSort(h.key)}
                className="p-2 border-b cursor-pointer"
              >
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map(s => (
            <tr key={s.id}>
              <td className="p-2 border-b">{s.id}</td>
              <td className="p-2 border-b">{s.name}</td>
              <td className="p-2 border-b">{s.course}</td>
              <td className="p-2 border-b">{s.grade}</td>
              <td className="p-2 border-b">{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
