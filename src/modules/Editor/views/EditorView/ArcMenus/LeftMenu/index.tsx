import React, {useEffect, useState, useContext} from 'react';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import {RenderMode, Categories} from 'modules/Editor/definitions/types';
import {useStyles} from '../styles';
import Header from 'shared/components/Header';
import ColorButton from './ColorButton';
import EditorContext from '../../context/EditorContext';
import clsx from 'clsx';

interface Props {
  onChangeCanvasColor: (color: string) => void;
}
export function LeftMenu(props: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const {onChangeCanvasColor} = props;
  const handleButtonClick = (id: number) => {
    setSelected(id);
  };
  const classes = useStyles();
  const bgImage = {
    backgroundImage: 'url(assets/arcMenu/leftArc.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'top right',
  };
  const {elementType} = useContext(EditorContext);

  let leftArcButtons: any[] = [
    {
      id: 0,
      degree: '20',
      transValue: '-29',
      buttonColor: '#7DBDCD',
    },
    {
      id: 1,
      degree: '10',
      transValue: '-59',
      buttonColor: '#CB7DCD',
    },
    {
      id: 2,
      degree: '0',
      transValue: '-70',
      buttonColor: '#FFFFFF',
    },
    {
      id: 3,
      degree: '-10',
      transValue: '-61',
      buttonColor: '#EFE268',
    },
    {
      id: 4,
      degree: '-20',
      transValue: '-35',
      buttonColor: '#7DCD85',
    },
  ];
  const screenHeight = window.innerHeight;
  if (screenHeight < 750) {
    const temp = [
      {
        id: 0,
        degree: '20',
        transValue: '-14',
        buttonColor: '#7DBDCD',
      },
      {
        id: 1,
        degree: '10',
        transValue: '-29',
        buttonColor: '#CB7DCD',
      },
      {
        id: 2,
        degree: '0',
        transValue: '-33',
        buttonColor: '#FFFFFF',
      },
      {
        id: 3,
        degree: '-10',
        transValue: '-28',
        buttonColor: '#EFE268',
      },
      {
        id: 4,
        degree: '-20',
        transValue: '-11',
        buttonColor: '#7DCD85',
      },
    ];

    leftArcButtons = temp;
  } else if (screenHeight > 750 && screenHeight < 800) {
    const temp = [
      {
        id: 0,
        degree: '20',
        transValue: '-21',
        buttonColor: '#7DBDCD',
      },
      {
        id: 1,
        degree: '10',
        transValue: '-42',
        buttonColor: '#CB7DCD',
      },
      {
        id: 2,
        degree: '0',
        transValue: '-49',
        buttonColor: '#FFFFFF',
      },
      {
        id: 3,
        degree: '-10',
        transValue: '-41',
        buttonColor: '#EFE268',
      },
      {
        id: 4,
        degree: '-20',
        transValue: '-20',
        buttonColor: '#7DCD85',
      },
    ];

    leftArcButtons = temp;
  }
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setTimeout(() => {
        setShowButtons(true);
      }, 200); // Adjust the delay time as needed (in milliseconds)
    };
    image.src = 'assets/arcMenu/leftArc.svg';
  }, []);
  return (
    <Box className={classes.leftArcMenu} style={bgImage}>
      {showButtons &&
        leftArcButtons.map((btn, index) => (
          <ColorButton
            key={index}
            degree={btn.degree}
            transValue={btn.transValue}
            buttonColor={btn.buttonColor}
            animationDelay={index * 60} // Adjust the delay time as needed (in milliseconds)
            onClick={() => {
              handleButtonClick(btn.id);
              onChangeCanvasColor(btn.buttonColor);
            }}
            selected={selected === btn.id}
          />
        ))}
    </Box>
  );
}
