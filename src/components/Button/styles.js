import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.contrastText};
    border-radius: 8px;
    border: 0;
    min-width: 100px;
    padding: 10px 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;
    &:hover,
    &:focus {
        opacity: .5;
    }
    &:disabled {
        background-color: #979797;
        cursor: not-allowed;
    }
`;
