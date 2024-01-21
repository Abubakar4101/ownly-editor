import React, {useContext, useState} from 'react';
import {useStyles} from './styles';
import {Box, Typography} from '@mui/material';
import {ReactSVG} from 'react-svg';
import clsx from 'clsx';
import {PenTypes} from './index';

type Tabs = 'TextStyles' | 'Heading';
interface Pen {
  id: PenTypes;
  name: string;
  src: string;
  onClick: () => void;
}

interface Props {
  selectedPenType?: PenTypes;
  setselectedPenType: (penType?: PenTypes) => void;
}

function PensSection(props: Props) {
  const {selectedPenType, setselectedPenType} = props;
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');

  const Pens: Pen[] = [
    {
      id: 'Pencil',
      name: 'Blue',
      src: './assets/icons/DrawMenu/bluePen.svg',
      onClick: () => {},
    },
    {
      id: 'Circle',
      name: 'Red',
      src: './assets/icons/DrawMenu/redPen.svg',
      onClick: () => {},
    },
    {
      id: 'Marker',
      name: 'Yellow',
      src: './assets/icons/DrawMenu/yellowPen.svg',
      onClick: () => {},
    },
    {
      id: 'Easer',
      name: 'Erase',
      src: './assets/icons/DrawMenu/earse.svg',
      onClick: () => {},
    },
  ];
  const handleSVGInjection = (svg: any) => {
    // Modify the SVG's attributes here
    svg.setAttribute('width', '36px');
    svg.setAttribute('height', '64px');
  };
  return (
    <Box
      mr={0.5}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {Pens.map((pen: Pen) => {
        return (
          <Box
            key={pen.id}
            className={clsx(classes.penButton, {
              selected: pen.id === selectedPenType,
            })}
            onClick={() => {
              if (selectedPenType === pen.id) {
                setselectedPenType(undefined);
              } else {
                setselectedPenType(pen.id);
              }
              pen.onClick();
            }}
          >
            <ReactSVG
              beforeInjection={handleSVGInjection}
              src={pen.src}
              // style={{width: '32px', height: '75px'}}
              // scale={10}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default PensSection;
