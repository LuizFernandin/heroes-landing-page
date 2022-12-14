import styled from "styled-components";

export const MenuList = styled.ul`
    margin-left: auto;
`;

export const ItemList = styled.li`
    display: inline-block;
    margin-right: 25px;
    font-weight: 500;

    a {
        color: #1E255E;
        transition: all 25ms ease-out;

        &:hover {
            color: #17A4D0;
        }
    }
`;