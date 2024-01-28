import React, { useEffect, useState, useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { AppBar, Fab, Box, Button, IconButton, Badge, Select, MenuItem, Avatar } from '@mui/material';
import { useStyles } from './styles';
import { ShoppingBasket, Redo, Undo } from '@mui/icons-material';
import { ReactComponent as BackIcon } from './back.svg';
import { ReactComponent as Logo } from './ownly.svg';
import EditorContext from '../../../modules/Editor/views/EditorView/context/EditorContext';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import clsx from "clsx";
import { ReactSVG } from 'react-svg';
import { modelsConfigs } from 'modules/Editor/views/EditorView/Editor/configs';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

interface Props {
  children: React.ReactNode;
  onChangeCanvasColor: (color: string) => void;
}

const MobileHeader = (props: Props) => {
  const { children } = props;
  const { onChangeCanvasColor } = props;
  const classes = useStyles();
  const { onSubmitData, selectedSide, selectedModelType, onSetSelectedSide, canvasColor } = useContext(EditorContext);
  const { width, height } = useWindowDimensions();

  const availableSides = useMemo(() => {
    const { sides } = modelsConfigs[selectedModelType];
    return sides;
  }, [selectedModelType]);

  const temp = [
    {
      id: 0,
      buttonColor: '#7DBDCD',
    },
    {
      id: 1,
      buttonColor: '#CB7DCD',
    },
    {
      id: 2,
      buttonColor: '#FFFFFF',
    },
    {
      id: 3,
      buttonColor: '#EFE268',
    },
    {
      id: 4,
      buttonColor: '#7DCD85',
    },
  ];
  return (
    <AppBar elevation={0} className={classes.headerWrapper}>
      {(width ?? 0) < 700 && (height ?? 0) > 650 ? <>
        <Box height={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} gap={1} alignItems={'center'} ml={2} minWidth={'172px'}>
            <IconButton
              size="small"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <BackIcon />
            </IconButton>
            <Avatar variant="rounded" className={classes.logo}>
              <Logo />
            </Avatar>
          </Box>
          <Box display={'flex'}>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <Undo />
            </IconButton>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <Redo />
            </IconButton>
          </Box>
          <Box display={'flex'} p={1.3} mr={2}>
            <Button
              variant="contained"
              className={classes.submitButton}
              onClick={onSubmitData}
            >
              Done
            </Button>
          </Box>
        </Box>
        <Box padding={'0 19px'} height={'calc(100% - 19px)'} display={'flex'} justifyContent={'space-between'}>
          <Box className={classes.topLeftSideWrapper}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={'FRONT'}
              variant="standard"
              onChange={() => { }}
              className={classes.sizeSelect}
            >
              {availableSides.map(side => {
                return (
                  <MenuItem key={side.id} value={side.id}>
                      <ReactSVG 
                       className={clsx(classes.sideBut, { selected: selectedSide === side.id })}
                       onClick={() => {
                         onSetSelectedSide(side.id);
                       }}
                      src={side.iconSrc} />
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={100}
            label="Age"
            variant="standard"
            onChange={() => { }}
            className={classes.sizeSelect}
          >
            <MenuItem style={{ color: 'white' }} value={25}>
              25%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={50}>
              50%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={75}>
              75%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={100}>
              100%
            </MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={canvasColor}
            variant="standard"
            onChange={() => { }}
            className={classes.sizeSelect}
            style={{ marginRight: '16px' }}
          >
            {temp.map((value, index) => (
              <MenuItem key={value.buttonColor} value={value.buttonColor}>
                <div
                  onClick={() => onChangeCanvasColor(value.buttonColor)}
                  style={{
                    backgroundColor: value.buttonColor,
                    width: '25px',
                    height: '25px',
                    borderRadius: '100%',
                  }}
                ></div>
              </MenuItem>
            ))}

          </Select>
        </Box>
      </> : <>
        <Box height={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} gap={1} alignItems={'center'} ml={2} minWidth={'172px'}>
            <IconButton
              size="small"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <BackIcon />
            </IconButton>
            <Avatar variant="rounded" className={classes.logo}>
              <Logo />
            </Avatar>
          </Box>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={canvasColor}
            variant="standard"
            onChange={() => { }}
            className={classes.sizeSelect}
            style={{ marginRight: '16px' }}
          >
            {temp.map((value, index) => (
              <MenuItem key={value.buttonColor} value={value.buttonColor}>
                <div
                  onClick={() => onChangeCanvasColor(value.buttonColor)}
                  style={{
                    backgroundColor: value.buttonColor,
                    width: '25px',
                    height: '25px',
                    borderRadius: '100%',
                  }}
                ></div>
              </MenuItem>
            ))}

          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={100}
            label="Age"
            variant="standard"
            onChange={() => { }}
            className={classes.sizeSelect}
          >
            <MenuItem style={{ color: 'white' }} value={25}>
              25%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={50}>
              50%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={75}>
              75%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={100}>
              100%
            </MenuItem>
          </Select>
          <Box display={'flex'}>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <Undo />
            </IconButton>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
              onClick={() => { }}
            >
              <Redo />
            </IconButton>
          </Box>
          <Box className={classes.topLeftSideWrapper}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={'FRONT'}
              variant="standard"
              onChange={() => { }}
              className={classes.sizeSelect}
            >
              {availableSides.map(side => {
                return (
                  <MenuItem key={side.id} value={side.id}>
                      <ReactSVG 
                       className={clsx(classes.sideBut, { selected: selectedSide === side.id })}
                       onClick={() => {
                         onSetSelectedSide(side.id);
                       }}
                      src={side.iconSrc} />
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box display={'flex'} p={1.3} mr={2}>
            <Button
              variant="contained"
              className={classes.submitButton}
              onClick={onSubmitData}
            >
              Done & Order 
              <ReactSVG
              src={'assets/icons/bin.svg'}
              style={{marginLeft: '4px'}}
            />
            </Button>
          </Box>
        </Box>
      </>

      }
    </AppBar>
  );
}

const Header = (props: Props) => {
  const { children } = props;
  const classes = useStyles();
  const { onSubmitData } = useContext(EditorContext);
  const { width, height } = useWindowDimensions();


  return (width ?? 0) > 700 && (height ?? 0) > 450 ? (
    <AppBar elevation={0} className={classes.headerWrapper}>
      <Box height={'100%'} display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} ml={2} minWidth={'172px'}>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={() => { }}
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
            onChange={() => { }}
            className={classes.sizeSelect}
          >
            <MenuItem style={{ color: 'white' }} value={25}>
              25%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={50}>
              50%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={75}>
              75%
            </MenuItem>
            <MenuItem style={{ color: 'white' }} value={100}>
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
            onClick={() => { }}
          >
            <Undo />
          </IconButton>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            aria-controls="notification-menu"
            aria-haspopup="true"
            onClick={() => { }}
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
  ) : (
    <MobileHeader {...props} />
  );
};
export default Header;
