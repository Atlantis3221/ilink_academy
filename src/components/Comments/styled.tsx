import styled from "styled-components";

export const CommentsContainer = styled.div`
  margin: 120px 0 0 -80px;
  display: flex;
  align-items: flex-end;
`;

export const CommentsArrows = styled.div`
  margin-left: 34px;
  display: flex;
`;

export const CommentsArrow = styled.button`
  cursor: pointer;
  padding: 16px;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  & + & {
    margin-left: 16px;
  }
`;

export const CommentsBlock = styled.div`
  padding: 56px 56px 64px 80px;
  background: #ffffff;
`;
export const CommentsCaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CaptionText = styled.h1`
  margin: 0;
  font-size: 68px;
  line-height: 88px;
  font-weight: 500;
`;

export const CommentsBody = styled.div`
  margin-top: 38px;
  display: flex;
`;
export const CommentBlock = styled.div`
  padding: 24px;
  width: 100%;
  background: #f5f5f5;

  & + & {
    margin-left: 24px;
  }
`;
export const CommentCaption = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CommentDate = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #8a8a8a;
`;
export const CommentAutor = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentAvatar = styled.img`
  margin-right: 20px;
`;
export const CommentName = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
`;
export const CommentText = styled.div`
  margin-top: 24px;
  font-size: 14px;
  line-height: 22px;
`;
