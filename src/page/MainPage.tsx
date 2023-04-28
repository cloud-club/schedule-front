import React from "react";
import main from "../asset/main.png";
import { Box, Button, styled, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

const MainPage = () => {
  const navigate = useNavigate();
  function handleClickRegisterBtn() {
    navigate("/register");
  }
  function handleClickShowListBtn() {
    navigate("/event");
  }
  return (
    <Container1>
      <TextView>
        클클의 일정을 등록하고 <br />
        알림을 보내보세요 !
      </TextView>
      <img src={main}></img>
      <Grid>
      <Button2 variant="contained" onClick={handleClickRegisterBtn}>
        일정 등록하기
      </Button2>
      <Button2 style={{backgroundColor: '#008000'}} onClick={handleClickShowListBtn}>
        일정 확인하기
      </Button2>
      </Grid>
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
  margin-right: 1em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #ffffff;
`;
