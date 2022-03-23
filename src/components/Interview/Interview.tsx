import Photo from "../../img/cARL.jpg";
import SVG from "react-inlinesvg";
import Man from "../../img/icons/Gachi.svg";
import Bowl from "../../img/icons/Bowl.svg";
import {
  InterviewCaption,
  InterviewContainer,
  InterviewPhoto,
  InterviewTextBlock,
  TextCaptionBlock,
  CaptionText,
  CaptionBirth,
  InfoBlock,
  InfoText,
  InfoIcon,
  AboutBlock,
  AboutMe,
  SeverLink,
  AboutAnimal,
  AnimalBlock,
  AnimalIcon,
  AnimalText,
} from "./styled";

const Interview = () => {
  return (
    <div>
      <InterviewCaption>
        Добро пожаловать
        <br /> в академию!
      </InterviewCaption>
      <InterviewContainer>
        <InterviewPhoto src={Photo} />
        <InterviewTextBlock>
          <TextCaptionBlock>
            <CaptionText>Степа Тугарев</CaptionText>
            <CaptionBirth>29.10.1998</CaptionBirth>
          </TextCaptionBlock>
          <InfoBlock>
            <InfoText>
              <div>
                <b>Город:</b> Томск
              </div>
            </InfoText>
            <InfoText>
              <div>
                <b>Пол:</b> это лава
              </div>
              <InfoIcon>
                <SVG src={Man} />
              </InfoIcon>
            </InfoText>
            <InfoText>
              <div>
                <b>Возраст:</b> это цифра в паспорте
              </div>
            </InfoText>
          </InfoBlock>
          <AboutBlock>
            <AboutMe>
              <b>О себе:</b> Всем привет! Меня зовут Степа, мне 23 года, бывший
              физик, занимаюсь гиревым спортом и снимаю видосы в экстремистский
              инстаграм. Занимаюсь фронтендом с ментором уже пол года и за это
              время смог поучаствовать в крутом проекте по расписанию автобусов
              <SeverLink href="https://severbus.ru/"> severbus.ru</SeverLink> и
              начать писать свой пет проект.
            </AboutMe>
            <AboutAnimal>По плану, весной устроиться джуном</AboutAnimal>
          </AboutBlock>
          <AnimalBlock>
            <AnimalIcon>
              <SVG src={Bowl} />
            </AnimalIcon>
            <AnimalText>
              <b>Домашнее животное: </b>нет(жаль)
            </AnimalText>
          </AnimalBlock>
        </InterviewTextBlock>
      </InterviewContainer>
    </div>
  );
};

export default Interview;
