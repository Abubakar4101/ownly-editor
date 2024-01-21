import React, {useState, useRef, useCallback} from 'react';
import clsx from 'clsx';
import {Box, IconButton, FormControl, Input, Tooltip} from '@mui/material';
import {Search as SearchIcon, Close} from '@mui/icons-material';
import {useStyles} from './styles';

export interface Props {
  onChange: (value: string) => void;
  searchValue?: string;
  placeholder?: string;
}

function Search({onChange, searchValue, placeholder}: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const mySearchInput = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const handleSearch = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value);
      }
    },
    [onChange],
  );

  const handleCloseSearch = useCallback(() => {
    if (mySearchInput?.current?.value.length) {
      mySearchInput.current.value = '';
      handleSearch('');
    } else {
      setIsSearchOpen(false);
    }
  }, [handleSearch]);

  return (
    <Box className={classes.actionList} textAlign="right" display="flex" alignItems="center">
      <span className={classes.searchWrapper}>
        <FormControl
          size="small"
          variant="filled"
          className={clsx(classes.searchControl, isSearchOpen ? 'opened' : 'closed', 'left')}
        >
          <IconButton
            aria-label="search control"
            className={classes.inputSearchIcon}
            style={{position: 'absolute'}}
            disabled
            onClick={() => onChange(searchValue || '')}
          >
            <SearchIcon />
          </IconButton>
          <Input
            id="search-control"
            inputRef={mySearchInput}
            type="search"
            className={classes.searchField}
            placeholder={placeholder || 'Search'}
            value={searchValue}
            inputProps={{
              autoFocus: true,
              className: classes.input,
            }}
            onChange={e => handleSearch(e.target.value)}
          />
          <IconButton
            aria-label="search control"
            style={{
              position: 'absolute',
            }}
            className={classes.closeIcon}
            onClick={() => handleCloseSearch()}
          >
            <Close fontSize="small" />
          </IconButton>
        </FormControl>
        <Tooltip title="Search">
          <IconButton
            size="small"
            className={clsx(classes.searchIcon, isSearchOpen ? 'hidden' : 'visible')}
            onClick={() => {
              setTimeout(() => {
                mySearchInput.current?.focus();
              }, 200);
              setIsSearchOpen(true);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </span>
    </Box>
  );
}

export default Search;
