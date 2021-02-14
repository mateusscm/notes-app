import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../../src/components/Button/styles";
import Modal from "styled-react-modal";

const Confirm = Modal.styled`
  background-color: ${({ theme }) => theme.paper};
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0px;
    margin-bottom: 16px;
  }

  .description {
    margin-bottom: 16px;
  }

  .action {
    display: flex;
    justify-content: flex-end;
  }
`;
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
      const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "Delete",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    closeModal();
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
      <Confirm isOpen={confirm} onBackgroundClick={closeModal}>
        <h3>Are you sure that you wanna delete this file?</h3>
        <span className="description">
          The file: <b>{note.title}</b> will not exist anymore.
        </span>
        <div className="action">
          <Button onClick={closeModal} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>Confirm</Button>
        </div>
      </Confirm>
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
