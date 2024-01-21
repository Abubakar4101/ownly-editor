import React from 'react';
import clsx from 'clsx';
import {Box} from '@mui/material';
import Logo from 'shared/assets/SiWareLogo.svg';
// import {useStyles} from './styles';

export default function HeaderLogo() {
  // const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Box display={'flex'} alignItems={'center'} color="inherit" aria-label="open drawer">
        {/* <img alt="" src={Logo} className={classes.logo} /> */}
      </Box>
    </Box>
  );
}
