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

function TextProperties() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Heading');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

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
    </Box>
  );
}

export default TextProperties;
