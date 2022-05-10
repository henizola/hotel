import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { styled as newStyled } from "@mui/material/styles";

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  .p-t-50 {
    padding: 20px 0;
  }
  ul {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    li {
      margin-top: 5px;
    }
    span {
      margin: 0;
    }
  }
  img {
    max-width: 100%;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 5px;
    object-fit: cover;
  }
  .desc {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin: 0 auto;
  }
  button {
    margin: 20px 10px;
    width: 90%;
    background-color: #000;
    border: none;
    padding: 10px;
    border-radius: 20px;
    color: #fff;
  }
  .added {
    background-color: #fff;
    border: 1px solid black;
    color: #000;
  }
  .hover {
    display: none;
  }
  button:hover .hover {
    display: inline-block;
    width: 12px;
    height: 12px;
  }

  .discount {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 15px;
    right: 5%;
  }
  .loader {
    border: 6px solid #999898;
    border-radius: 50%;
    border-top: 6px solid #3498db;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30px;
    transform: translate(-50%, -50%);
  }
`;

export const Item = newStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
}));
