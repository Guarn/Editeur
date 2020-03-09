import styled from "styled-components";
import { RectSelectI } from "./interfaces";

export const ToolBarCtn = styled.div`
  top: 0px;
  left: 0px;
  background-color: #707070;
  height: 46px;
  border-radius: 5px;
  display: flex;
  box-shadow: 0 0 5px;
`;

export const Separateur = styled.div`
  width: 1px;
  background-color: #a59d75;
`;

/**
 * Définition standard d'un bouton de la toolbar
 */
export const Outils = styled.div`
  position: relative;
  width: 45px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "century gothic";
  font-size: 24px;
  color: white;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

/**
 * Indicateur de sélection du bouton
 * @param isActive
 */
export const RectSelect = styled.div<RectSelectI>`
  position: absolute;
  width: ${props => (props.isActive ? "35px" : "0px")};
  height: 3px;
  bottom: 2px;
  left: 5px;
  border-radius: 3px;
  background-color: #ffda48;
  transition: all 0.2s;
  transform: ${props =>
    props.isActive ? "translate3d(0,0,0)" : "translate3d(17px,0,0)"};
`;
