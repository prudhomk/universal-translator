import React from 'react';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


export default function createModal() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/rules');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
              Game Over
          </Typography>
          <Typography sx={{ mt: 2 }}>
              You ran out of time!
          </Typography>
          <button onClick={handleClick}>
                Play another round!
          </button>
        </Box>
      </Modal>
    </>
  );
}
