import styled from "styled-components";
import { SvgWrapper } from "./SvgWrapper";

export const CustomButton = styled.button`
  display: flex;
  background: #585cc6;
  border-radius: 2px;
  border: none;

  font-family: "Gilroy";
  font-weight: 600;
  line-height: 18px;
  color: #ffffff;

  padding: 17px 28px;

  cursor: pointer;
`;


export const CrossIcon = styled(SvgWrapper)`
  margin-right: 10px;
`;

export const ButtonLabel = styled.p`
  margin: 0;
  white-space: nowrap;
`;
