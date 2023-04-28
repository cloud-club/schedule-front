import { SetStateAction, useState } from "react";
import { Box, Button, styled, Container } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Schedule } from "./EventListPage";
import axios from 'axios';
import ResultPage from "./ResultPage";


export interface ScheduleConetent {
  title: string;
  content: string;
  schedule_date: Date;
  remind_date: number;
}
const currencies = [
  {
    value: 1,
    label: "1일 전",
  },
  {
    value: 3,
    label: "3일 전",
  },
  {
    value: 5,
    label: "5일 전",
  },
  {
    value: 7,
    label: "7일 전",
  },
];

const Register = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [remindDay, setRemindDay] = useState(3);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);

  const getSchedule = () => {
    console.log(month, day);
    const retValue: ScheduleConetent = {title: title, content: content, schedule_date: new Date(2023, month - 1, day), remind_date: remindDay}
    console.log(new Date(2023, month - 1, day));
    return retValue;
  }

  async function handleClick() {
    const requestBody = getSchedule();
    const response = await axios.post<Schedule[]>('http://localhost:8080/api', requestBody);
    console.log(response.data);
    setIsSubmit(true);
  }

  const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setContent(event.target.value);
  }

  const handleRemindDayChange = (event: any) => {
    setRemindDay(event.target.value);
  }

  // 사용자가 날짜를 클릭 했을 때 발생하는 이벤트
  const handleDateChange = async (date: any) => {
    if(date !== null) {
      const monthDate = [0, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let month = Number(date.toISOString().substring(5,7))
      let day = Number(date.toISOString().substring(8,10)) + 1
      if(day > monthDate[month]) {
        month += 1;
        day = 1;
      }
      console.log(month, day);
      setMonth(month);
      setDay(day);
    }
  }

  return (
    <>
    {isSubmit !== true ?
    (<Container1>
      <Box1>
        <h2>📆 일정 등록하기</h2>
      </Box1>
      <Box11>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
            onChange = {(value)=> handleDateChange(value)}
        />
        </LocalizationProvider>
        <Button1 onClick={handleClick}>일정 추가하기</Button1>
        <Box22>
          <Text1>오늘의 날짜 : {month}월 {day}일</Text1>
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
              value={title}
              onChange={handleTitleChange}
            />
            <TextField2
              id="outlined-multiline-static"
              label="일정 내용"
              multiline
              value={content}
              onChange={handleContentChange}
              rows={4}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="리마인드"
              defaultValue="3day"
              value={remindDay}
              onChange={handleRemindDayChange}
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
    </Container1>)
   :
  <ResultPage title={title} content={content} month={month} day={day} remind_date={remindDay} />
              }
    </>
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
