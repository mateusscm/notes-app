import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button } from '../src/components/Button/styles';
import { useRouter } from 'next/router';

function NewNote() {
    const [form, setForm] = useState({ title: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

  return (
      <div>
          <h1>Create Note</h1>
          <div>
              { isSubmitting ? (
                  <div>Carregando tranquilo...</div>
              ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" name="title" onChange={handleChange} />
                    <textarea placeholder="Description" name="description" onChange={handleChange} />
                    <Button type="submit">Create</Button>
                  </form>
              )}
          </div>
      </div>
  );
}

export default NewNote;