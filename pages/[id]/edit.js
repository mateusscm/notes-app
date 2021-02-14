import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button } from "../../src/components/Button/styles";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Card } from "../../src/components/Card/styles";
import Input from "../../src/components/Input";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    align-self: center;
  }
`;

MainContainer.Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
`;

const CustomCard = styled(Card)`
  width: 500px;
  transition: width 0.5s;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 800px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

function EditNote({ note }) {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateNote();
        // alert("Success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateNote = async () => {
    const noteId = router.query.id;
    try {
      const res = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    return err;
  };

  return (
    <MainContainer>
      <h1>Update Note</h1>
      <MainContainer.Wrapper>
        {isSubmitting ? (
          <div>Carregando tranquilo...</div>
        ) : (
          <CustomCard as="form" onSubmit={handleSubmit}>
            <Input
              label="Title"
              variant="input"
              name="title"
              errorMsg={errors?.title}
              // placeholder="Title"
              type="text"
              value={form.title}
              onChange={handleChangeInput}
              fullWidth
              style={{ marginBottom: "16px" }}
            />
            <Input
              label="Description"
              variant="textarea"
              name="description"
              errorMsg={errors?.description}
              // placeholder="Description"
              value={form.description}
              onChange={handleChangeInput}
              rows={6}
              fullWidth
              style={{ marginBottom: "16px" }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit">Edit</Button>
            </div>
          </CustomCard>
        )}
      </MainContainer.Wrapper>
    </MainContainer>
  );
}

EditNote.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();
  return {
    note: data,
  };
};

export default EditNote;
