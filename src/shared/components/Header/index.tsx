import React, {useEffect, useState, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import {AppBar, Box, Button, IconButton, Badge, Select, MenuItem, Avatar} from '@mui/material';
import {useStyles} from './styles';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import {ReactComponent as BackIcon} from './back.svg';
import {ReactComponent as Logo} from './ownly.svg';
import EditorContext from '../../../modules/Editor/views/EditorView/context/EditorContext';

interface Props {
  children: React.ReactNode;
}
const Header = (props: Props) => {
  const {children} = props;
  const classes = useStyles();
  const {onSubmitData} = useContext(EditorContext);

  return (
    <AppBar elevation={0} className={classes.headerWrapper}>
      <Box height={'100%'} display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} ml={2} minWidth={'172px'}>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            <BackIcon />
          </IconButton>
          <Avatar variant="rounded" className={classes.logo}>
            <Logo />
          </Avatar>
        </Box>

        
        <Box display={'flex'}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={100}
            label="Age"
            variant="standard"
            onChange={() => {}}
            className={classes.sizeSelect}
          >
            <MenuItem style={{color: 'white'}} value={25}>
              25%
            </MenuItem>
            <MenuItem style={{color: 'white'}} value={50}>
              50%
            </MenuItem>
            <MenuItem style={{color: 'white'}} value={75}>
              75%
            </MenuItem>
            <MenuItem style={{color: 'white'}} value={100}>
              100%
            </MenuItem>
          </Select>
          {children}
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            <Undo />
          </IconButton>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            <Redo />
          </IconButton>
        </Box>

        <Box display={'flex'} p={1.3} mr={2}>
          <Button
            variant="contained"
            className={classes.submitButton}
            endIcon={<ShoppingBasket />}
            onClick={onSubmitData}
          >
            Done & Order
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};
export default Header;
