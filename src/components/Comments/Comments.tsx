import SVG from "react-inlinesvg";
import Cross from "../../img/icons/Cross.svg";
import Comment1 from "../../img/Comment1.png";
import Comment3 from "../../img/Comment3.png";
import Comment4 from "../../img/Comment4.png";
import Avatar from "../../img/icons/Avatar.svg";
import LeftArrow from "../../img/icons/ArrowLeft.svg";
import RightArrow from "../../img/icons/ArrowRight.svg";
import { FactorA } from "../FactorA";
import {
  CommentsContainer,
  CommentsBlock,
  CommentsCaption,
  CaptionText,
  CommentsBody,
  CommentBlock,
  CommentCaption,
  CommentAutor,
  CommentAvatar,
  CommentName,
  CommentDate,
  CommentText,
  CommentsArrows,
  CommentsArrow,
} from "./styled";
import { CustomButton, CrossIcon, ButtonLabel } from "../Button";
import { SvgWrapper } from "../SvgWrapper";
import { useModalContext } from "../../context/ModalContext";
import { useState } from "react";

const mapReviews = (): any => {
  return {
    0: [
      {
        id: 1,
        name: "Буба Бубенцов",
        date: "08.01.2022",
        description: `  Отличный коллектив, руководители понимают сам процесс работы
        каждого сотрудника и помогают всем без исключения. Система KPI
        позволяет реально хорошо зарабатывать по простому принципу - чем
        больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет
        - отличная страховка ДМС, организовали курсы английского языка
        бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда
        вовремя.`,
        img: Comment1,
      },
      {
        id: 2,
        name: "Илья Анташкевич",
        date: "08.01.2022",
        description: `  Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.`,
        img: Avatar,
      },
    ],
    1: [
      {
        id: 3,
        name: "Юрина Маргарита",
        date: "26.12.2021",
        description: `  Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.`,
        img: Comment3,
      },
      {
        id: 4,
        name: "Дмитрий Иванов",
        date: "16.12.2021",
        description: `  Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.`,
        img: Comment4,
      },
    ],
  };
};

const ReviewItem: React.FC<any> = ({ name, date, description, img }) => {
  return (
    <CommentBlock>
      <CommentCaption>
        <CommentAutor>
          <CommentAvatar src={img} />
          <FactorA>
            <CommentName>{name}</CommentName>
          </FactorA>
        </CommentAutor>
        <CommentDate>{date}</CommentDate>
      </CommentCaption>
      <CommentText>{description}</CommentText>
    </CommentBlock>
  );
};

const Slide: React.FC<any> = ({ data }) => {
  return (
    <CommentsBody>
      {data.map((review: any) => (
        <ReviewItem {...review} key={review.id} />
      ))}
    </CommentsBody>
  );
};

const Comments = () => {
  const { handleOpen } = useModalContext();
  const reviews = mapReviews();
  const [slideNumber, setSlideNumber] = useState(0);

  const changeSlideBack = () => {
    const totalSlides = Object.keys(reviews).length;

    if (slideNumber - 1 < 0) return setSlideNumber(totalSlides - 1);

    setSlideNumber(slideNumber - 1);
  };

  const changeSlideForward = () => {
    const totalSlides = Object.keys(reviews).length;
    //slideNumber = 0
    console.log(slideNumber, totalSlides);
    if (slideNumber + 1 >= totalSlides) return setSlideNumber(0);

    setSlideNumber(slideNumber + 1);
  };

  return (
    <CommentsContainer>
      <CommentsBlock>
        <CommentsCaption>
          <FactorA>
            <CaptionText>Отзывы</CaptionText>
          </FactorA>

          <CustomButton onClick={handleOpen}>
            <CrossIcon>
              <SVG src={Cross} />
            </CrossIcon>
            <ButtonLabel>Добавить отзыв</ButtonLabel>
          </CustomButton>
        </CommentsCaption>

        <Slide data={reviews[slideNumber]} />
      </CommentsBlock>

      <CommentsArrows>
        <CommentsArrow onClick={changeSlideBack}>
          <SvgWrapper>
            <SVG src={LeftArrow} />
          </SvgWrapper>
        </CommentsArrow>

        <CommentsArrow onClick={changeSlideForward}>
          <SvgWrapper>
            <SVG src={RightArrow} />
          </SvgWrapper>
        </CommentsArrow>
      </CommentsArrows>
    </CommentsContainer>
  );
};

export default Comments;
