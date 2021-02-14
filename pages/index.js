import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Card } from "../src/components/Card/styles";
import { Button } from "../src/components/Button/styles";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    align-self: center;
  }
`;

MainContainer.Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export default function Index({ notes }) {
  return (
    <MainContainer>
      <h1>Notes</h1>
      <MainContainer.Wrapper>
        {notes.map((note) => {
          return (
            <Card key={note._id}>
              <Card.Header>
                <Link href={`/${note._id}`}>
                  <a>{note.title}</a>
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href={`/${note._id}`}>
                  <Button>View</Button>
                </Link>
                <Link href={`/${note._id}/edit`}>
                  <Button>Edit</Button>
                </Link>
              </Card.Content>
            </Card>
          );
        })}
      </MainContainer.Wrapper>
    </MainContainer>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();

  return { notes: data };
};
