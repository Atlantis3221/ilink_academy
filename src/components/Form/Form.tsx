import SVG from "react-inlinesvg";
import Cross from "../../img/icons/FormCross.svg";
import { CustomButton, CrossIcon, ButtonLabel } from "../Button";
import Plus from "../../img/icons/Cross.svg";
import Info from "../../img/icons/InfoSquare.svg";
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
  Count,
  InputLabel,
  InputFile,
  FormFooter,
  FooterIconWrapper,
  FormFooterText,
} from "./styled";
import FileUpload from "../FileUpload";
import { SvgWrapper } from "../SvgWrapper";
import { useNotificationContext } from "../../context/NotificationContext";

interface IFormData {
  name: string;
  description: string;
}

const validator = (formData: IFormData) => {
  const descriptionValidator = () => {
    if (formData.description.length === 0) return "это поле обязательное";
    if (formData.description.length > 200) return "максимум 200 символов";
    return "";
  };
  const nameValidator = () => {
    if (formData.name.length === 0) return "это поле обязательное";
    return "";
  };

  return {
    name: nameValidator(),
    description: descriptionValidator(),
  };
};

const DEFAULT_FORM_DATA = {
  name: "",
  description: "",
};

const Form = () => {
  const [formData, setFormData] = useState<IFormData>(DEFAULT_FORM_DATA);
  const [formError, setFormError] = useState<IFormData>({
    name: "",
    description: "",
  });
  const [fileName, setFileName] = useState("");

  const { handleClose } = useModalContext();
  const { handleOpen } = useNotificationContext();

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const errors = validator(formData);

    handleOpen("error");
    setFormError(errors);

    if (errors.name.length !== 0 || errors.description.length !== 0) return;

    handleClose();
    alert(
      `name: ${formData.name}\ndescription: ${formData.description}\nfilename: ${fileName}`
    );
    setFormData(DEFAULT_FORM_DATA);

    handleOpen("success");
  };

  const handleFileLoad = (event: any) => {
    setFileName(event.target.files[0].name);
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

          <InputLabel>
            <CrossIcon>
              <SVG src={Plus} />
            </CrossIcon>
            <InputFile type="file" onChange={handleFileLoad} />
            <p>Загрузить фото</p>
          </InputLabel>
        </AutorBody>
        {fileName && <FileUpload fileName={fileName} />}
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
          <Count>{formData.description.length}/200</Count>
        </InputWrapper>
      </Row>

      <FormFooter>
        <CustomButton>
          <ButtonLabel>Отправить отзыв</ButtonLabel>
        </CustomButton>

        <FooterIconWrapper>
          <SvgWrapper>
            <SVG src={Info} />
          </SvgWrapper>
        </FooterIconWrapper>

        <FormFooterText>
          Все отзывы проходят модерацию в течение 2 часов
        </FormFooterText>
      </FormFooter>
    </FormContainer>
  );
};

export default Form;
