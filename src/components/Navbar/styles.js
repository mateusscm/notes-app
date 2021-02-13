import styled from 'styled-components';

export const NavContainer = styled.nav`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${({theme}) => theme.header};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px;
    color: ${({theme}) => theme.text};
`;