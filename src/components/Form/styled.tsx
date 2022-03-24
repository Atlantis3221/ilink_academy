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
const FormOpinion = styled.div`
  margin-bottom: 40px;
`;
export const OpinionInput = styled.textarea`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
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
  right: 0;
  bottom: 0;
`