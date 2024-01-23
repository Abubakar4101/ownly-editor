import React from 'react';
import {Button, Box} from '@mui/material';
import clsx from 'clsx';
import {useStyles} from './styles';
import {ReactSVG} from 'react-svg';
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
  onClick: () => void;
}
export default function RightArcButton(props: Props) {
  const { width } = useWindowDimensions();
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
    translate: (width ?? 0) > 700 ? `${transValue}px 0px` : `0px ${transValue}px`,
  };
  const rotateSVG = {
    transform: `rotate(${rotateValue}deg)`,
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
        style={{ animationDelay: `${animationDelay}ms`, opacity: '0' }}
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
      {(width ?? 0) > 700 && (
        <div className={clsx(classes.selectedText, classes.animatedButton)}>
          {buttonText}
        </div>
      )}
    </Box>
  );
}
