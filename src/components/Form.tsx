import styled from "styled-components";
import SVG from "react-inlinesvg";
import Cross from "../img/icons/FormCross.svg";
import { Btn, CrossIcon } from "./Button";
import Plus from "../img/icons/Cross.svg";

const FormContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background: yellow;
`;

const FormCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const FormCross = styled.div`
  display: flex;
`;

const FormAutor = styled.div`
  margin-bottom: 32px;
`;

const AutorCaption = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 14px;
`;

const AutorBody = styled.div`
  display: flex;
`;

const AutorInput = styled.input`
  padding: 15px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  margin-right: 16px;
`;

const FormOpinion = styled.div`
  margin-bottom: 40px;
`;

const OpinionInput = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
`;

const Form = () => {
  return (
    <FormContainer>
      <FormCaption>
        Отзыв
        <FormCross>
          <SVG src={Cross} />
        </FormCross>
      </FormCaption>
      <FormAutor>
        <AutorCaption>Как вас зовут?</AutorCaption>
        <AutorBody>
          <AutorInput placeholder="Имя Фамилия" />
          <Btn>
            <CrossIcon>
              <SVG src={Plus} />
            </CrossIcon>
            Загрузить фото
          </Btn>
        </AutorBody>
      </FormAutor>
      <FormOpinion>
        <AutorCaption>Все ли вам понравилось?</AutorCaption>
        <OpinionInput placeholder="Напишите пару слов о вашем опыте..."></OpinionInput>
      </FormOpinion>
    </FormContainer>
  );
};

export default Form;
