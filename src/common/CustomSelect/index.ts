import { styled } from '@mui/material/styles';
import { InputBase } from "@mui/material";

export const CustomInput = styled(InputBase)(() => ({

    'label + &': {
      marginTop: "0px",
      color: "white",
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: "#202020",
      border: "1px solid #202020",
      fontSize: 18,
      padding: '10px 26px 10px 12px',
      '&:focus': {
        borderRadius: 4,
        border: "1px solid white",
        color: "#404040",
    
      },
    },
  }));