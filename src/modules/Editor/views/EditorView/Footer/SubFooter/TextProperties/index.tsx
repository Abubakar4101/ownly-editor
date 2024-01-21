import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {
  Box,
  Switch,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Divider,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import PrintingSettings from './PrintingSettings';

type Tabs = 'TextStyles' | 'Heading';
interface Pen {
  id: string;
  name: string;
  src: string;
  onClick: () => void;
}

interface PenProps {
  imgSrc: string;
  onClick: () => void;
}
function PenButton(props: PenProps) {
  const {imgSrc, onClick} = props;
  const classes = useStyles();

  return (
    <Box className={classes.penButton}>
      <ReactSVG src={imgSrc} />
    </Box>
  );
}

function TextProperties() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Heading');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  const Pens: Pen[] = [
    {id: 'blue', name: 'Blue', src: './assets/icons/DrawMenu/bluePen.svg', onClick: () => {}},
    {id: 'red', name: 'Red', src: './assets/icons/DrawMenu/redPen.svg', onClick: () => {}},
    {id: 'yellow', name: 'Yellow', src: './assets/icons/DrawMenu/yellowPen.svg', onClick: () => {}},
    {id: 'erase', name: 'Erase', src: './assets/icons/DrawMenu/earse.svg', onClick: () => {}},
  ];

  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
      <Box
        mr={0.5}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SectionOne />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
        <SectionTwo />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <SectionThree />
      {/* <BorderWight /> */}
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <PrintingSettings />
    </Box>
  );
}

export default TextProperties;
