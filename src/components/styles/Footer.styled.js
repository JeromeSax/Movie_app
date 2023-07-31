import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #0000FF;
    color: black;
    padding: 100px 0 60px;
    font-size: 25px;

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