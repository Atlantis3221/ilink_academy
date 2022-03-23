import SVG from "react-inlinesvg";
import Cross from "../../img/icons/FormCross.svg";
import { CustomButton, CrossIcon, ButtonLabel } from "../Button";
import Plus from "../../img/icons/Cross.svg";
import { FactorA } from "../FactorA";
import { useModalContext } from "../../context/ModalContext";
import { useState } from "react";
import {
  FormContainer,
  FormCaption,
  FormCross,
  Row,
  AutorCaption,
  AutorBody,
  InputWrapper,
  AutorInput,
  FormErrorLabel,
  OpinionInput,
} from "./styled";

interface IFormData {
  name: string;
  description: string;
}

const validator = (formData: IFormData) => {
  return {
    name: formData.name.length !== 0 ? "" : "это поле обязательное",
    description:
      formData.description.length !== 0 ? "" : "это поле обязательное",
  };
};

const Form = () => {
  const { handleClose } = useModalContext();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    description: "",
  });
  const [formError, setFormError] = useState<IFormData>({
    name: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const errors = validator(formData);

    setFormError(errors);

    if (errors.name.length !== 0 || errors.description.length !== 0) return;

    handleClose();
    alert(`${formData.name} - ${formData.description}`);
  };

  const handleFileLoad = (event: any) => {
    console.log(event.target.files[0].name);
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormCaption>
        <FactorA>Отзыв</FactorA>

        <FormCross onClick={handleClose}>
          <SVG src={Cross} />
        </FormCross>
      </FormCaption>

      <Row>
        <AutorCaption>Как вас зовут?</AutorCaption>

        <AutorBody>
          <InputWrapper>
            <AutorInput
              placeholder="Имя Фамилия"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            {formError?.name.length !== 0 && (
              <FormErrorLabel>{formError.name}</FormErrorLabel>
            )}
          </InputWrapper>

          <CustomButton>
            <CrossIcon>
              <SVG src={Plus} />
            </CrossIcon>

            <input type="file" onChange={handleFileLoad} />
          </CustomButton>
        </AutorBody>
      </Row>

      <Row>
        <AutorCaption>Все ли вам понравилось?</AutorCaption>

        <InputWrapper>
          <OpinionInput
            name="description"
            placeholder="Напишите пару слов о вашем опыте..."
            onChange={handleChange}
            value={formData.description}
          />
          {formError?.description.length !== 0 && (
            <FormErrorLabel>{formError.description}</FormErrorLabel>
          )}
        </InputWrapper>
      </Row>

      <CustomButton>
        <ButtonLabel>Отправить отзыв</ButtonLabel>
      </CustomButton>
    </FormContainer>
  );
};

export default Form;
