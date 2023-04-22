import React from "react";
import main from "../asset/main.png";
import { Box, Button, styled, Container } from "@mui/material";

const MainPage = () => {
  return (
    <Container1>
      <TextView>
        클클의 일정을 등록하고 <br />
        알림을 보내보세요 !
      </TextView>
      <img src={main}></img>
      <Button2 variant="contained">일정 등록하기</Button2>
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
  /* identical to box height, or 91% */

  letter-spacing: -0.01em;

  color: #ffffff;
`;

//     return (
//         <Container>
//         <Body className="row-container">
//             <h1>일정 목록</h1>
//             <LeftWrapper>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateCalendar/>
//             </LocalizationProvider>
//             </LeftWrapper>
//             <Wrapper className="col-container">
//                  {/* <TextView>
//                     <img src={''} width="50%" />
//                 </TextView>
//                 <img src={''} width="50%" /> */}
//             </Wrapper>
//         </Body>
//     </Container>
//     )
// }
// export default EventList;
// const Container = styled(Box)`
//     background-image: url('bg.png');
//     background-position: center bottom;
//     background-repeat: no-repeat;
//     height: 100vh;
// `;
// const TextView = styled(Box)`
//     h1 {
//         font-weight: lighter;
//     }
//     h2 {
//         width: 50%;
//         text-align: right;
//         color: #45C7FF;
//     }
// `;
// const Body = styled(Box)`
//     gap: 100px;
// `;
// const Wrapper = styled(Box)`
//     flex: 0.5;
//     margin-top: 50px;
// `;
// const LeftWrapper =styled(Box)`
//     flex: 0.5;
//     display: flex;
//     justify-content: flex-end;
//     align-self: flex-start;
//     margin-top: 50px;
// `;
