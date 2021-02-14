import styled, { css } from "styled-components";

export const InputAlt = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

InputAlt.Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

InputAlt.Normal = styled.input`
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 0 0 1px rgba(11, 65, 110, 0), 0 0 0 100px hsl(1, 100%, 0) inset;
  transition: border 0.25s linear, box-shadow 0.25s linear;
  font-size: 1rem;
  padding: 16px 16px;

  ${({ fullWidth }) =>
    !fullWidth
      ? css`
          width: 235px;
        `
      : css`
          width: 100%;
        `}

  &:-webkit-autofill {
    box-shadow: 0 0 0 1px rgba(11, 65, 110, 0),
      0 0 0 100px hsl(1, 100%, 0) inset;
  }

  &:focus {
    border-color: #0b41a0;
    box-shadow: 0 0 0 1px rgba(11, 65, 110, 1),
      0 0 0 100px hsl(1, 100%, 100%) inset;
    outline: none;
  }
`;

InputAlt.Textarea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 0 0 1px rgba(11, 65, 110, 0), 0 0 0 100px hsl(1, 100%, 0) inset;
  transition: border 0.25s linear, box-shadow 0.25s linear;
  font-size: 1rem;
  padding: 16px 16px;
  resize: none;
  font-family: inherit;

  &:-webkit-autofill {
    box-shadow: 0 0 0 1px rgba(11, 65, 110, 0),
      0 0 0 100px hsl(1, 100%, 0) inset;
  }

  &:focus {
    border-color: #0b41a0;
    box-shadow: 0 0 0 1px rgba(11, 65, 110, 1),
      0 0 0 100px hsl(1, 100%, 100%) inset;
    outline: none;
  }
`;

InputAlt.Error = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.wrong};
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
