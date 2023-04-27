import {Box, Button, Typography, styled} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AlertDialog from '../Components/AlertDialog';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import Badge from '@mui/material/Badge';

const inputVal = {
    "month" : 2,
    "day" : 5
}
const selectedDateEvent = [
    {
        "title": "점심식사 시작",
        "content": "시작 입니다.",
        "schedule_date": "2023-04-18",
        "remind_date": 2,
        "id": 12
    },
    {
        "title": "클라우드 클럽 모임(3회차)",
        "content": "시작 입니다.",
        "schedule_date": "2023-04-18",
        "remind_date": 2,
        "id": 2
    }
]

const scheduledDate = [
    {
        "schedule_date": "2023-04-24"
    },
    {
        "schedule_date": "2023-04-18"
    }
]
function selectedDateFetch(month: number) {
  return new Promise<{ daysToHighlight: number[] }>((resolve) => {
    if(Number(scheduledDate[0].schedule_date.substring(5,7)) === month){
      const daysToHighlight = scheduledDate.map((date) => Number(date.schedule_date.substring(8,10)) ); //25, 18
      resolve({ daysToHighlight });
    }
  });
}

const initialValue = dayjs(new Date());
let month : number;
function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
    // console.log(highlightedDays)
  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) > 0; 

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🚩' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} selected={isSelected}/>
    </Badge>
  );
}


const EventList = (): JSX.Element => {
    const [highlightedDays, setHighlightedDays] = React.useState<number[]>([]);

    const fetchHighlightedDays = (month: number) => {
      selectedDateFetch(month)
        .then(({ daysToHighlight }) => {
          setHighlightedDays(daysToHighlight);
        })
        .catch((error) => {
          console.log(error)
      });
    };
  
    React.useEffect(() => {
      fetchHighlightedDays(Number(initialValue.month()) === 12 ? 1 : initialValue.month()+1);
    }, []);
  
    const handleMonthChange = (date: Dayjs) => {
      month = Number(date.toISOString().substring(5,7))+1// 해당 월을 알려줌
      setHighlightedDays([]);
      fetchHighlightedDays(month);
    };
    const [clickedVal, setClickedVal] = React.useState<Dayjs | null>(dayjs(new Date()));
    const clickedMonth = Number(clickedVal?.toISOString().slice(5,7)); //서버에 넘거 줄 값
    const clickedDay = Number(clickedVal?.toISOString().slice(8,10));
    return (
        <Container>
            <Body className="row-container">
                <h2>⛅️ 일정 목록</h2>
                <Wrapper>
                <LeftWrapper>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    defaultValue={initialValue}
                    // loading={isLoading}
                    onMonthChange={handleMonthChange}
                    onChange = {(value)=> setClickedVal(value)}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{
                    day: ServerDay,
                    }}
                    slotProps={{
                    day: {
                        highlightedDays,
                    } as any,
                    }}
                />
                </LocalizationProvider>
                </LeftWrapper>
                <CardWrapper>
                <h3>📍 {clickedMonth+"월"+clickedDay+"일 일정이에요"}</h3>
                {selectedDateEvent.map((eventInfo, index) => (
                    <Card key={eventInfo.id}>
                    <TextBox>
                        <p>{eventInfo.title}</p>
                        <DeleteDialog id={eventInfo.id}/>
                    </TextBox>
                    </Card>
                ))}
               
                </CardWrapper>
                </Wrapper>    
            </Body>
         
    </Container>
    )
}

export default EventList;
 
const Container = styled(Box)`
	background-position: center bottom;
	background-repeat: no-repeat;
	height: 100vh;
    font-family: 'Segoe UI'
`;
const TextBox = styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
width:100%;
flex:0.5
justify-content: space-between; 
-webkit-justify-content: space-between;

	h1 {
		font-weight: lighter;
	}
	h3 {
        margin-left: 10px;
		margin-right: 20px;
		
	}
    p {
        font-family: 'Segoe UI'
    }
`;

const EventCalendar = styled(Calendar)`
border-radius: 10%;
.dot {
    height: 8px;
    width: 8px;
    backgroud-color: #f87171;
    border-radius: 50%;
    display:flex;
    margin-left: 1px;
}
`
const DeleteDialog = styled(AlertDialog)`
    float:right;
`

const Body = styled(Box)`
	gap: 100px;
    display: flex;
    flex-direction: column;
        h2 {
            margin-left: 40px;
            margin-top: 30px;
        }

`;

const CardWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
        h2 {
            margin-left: 40px;
            margin-top: 30px;
        }
    padding: 45px    

`;
const Wrapper = styled(Box)`
    display:flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: space-around
`;
const LeftWrapper =styled(Box)`
	flex: 0.5;
	display: flex;
	align-self: flex-start;
	margin-top: 50px;
`;

// const ItemBox = styled(Box)`
// box-sizing: border-box;
// display: flex;
// flex-direction: row;
// justifyContent: center;
// width: 400px;
// height: 60px;
// flex: none;
// order: 4;
// flex-grow: 0;
// padding: 16px;
// border: 1.2px solid #CCCCCC;
// border-radius: 100px;
// `

const Card = styled(Box)`
dbox-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 10px 0px 16px;
gap: 16px;
width: 400px;
height: wrap-content;
background: #FFFFFF;
border: 1px solid #F6F6F6;
box-shadow: 8px 8px 15px rgba(51, 51, 51, 0.2);
border-radius: 20px;
flex: none;
order: 7;
flex-grow: 0;
margin-bottom: 16px;
`