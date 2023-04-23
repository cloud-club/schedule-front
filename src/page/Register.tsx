import React from "react";
import { Box, Button, styled, Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "1day",
    label: "1일 전",
  },
  {
    value: "3day",
    label: "3일 전",
  },
  {
    value: "5day",
    label: "5일 전",
  },
  {
    value: "7day",
    label: "7일 전",
  },
];

const Register = () => {
  return (
    <Container1>
      <Box1>
        <img></img>
        {/* <TextView>주시면 알아서 바꿀것</TextView> */}
      </Box1>
      <Box11>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar1 />
        </LocalizationProvider>
        <Button1>일정 추가하기</Button1>
        <Box22>
          <Text1>오늘의 날짜 :</Text1>
          <BoxForm
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              id="standard-basic"
              label="일정 제목"
              variant="outlined"
            />
            <TextField2
              id="outlined-multiline-static"
              label="일정 내용"
              multiline
              rows={4}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="리마인드"
              defaultValue="3일전"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </BoxForm>
        </Box22>
      </Box11>
      <Box3>{/* <Button1>일정 추가하기</Button1> */}</Box3>
    </Container1>
  );
};

export default Register;

const Container1 = styled(Container)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
const DateCalendar1 = styled(DateCalendar)`
  width: 390px;
  height: 495px;
  left: 200px;
  top: 139px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.08));
  border-radius: 20px;
`;
// const TextView = styled(Box)``;
const Text1 = styled(Box)`
  width: 340px;
  height: 27px;
  left: 732px;
  top: 180px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 20px;
`;
const BoxForm = styled(Box)`
  height: 360px;
  width: 340px;
  left: 732px;
  top: 240px;
  border-radius: 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  padding: 10px;
`;
const Box1 = styled(Box)``;
const Box11 = styled(Box)`
  display: flex;
  flex-direction: row;
`;
const Box22 = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const Box3 = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const Button1 = styled(Button)`
  /* top: 634px;
  background: #3e88eb;
  border-radius: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  margin-top: 550px;
  position: static;
  width: 205px;
  height: 653px;
  left: 573px;
  top: 634px;
  width: 83px;
  height: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 10px;
  margin-top: -100px;
  width: 135px;
  height: 53px;
  top: 634px;
  color: white;
  border-radius: 100px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: -0.01em;

  color: #ffffff;
  background: #3e88eb;
  &:hover {
    background-color: #3e88eb;
  }
`;

const TextField2 = styled(TextField)`
  margin-top: 15px;
`;
