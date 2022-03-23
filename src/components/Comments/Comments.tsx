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

const Comments = () => {
  const { handleOpen } = useModalContext();

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
          <SvgWrapper>
            <SVG src={LeftArrow} />
          </SvgWrapper>
        </CommentsArrow>

        <CommentsArrow>
          <SvgWrapper>
            <SVG src={RightArrow} />
          </SvgWrapper>
        </CommentsArrow>
      </CommentsArrows>
    </CommentsContainer>
  );
};

export default Comments;
