import * as React from 'react';
import {Button, Dialog, styled, Box} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{fontFamily: 'Segeo UI'}}>
      <DeleteButton onClick={handleClickOpen}>
        취소하기
      </DeleteButton>
      <Dialog
      PaperProps={{
        style: { borderRadius: 30 }
      }}
        open={open}
        onClose={handleClose}>
        <DialogWrapper>
        <Title>
          {"정말로 삭제하시나요?"}
        </Title>
        <DialogContent>
          <DialogContentText>
            <p>일정 제목: 클라우드 클럽 마지막 세미나</p>
            <p>일정 일자: 2023.05.17</p>
          </DialogContentText>
        </DialogContent>
        <ButtonWrapper>
          <OkButton onClick={handleClose}>확인</OkButton>
          <CancelButton  onClick={handleClose}>
            취소
          </CancelButton>
        </ButtonWrapper>
        </DialogWrapper>
      </Dialog>
    </div>
  );
}


const DialogWrapper = styled(Box)`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  padding: 20px;
`
const Title = styled(DialogTitle)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 80px;
  font-size: 20px;
`
const DeleteButton = styled(Button)`
  display: flex;
  color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 15px;
  border-radius : 25px !important;
  background: #FD2769;
  &:hover {
    background-color: #FD2769;
  }
`
const ButtonWrapper = styled(DialogActions)`
  margin: 0 auto;

`
const OkButton = styled(Button)`
justify-content: center;
align-items: center;
padding: 14px 24px;
gap: 10px;
color:white;
width: 80px;
height: 40px;
background: #FD2769;
border-radius: 100px;
&:hover {
  background-color: #FD2769;
}
`
const CancelButton = styled(Button)`
  border: 1.2px solid #CCCCCC;
  border-radius: 100px;
  color: black;
  width: 80px;
  background-color: #ffffff ;
  &:hover {
    background-color: #ffffff;
  }
  `