import React from "react";
import { Box, Button, styled, Container } from "@mui/material";
import result from "../asset/result.png";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  // 슬랙 알람기능
  function slackAlarm() {
    navigate("/");
  }

  return (
    <Container1>
      <Box0>
        <h2>☁️ 일정 등록 완료</h2>
      </Box0>
      <Box1>
        <img src={result}></img>
        <h2>일정이 성공적으로 등록되었습니다 !</h2>
      </Box1>
      <Box2>
        <Box21>
          <h3>일정 제목:&nbsp;&nbsp;</h3>
          <span>안녕하세요 회의합시다</span>
        </Box21>
        <Box22>
          <h3>일정 날짜:&nbsp;&nbsp;</h3>
          <span>2023.04.20 ~2023.04.21</span>
        </Box22>
        <Box23>
          <h3>리마인드:&nbsp;&nbsp;</h3>
          <span>3일 전</span>
        </Box23>
      </Box2>
      <Box3>
        <Button1 variant="contained" onClick={handleClick}>
          일정 추가하기
        </Button1>
        <Button2 onClick={slackAlarm}>
          슬랙으로
          <br />
          알람 보내기
        </Button2>
      </Box3>
    </Container1>
  );
};

export default ResultPage;

const Container1 = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Box0 = styled(Box)`
  position: absolute;
  left: 31px;
  top: 33px;
  margin-top: -24px;
  margin-left: 5px;
`;
const Box1 = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const Box2 = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;
const Box21 = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Box22 = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Box23 = styled(Box)`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Box3 = styled(Box)`
  display: flex;
  flex-direction: row;
`;
const Button1 = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  position: static;
  width: 135px;
  height: 53px;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  background: #3e88eb;
  border-radius: 100px;
  &:hover {
    background-color: #3e88eb;
  }
  margin-right: 20px;
`;
const Button2 = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  position: static;
  width: 135px;
  height: 53px;
  left: 661px;
  top: 536px;
  border-radius: 100px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  background: #fd2769;
  border-radius: 100px;
  &:hover {
    background-color: #fd2769;
  }
  margin-left: 20px;
`;
