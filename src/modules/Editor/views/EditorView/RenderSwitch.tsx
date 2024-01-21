import React, {useEffect, useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {RenderMode, TestType} from '../../definitions/types/index';
import Header from 'shared/components/Header';
import Footer from './Footer';
import {useStyles} from './styles';
import {Box, Switch} from '@mui/material';
import {styled} from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import EditorContext from './context/EditorContext';

const MaterialUISwitch = styled(Switch)(({theme}) => ({
  width: 76,
  height: 40.8,
  padding: 0,
  borderRadius: '40px',
  margin: '8px 2px 0px 0px',
  // backgroundColor: "#282729 !im",
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(6px)',
    top: 5,
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(39px)',
      top: 5,
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12.5" width="19" viewBox="0 0 14 9"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M5.07255 8.3999H0.99575C0.55895 8.3999 0.22295 8.0527 0.22295 7.6159C0.22295 7.3807 0.32375 7.1567 0.55895 6.9439L2.54135 5.0847C3.39255 4.2895 3.94135 3.7743 3.94135 3.1247C3.94135 2.5647 3.57175 2.1391 2.93335 2.1391C2.44055 2.1391 2.09335 2.4303 1.88055 2.8447C1.72375 3.1023 1.49975 3.2703 1.16375 3.2703C0.67095 3.2703 0.34615 2.9343 0.34615 2.5199C0.34615 2.2959 0.44695 2.0831 0.57015 1.8703C1.02935 1.0415 1.91415 0.559902 2.97815 0.559902C4.61335 0.559902 5.66615 1.6575 5.66615 3.0351C5.66615 4.1327 5.00535 4.9503 3.87415 5.9471L2.92215 6.8095H5.07255C5.53175 6.8095 5.86775 7.1567 5.86775 7.6047C5.86775 8.0639 5.53175 8.3999 5.07255 8.3999ZM9.78976 8.3999H7.52736C6.94496 8.3999 6.59776 8.0639 6.59776 7.4703V1.6015C6.59776 1.0079 6.94496 0.671902 7.52736 0.671902H9.78976C12.0074 0.671902 13.7546 2.3519 13.7546 4.5359C13.7546 6.7199 12.0074 8.3999 9.78976 8.3999ZM8.35616 2.3295V6.7423H9.78976C11.0666 6.7423 12.0074 5.7903 12.0074 4.5359C12.0074 3.2703 11.0666 2.3295 9.78976 2.3295H8.35616Z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#282729',
        borderRadius: '40px',
        border: '2px solid #8783E1',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#8783E1',
    width: 31.2,
    height: 31.28,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12.5" width="19" viewBox="0 0 14 9"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M2.73413 8.5119C1.72613 8.5119 0.919731 8.1311 0.426931 7.4479C0.258931 7.2575 0.146931 7.0559 0.146931 6.7983C0.146931 6.4063 0.471731 6.0591 0.908531 6.0591C1.21093 6.0591 1.40133 6.2047 1.56933 6.4063C1.82693 6.7647 2.15173 6.9999 2.73413 6.9999C3.38373 6.9999 3.82053 6.6527 3.82053 6.0591C3.82053 5.5327 3.39493 5.1855 2.75653 5.1855H2.40933C2.03973 5.1855 1.75973 4.8943 1.75973 4.5023C1.75973 4.1215 2.03973 3.8303 2.40933 3.8303H2.75653C3.33893 3.8303 3.74213 3.4943 3.74213 2.9455C3.74213 2.3967 3.33893 2.0719 2.73413 2.0719C2.17413 2.0719 1.87173 2.3407 1.63653 2.6543C1.49093 2.8447 1.30053 2.9903 0.986931 2.9903C0.550131 2.9903 0.214131 2.6543 0.214131 2.2623C0.214131 2.0271 0.326131 1.8143 0.460531 1.6687C0.975731 0.974302 1.77093 0.559902 2.75653 0.559902C4.43653 0.559902 5.44453 1.5343 5.44453 2.8783C5.44453 3.4383 5.19813 4.0543 4.55973 4.4799C5.25413 4.8271 5.54533 5.4655 5.54533 6.1599C5.54533 7.5151 4.47013 8.5119 2.73413 8.5119ZM9.59054 8.3999H7.32814C6.74574 8.3999 6.39854 8.0639 6.39854 7.4703V1.6015C6.39854 1.0079 6.74574 0.671902 7.32814 0.671902H9.59054C11.8081 0.671902 13.5553 2.3519 13.5553 4.5359C13.5553 6.7199 11.8081 8.3999 9.59054 8.3999ZM8.15694 2.3295V6.7423H9.59054C10.8673 6.7423 11.8081 5.7903 11.8081 4.5359C11.8081 3.2703 10.8673 2.3295 9.59054 2.3295H8.15694Z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#282729',
    border: '2px solid #8783E1',
    borderRadius: '40px',
  },
}));

function RenderSwitch() {
  const {selectedRenderMode, onSelectedRenderMode, onApplyImage} = useContext(EditorContext);
  const classes = useStyles();

  return (
    <Box className={classes.switchWrraper}>
      <FormControlLabel
        sx={{marginLeft: '0px', marginRight: '0px'}}
        control={
          <MaterialUISwitch
            defaultChecked
            checked={selectedRenderMode === '2DMODE'}
            onChange={e => {
              const {checked} = e.target;
              onSelectedRenderMode(checked ? '2DMODE' : '3DMODE');
              if (!checked) {
                //3d mode
                onApplyImage();
              }
            }}
            size="medium"
            sx={{mt: 0.5}}
          />
        }
        label=""
      />
    </Box>
  );
}

export default RenderSwitch;
