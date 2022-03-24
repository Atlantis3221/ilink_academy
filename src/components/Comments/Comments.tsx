import SVG from "react-inlinesvg";
import Cross from "../../img/icons/Cross.svg";
import Comment1 from "../../img/Comment1.png";
import Avatar from "../../img/icons/Avatar.svg";
import LeftArrow from "../../img/icons/ArrowLeft.svg";
import RightArrow from "../../img/icons/ArrowRight.svg";
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
        name: "Буба Бубенцов 1",
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
        name: "Буба Бубенцов 2",
        date: "08.01.2022",
        description: `  Отличный коллектив, руководители понимают сам процесс работы
        каждого сотрудника и помогают всем без исключения. Система KPI
        позволяет реально хорошо зарабатывать по простому принципу - чем
        больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет
        - отличная страховка ДМС, организовали курсы английского языка
        бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда
        вовремя.`,
        img: Avatar,
      },
    ],
    1: [
      {
        id: 3,
        name: "Буба Бубенцов 3",
        date: "08.01.2022",
        description: `  Отличный коллектив, руководители понимают сам процесс работы
        каждого сотрудника и помогают всем без исключения. Система KPI
        позволяет реально хорошо зарабатывать по простому принципу - чем
        больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет
        - отличная страховка ДМС, организовали курсы английского языка
        бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда
        вовремя.`,
      },
      {
        id: 4,
        name: "Буба Бубенцов 4",
        date: "08.01.2022",
        description: `  Отличный коллектив, руководители понимают сам процесс работы
        каждого сотрудника и помогают всем без исключения. Система KPI
        позволяет реально хорошо зарабатывать по простому принципу - чем
        больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет
        - отличная страховка ДМС, организовали курсы английского языка
        бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда
        вовремя.`,
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
          <CommentName>{name}</CommentName>
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
          <CaptionText>Отзывы</CaptionText>

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
