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
import { Btn, CrossIcon } from "../Button";

const Comments = () => {
  return (
    <CommentsContainer>
      <CommentsBlock>
        <CommentsCaption>
          <CaptionText>Отзывы</CaptionText>
          <Btn>
            <CrossIcon>
              <SVG src={Cross} />
            </CrossIcon>
            Добавь отзыв
          </Btn>
        </CommentsCaption>
        <CommentsBody>
          <CommentBlock>
            <CommentCaption>
              <CommentAutor>
                <CommentAvatar src={Comment1} />
                <CommentName>Буба Бубенцов</CommentName>
              </CommentAutor>
              <CommentDate>08.01.2022</CommentDate>
            </CommentCaption>
            <CommentText>
              Отличный коллектив, руководители понимают сам процесс работы
              каждого сотрудника и помогают всем без исключения. Система KPI
              позволяет реально хорошо зарабатывать по простому принципу - чем
              больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет
              - отличная страховка ДМС, организовали курсы английского языка
              бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда
              вовремя.
            </CommentText>
          </CommentBlock>
          <CommentBlock>
            <CommentCaption>
              <CommentAutor>
                <CommentAvatar src={Avatar} />
                <CommentName>Илья Анташкевич</CommentName>
              </CommentAutor>
              <CommentDate>08.01.2022</CommentDate>
            </CommentCaption>
            <CommentText>
              Год назад попытал счастье, откликнулся на вакансию, прошел собес и
              попал в компанию. Долго переживал что будет тяжело влиться, но тут
              прям классные ребята работают, все на одной волне. Всегда готовы
              помочь с любым вопросом. Для эффективной работы здесь нужно хорошо
              знать иностранные языки.
            </CommentText>
          </CommentBlock>
        </CommentsBody>
      </CommentsBlock>
      <CommentsArrows>
        <CommentsArrow>
          <SVG src={LeftArrow} />
        </CommentsArrow>
        <CommentsArrow>
          <SVG src={RightArrow} />
        </CommentsArrow>
      </CommentsArrows>
    </CommentsContainer>
  );
};

export default Comments;
