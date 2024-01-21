import React from 'react';
import {Button, Box} from '@mui/material';
import clsx from 'clsx';
import {useStyles} from './styles';
import {ReactSVG} from 'react-svg';

interface Props {
  selected: boolean;
  activated: boolean;
  degree: string;
  iconSrc: string;
  transValue: string;
  rotateValue: string;
  buttonText: string;
  animationDelay: number;
  onClick: () => void;
}

export default function RightArcButton(props: Props) {
  const {
    selected,
    activated,
    degree,
    transValue,
    buttonText,
    iconSrc,
    rotateValue,
    animationDelay,
    onClick,
  } = props;
  const classes = useStyles();
  const buttonPosition = {
    transform: `rotate(${degree}deg)`,
    transformOrigin: 'top left',
    translate: `${transValue}px 0px`,
  };
  const rotateSVG = {
    transform: `rotate(${rotateValue}deg)`,
  };
  return (
    <Box className={clsx(classes.rightArcButtonContainer)} style={buttonPosition}>
      <Button
        className={clsx(classes.colorButton, classes.animatedButton, {
          selected: selected,
        })}
        variant="contained"
        style={{animationDelay: `${animationDelay}ms`, opacity: '0'}}
        // color="primary"
        onClick={onClick}
      >
        <Box className={classes.actionContainer}>
          <ReactSVG src={iconSrc} style={rotateSVG} />
          {activated && (
            <ReactSVG
              src={'assets/arcMenu/selectedShadow.svg'}
              style={{...rotateSVG, position: 'absolute'}}
            />
          )}
        </Box>
      </Button>
      <div className={clsx(classes.selectedText, classes.animatedButton)}>{buttonText}</div>
    </Box>
  );
}
