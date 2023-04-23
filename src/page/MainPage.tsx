import React from "react";
import main from "../asset/main.png";
import { Box, Button, styled, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  return (
    <Container1>
      <TextView>
        클클의 일정을 등록하고 <br />
        알림을 보내보세요 !
      </TextView>
      <img src={main}></img>
      <Button2 variant="contained" onClick={handleClick}>
        일정 등록하기
      </Button2>
    </Container1>
  );
};

export default MainPage;

const Container1 = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
const TextView = styled(Box)`
  margin-top: 100px;
  margin-bottom: 100px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const Button2 = styled(Button)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  position: static;
  width: 287px;
  height: 88px;
  left: 478px;
  top: 654px;
  background: #3e88eb;
  border-radius: 100px;
  margin-top: 100px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;
