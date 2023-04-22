import {Box, Button, Typography, styled} from '@mui/material'
// import {LoginMain} from '../../components/Login/LoginMain'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import AlertDialog from '../Components/AlertDialog';

const EventList = (): JSX.Element => {
    return (
        <Container>
            <Body className="row-container">
                <h2>⛅️ 일정 목록</h2>
                <Wrapper>
                <LeftWrapper>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar/>
                </LocalizationProvider>
                </LeftWrapper>
                <CardWrapper>
                <h3>📍 5월 17일 일정이에요</h3>
                <Card>
                    <TextBox>
                        <p>클라우드클럽 마지막 세미나</p>
                        <DeleteDialog/>
                    </TextBox>
                </Card>
                <Card>
                    <TextBox>
                        <p>모여라! 번개모임⚡️</p>
                        <DeleteDialog/>
                    </TextBox>
                </Card>
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