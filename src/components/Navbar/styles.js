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
    
    > a {
        text-decoration: none;
        color: ${({theme}) => theme.contrastText};
        font-size: 1.3rem;
        font-weight: bold;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 4px;
            background-color: ${({theme}) => theme.secondary};
        }
    }
`;