import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../../src/components/Button/styles";

function Note({ note }) {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);

  const openModal = () => setConfirm(true);

  const closeModal = () => setConfirm(false);

  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const deleted = await fetch(`http//localhost:3000/api/notes/${noteId}`, {
        method: "Delete",
      });
      router.push("/");
      return deleted;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div>
      {isDeleting ? (
        <div>Carregando tranquilo...</div>
      ) : (
        <>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
          <Button onClick={openModal}>Delete</Button>
        </>
      )}
      {/* <Modal open={confirm} onCancel={closeModal} onConfirm={handleDelete} /> */}
    </div>
  );
}

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();
  return {
    note: data,
  };
};

export default Note;
