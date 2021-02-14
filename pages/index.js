import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Card } from '../src/components/Card/styles';
import { Button } from '../src/components/Button/styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Index({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <Wrapper>
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

          )
        })}
      </Wrapper>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data };
}
