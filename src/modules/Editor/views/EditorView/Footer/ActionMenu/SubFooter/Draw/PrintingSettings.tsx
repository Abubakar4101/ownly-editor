import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {Box, Typography} from '@mui/material';
import {ReactSVG} from 'react-svg';

type Tabs = 'TextStyles' | 'Heading';

function PrintingSettings() {
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');

  return (
    <Box className={classes.borderSectionWrapper} alignItems={'center'}>
      <Typography variant="subtitle2" gutterBottom color={'white'} mb={1}>
        Printing Settings
      </Typography>
      <Typography variant="caption" gutterBottom color={'white'} mb={1}>
        Coming Soon
      </Typography>
    </Box>
  );
}

export default PrintingSettings;
