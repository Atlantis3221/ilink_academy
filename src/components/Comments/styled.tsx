import styled from "styled-components";

export const CommentsContainer = styled.div`
  margin: 120px 0 0 -80px;
`;
export const CommentsBlock = styled.div`
  padding: 56px 56px 64px 80px;
  margin-right: 160px;
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
export const CaptionBtn = styled.button`
  padding: 17px 28px;
  display: flex;
  align-items: center;

  background: #585cc6;
  border-radius: 2px;
  border: none;

  font-weight: 600;
  color: #ffffff;
`;
export const CrossIcon = styled.div`
  margin-right: 10px;
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
export const AboutBlock = styled.div`
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
