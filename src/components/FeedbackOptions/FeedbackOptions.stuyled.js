import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Item = styled.li`
&:not(:last-child){
    margin-right:10px;
}
`

export const Btn = styled.button`
width: 70px;
height: 25px;
border: 1px solid gray;
    border-radius: 10%;
    color: black;
    background-color: burlywood;
`