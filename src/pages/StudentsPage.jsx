import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import StudentTable from '../components/StudentTable';
import AddStudentForm from '../components/AddStudentForm';

function StudentsPage() {
  const [students, setStudents] = useLocalStorage('students', []);

  const handleAdd = student => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Students</h1>
      <AddStudentForm onAdd={handleAdd} />
      <StudentTable students={students} />
    </div>
  );
}

export default StudentsPage;
