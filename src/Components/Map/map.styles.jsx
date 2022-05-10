import styled from "styled-components";
export const MapHolder = styled.div`
  height: 634px;
  max-width: 100%;
  border-radius: 5px 5px;
  overflow: hidden;
  padding: 5px 5px;
  @media screen and (max-width: 450px) {
    height: 260px;
  }
`;

export const PopupLable = styled.span`
  font-size: 15px;
  color: #05b5d1;
  opacity: 0.5;
  font-weight: bold;
  text-decoration: underline;
`;

export const PopupDescription = styled.span`
  font-size: 16px;
  color: #414141;
`;

export const Related = styled.span`
  font-size: 12px;
  color: #05b5d1;
`;
