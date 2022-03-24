import styled from "styled-components";
import { SvgWrapper } from "../SvgWrapper";
import { FactorA } from "../FactorA";

export const FormContainer = styled.form``;
export const FormCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const FormCross = styled(SvgWrapper)`
  cursor: pointer;
`;
export const Row = styled.div`
  margin-bottom: 32px;
`;
export const AutorCaption = styled(FactorA)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 14px;
`;
export const AutorBody = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const AutorInput = styled.input`
  padding: 15px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  margin-right: 16px;
  width: 100%;
`;
export const OpinionInput = styled.textarea`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-family: "Gilroy";
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;

  width: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FormErrorLabel = styled.span`
  position: absolute;
  bottom: -20px;
  left: 2px;
  color: red;
`;

export const Count = styled.span`
  position: absolute;
  right: 4px;
  bottom: 4px;

  font-family: "Gilroy";
  font-size: 10px;
  line-height: 14px;
  color: #8A8A8A;
`;
export const InputLabel = styled.label`
  display: flex;
  white-space: nowrap;
  background: #585cc6;
  border-radius: 2px;
  border: none;

  font-weight: 600;
  line-height: 18px;
  color: #ffffff;

  padding: 17px 28px;
  margin-left: 16px;

  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;

export const FormFooter = styled.div`
display: flex;
align-items: center;
`
export const FooterIconWrapper = styled.div`
  margin-left: 18px;
  margin-right: 10px;
`

export const FormFooterText = styled.div`
  font-family: "Gilroy";
  font-size: 12px;
  line-height: 16px;
  color: #8A8A8A;
`
