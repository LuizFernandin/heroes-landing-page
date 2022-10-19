import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 84px;

        color: #1E255E;
    }

    h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        color: rgba(30, 37, 94, 0.7);

        margin-top: 20px;
        width: 400px;
    }
`;

export const ColumnImage = styled.div`
    text-align: end;
`