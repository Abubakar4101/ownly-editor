import React from 'react';
import {useStyles} from './styles';
import {Box, TextField, Fab} from '@mui/material';
import {KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';

interface Props {
  searchValue: string;
  onChange: (searchValue: string) => void;
}

function SearchBox(props: Props) {
  const {searchValue, onChange} = props;
  const classes = useStyles();

  return (
    <>
      <Box width={'100%'} style={{display: 'flex', alignItems: 'center'}}>
        <TextField
          id="outlined-basic" className={classes.searchInput}
          placeholder="Search"
          size="small"
          variant="filled"
          value={searchValue}
          onChange={e => onChange(e.target.value)}
        />
        <Fab
          color="primary"
          aria-label="water"
          size="large"
          variant="extended"
          className={classes.searchBut}
          onClick={() => {
            onChange(searchValue);
          }}
        >
          <KeyboardArrowRight style={{fontSize: '30px'}} />
        </Fab>
      </Box>
    </>
  );
}

export default SearchBox;
