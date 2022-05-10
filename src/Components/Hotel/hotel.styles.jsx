import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  height: 100%;

  border: 1px solid gray;
  border-radius: 5px;
  text-align: left !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 14px;
  .sections {
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 5px;
  }
  button {
    margin: 0 !important;
    margin-top: 30px !important;
  }
  @media screen and (max-width: 600px) {
    width: 95vw !important;
  }
`;
