import styled from "styled-components";
import { BlocT } from "./interfaces";

export const EditeurCtn = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
// SECTION ChampEdition

export const ChampEditionCtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ChampEdition = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
`;

// !SECTION

// SECTION ToolBar

export const ToolbarCTN = styled.div`
  top: 0;
  left: 0;
`;

// !SECTION

// SECTION Bloc

export const BlocCtn = styled.div`
  position: relative;
`;
export const Bloc = styled.div<BlocT>`
  &:before {
    content: "";
    border-left: 5px solid black;
    position: absolute;
    left: -10px;
    top: 0px;
    height: ${props => (props.selected ? "90%" : "0%")};
    transform: translateY(5%);
    transition: height 300ms;
  }
`;

// !SECTION
