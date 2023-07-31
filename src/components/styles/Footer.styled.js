import styled from "styled-components";

export const StyledFooter = styled.footer`
    color: GreenYellow;
    padding: 100px 0 60px;
    background-color: Black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: bold;
    border-radius: 0 0 20px 20px;

    ul {
    list-style-type: none;
    }

    ul li {
    margin-bottom: 20px;
    }

    p {
    text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
        padding: 0;
    }
    p {
        text-align: center;
    }
    }
`