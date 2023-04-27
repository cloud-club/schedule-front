import React from "react";
import axios from "axios";
import { Box, Button, styled, Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router";

interface Event {
  title: string;
  content: string;
  schedule_date: string;
  remind_date: number;
}

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
  const initialValue = dayjs(new Date());
  const [clickedVal, setClickedVal] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  const [value, setValue] = React.useState<Dayjs | null>(initialValue);
  const clickedMonth = Number(clickedVal?.toISOString().slice(5, 7)); //서버에 넘거 줄 값
  const clickedDay = Number(clickedVal?.toISOString().slice(8, 10)) + 1;
  const handleMonthChange = (date: Dayjs) => {
    month = Number(date.toISOString().substring(5, 7)) + 1; // 해당 월을 알려줌
  };
  let month: number;
  const navigate = useNavigate();

  const handleAddEvent = () => {
    const eventData: Event = {
      title: "일정 제목",
      content: "일정 내용",
      schedule_date: value?.toISOString() || "",
      remind_date: 1,
    };
    axios
      .post("http://localhost:8080/api/", eventData, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/result");
      })
      .catch((err) => {
        console.log(err, "일정등록 실패했어여");
      });
  };
  return (
    <Container1>
      <Box1>
        <h2>📆 일정 등록하기</h2>
      </Box1>
      <Box11>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value}
            // loading={isLoading}
            onMonthChange={handleMonthChange}
            onChange={(value) => {
              setValue(value);
              setClickedVal(value);
            }}
          />
        </LocalizationProvider>
        <Button1 type="submit" onClick={handleAddEvent}>
          일정 추가하기
        </Button1>
        <Box22>
          <Text1>📍{clickedMonth + "월" + clickedDay + "일 일정이에요"}</Text1>
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
              defaultValue="3day"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value || ""} value={option.value || ""}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </BoxForm>
        </Box22>
      </Box11>
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
const Box1 = styled(Box)`
  position: absolute;
  left: 31px;
  top: 33px;
  margin-top: -24px;
  margin-left: 5px;
`;
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
