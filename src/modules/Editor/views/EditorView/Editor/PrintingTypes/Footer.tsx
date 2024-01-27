import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Typography, Button} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import useWindowDimensions from 'hooks/useWindowDimensions';
import EditorContext from '../../context/EditorContext';

function FooterTab() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const {width, height} = useWindowDimensions();
  const {onSelectCategory} = useContext(EditorContext);
  const classes = useStyles();

  return (
    <Box className={clsx(classes.footerWrraper)}>
      <Box width={'100%'} display={'flex'} justifyContent={(((width ?? 0) > 700) && ((height ?? 0) > 450)) ? 'space-between' : 'center'} alignItems={'center'}>
        {(((width ?? 0) > 700) && ((height ?? 0) > 450)) && <Typography
          variant={'caption'}
          className={classes.printingTypesText}
          gutterBottom
          marginBottom={0}
        >
          {'Please select one printing type for each layer on your design'}
        </Typography>}
        <Box display={'flex'} gap={2} marginRight={2}>
          <Button variant="outlined" size="small" className={clsx(classes.contentMsgBut)}
          onClick={() => {
            onSelectCategory(undefined)
          }}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small">
            Apply & save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterTab;
