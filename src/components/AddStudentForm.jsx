import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string().required('Student ID is required'),
  name: yup.string().required('Name is required'),
  course: yup.string().required('Course is required'),
  grade: yup.string().required('Grade is required'),
  date: yup.string().required('Enrollment Date is required'),
});

function AddStudentForm({ onAdd }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    onAdd(data);
    reset();
    alert('Student added successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Student ID</label>
          <input {...register('id')} className="border p-2 w-full" />
          <p className="text-red-600">{errors.id?.message}</p>
        </div>
        <div>
          <label>Name</label>
          <input {...register('name')} className="border p-2 w-full" />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>
        <div>
          <label>Course</label>
          <input {...register('course')} className="border p-2 w-full" />
          <p className="text-red-600">{errors.course?.message}</p>
        </div>
        <div>
          <label>Grade</label>
          <input {...register('grade')} className="border p-2 w-full" />
          <p className="text-red-600">{errors.grade?.message}</p>
        </div>
        <div>
          <label>Enrollment Date</label>
          <input type="date" {...register('date')} className="border p-2 w-full" />
          <p className="text-red-600">{errors.date?.message}</p>
        </div>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Student
      </button>
    </form>
    );
}

export default AddStudentForm;
