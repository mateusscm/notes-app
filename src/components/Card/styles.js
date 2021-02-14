import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.paper};
  border-radius: 16px;
  padding: 16px 24px;
  min-width: 225px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

  &:last-child {
    margin-right: 0px;
  }
`;

Card.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    background-color: #666;
    margin: 0px auto;
  }
`;

Card.Content = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;

  > button {
    margin-right: 8px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;
