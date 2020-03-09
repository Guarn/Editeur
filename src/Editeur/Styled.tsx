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
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 300ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:before {
    content: "";
    border-left: 5px solid lightskyblue;
    border-radius: 7px 0px 0px 7px;
    position: absolute;
    left: -15px;
    top: 50%;
    height: 100%;
    transform-origin: top left;
    transform: ${props =>
      props.isActive
        ? "translateY(-50%) scaleY(1)"
        : "translateY(0%) scaleY(0)"};
    transition: height 200ms, transform 200ms;
  }
`;

// !SECTION
