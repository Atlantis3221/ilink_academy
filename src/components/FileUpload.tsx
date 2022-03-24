import React from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import Jpg from "../img/icons/Jpg.svg";
import Delete from "../img/icons/Delete.svg"

const FileName = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;

  font-family: "Gilroy";
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background: #F5F5F5;
  border-radius: 2px;
  
`;

const TextWrapper = styled.p`
  margin: 0 15px;
`;

const FileUpload: React.FC<{ fileName: string }> = ({ fileName }) => {
  return (
    <FileName>
      <SVG src={Jpg} />
      <TextWrapper>{fileName}</TextWrapper>
      <SVG src={Delete}/>
    </FileName>
  );
};

export default FileUpload;
