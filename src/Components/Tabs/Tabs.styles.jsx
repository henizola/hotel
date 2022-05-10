import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 130px;
  border: 1px solid #bebbbbb6;
  padding: 20px 0;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  svg {
    fill: gray !important;
  }
  background-color: rgb(240, 240, 240) !important;
  h1 {
    text-transform: capitalize;
  }
`;

export const SearchContainer = styled.div`
  width: 40vw;
  position: "relative";
`;

export const SearchBar = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  button {
    margin-left: 20px;
    border: 1px solid gray;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    margin-top: 10px;
  }
`;
