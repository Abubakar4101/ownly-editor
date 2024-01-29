import React from 'react';
import { Button, Box } from '@mui/material';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ReactSVG } from 'react-svg';
import useWindowDimensions from 'hooks/useWindowDimensions';


interface Props {
  selected: boolean;
  activated: boolean;
  degree: string;
  iconSrc: string;
  transValue: string;
  rotateValue: string;
  buttonText: string;
  animationDelay: number;
  opacity: number;
  btnWidth: number;
  btnHeight: number;
  onClick: () => void;
}
export default function RightArcButton(props: Props) {
  const { width, height } = useWindowDimensions();
  const {
    selected,
    activated,
    degree,
    transValue,
    buttonText,
    iconSrc,
    rotateValue,
    animationDelay,
    opacity,
    btnWidth,
    btnHeight,
    onClick,
  } = props;
  const classes = useStyles();
  const buttonPosition = {
    opacity,
    transform: `rotate(${degree}deg)`,
    transformOrigin: 'top left',
    translate: (width ?? 0) > 700 && (height ?? 0) > 450 ? `${transValue}px 0px` : `${transValue}`,
  };
  const rotateSVG = {
    transform: (width ?? 0) >= 650 && (height ?? 0) <= 450 ? 'rotate(90deg)' : `rotate(${degree}deg)`,
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <Box className={clsx(classes.rightArcButtonContainer)} style={buttonPosition}>
      <Button
        className={clsx(classes.colorButton, classes.animatedButton, {
          selected: selected,
        })}
        variant="contained"
        style={{
          animationDelay: `${animationDelay}ms`, opacity: '0',
          width: `${btnWidth}px`, height: `${btnHeight}px`
        }}
        onClick={handleClick}
      >
        <Box className={classes.actionContainer}>
          <ReactSVG src={iconSrc} style={rotateSVG} />
          {activated && (
            <ReactSVG
              src={'assets/arcMenu/selectedShadow.svg'}
              style={{ ...rotateSVG, position: 'absolute' }}
            />
          )}
        </Box>
      </Button>
      {(width ?? 0) > 700 && (height ?? 0) > 450 && (
        <div className={clsx(classes.selectedText, classes.animatedButton)}>
          {buttonText}
        </div>
      )}
    </Box>
  );
}
