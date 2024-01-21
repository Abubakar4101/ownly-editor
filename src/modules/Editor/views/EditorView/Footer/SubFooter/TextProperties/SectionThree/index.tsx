import React, {useContext, useState} from 'react';
import {useStyles} from '../styles';
import {Box, FormControl, Fab, Popover} from '@mui/material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import {ChromePicker} from 'react-color';
import EditorContext from '../../../../context/EditorContext';
import {Add, Remove} from '@mui/icons-material';

import TextAligments from './TextAligments';
import {MaxLineHeight} from 'modules/Editor/actions/useEditorActions';

type Tabs = 'TextStyles' | 'Heading';

function SectionThree() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const {selectedObjectsConfig, onChangeFontAligment, onChangeLineHeight, onChangeOpacity} =
    useContext(EditorContext);

  return (
    <Box className={classes.borderSectionWrapper}>
      <FormControl fullWidth variant="filled" size="small">
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box display={'flex'} justifyContent={'center'}>
            <>
              <Fab
                color="primary"
                aria-label="water"
                size="large"
                variant="circular"
                className={clsx(classes.fontButStyle, {center: true})}
                style={{margin: '0px 4px'}}
                onClick={event => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <ReactSVG src={'assets/icons/toggleText.svg'} />
              </Fab>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => {
                  setAnchorEl(null);
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <TextAligments
                  defualtTextAlign={selectedObjectsConfig.textAlign}
                  onChange={newAligment => {
                    onChangeFontAligment(newAligment);
                  }}
                />
              </Popover>
            </>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButStyle, {center: true})}
              style={{margin: '0px 4px'}}
              onClick={() => {
                //   onChange(searchValue);
              }}
            >
              <ReactSVG src={'assets/icons/List.svg'} />
            </Fab>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButStyle, {
                center: true,
                selected: selectedObjectsConfig.lineHeight === MaxLineHeight,
              })}
              style={{margin: '0px 4px'}}
              onClick={() => {
                onChangeLineHeight(1);
                //   onChange(searchValue);
              }}
            >
              <ReactSVG src={'assets/icons/spacing.svg'} />
            </Fab>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButStyle, {
                left: true,
                selected: selectedObjectsConfig.opacity !== 1,
              })}
              style={{margin: '0px 4px'}}
              onClick={() => {
                onChangeOpacity(1);
                //   onChange(searchValue);
              }}
            >
              <ReactSVG src={'assets/icons/transparency.svg'} />
            </Fab>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}

export default SectionThree;
