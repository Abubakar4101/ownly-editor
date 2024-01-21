import React, {useContext, useState} from 'react';
import {useStyles} from '../styles';
import {Box, FormControl, Fab, Popover, Typography} from '@mui/material';
import clsx from 'clsx';
import {ReactSVG} from 'react-svg';
import EditorContext from '../../../../../context/EditorContext';

import TextAligments from './TextAligments';
import TextTranspancy from './TextTranspancy';
import LineHeight from './LineHeight';

import {MaxLineHeight} from 'modules/Editor/actions/useEditorActions';

type Tabs = 'TextStyles' | 'Heading';

function SectionThree() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [transpancyAnchorEl, setTranspancyAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [lineAnchorEl, setLineAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const {selectedObjectsConfig, onChangeFontAligment, onChangeLineHeight, onChangeOpacity} =
    useContext(EditorContext);

  return (
    <Box className={classes.borderSectionWrapper}>
      <FormControl fullWidth variant="filled" size="small">
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box className={classes.boxRaw}>
            <Typography variant="caption" gutterBottom color={'white'}>
              Font Align
            </Typography>
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
                  id={anchorEl ? 'simple-popover' : undefined}
                  open={Boolean(anchorEl)}
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
              {/* <Fab
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
              </Fab> */}
              <>
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
                  onClick={event => {
                    setLineAnchorEl(event.currentTarget);
                  }}
                >
                  <ReactSVG src={'assets/icons/spacing.svg'} />
                </Fab>
                <Popover
                  id={lineAnchorEl ? 'simple-popover' : undefined}
                  open={Boolean(lineAnchorEl)}
                  anchorEl={lineAnchorEl}
                  onClose={() => {
                    setLineAnchorEl(null);
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
                  <LineHeight
                    title={'Line Spacing'}
                    defualtValue={selectedObjectsConfig.lineHeight}
                    onChange={value => {
                      onChangeLineHeight(value);
                    }}
                  />
                  {/* <TextAligments
                    defualtTextAlign={selectedObjectsConfig.textAlign}
                    onChange={newAligment => {
                      onChangeFontAligment(newAligment);
                    }}
                  /> */}
                </Popover>
              </>
              <>
                <Fab
                  color="primary"
                  aria-label="water"
                  size="large"
                  variant="extended"
                  className={clsx(classes.fontButStyle, {
                    left: true,
                    // selected: selectedObjectsConfig.opacity !== 1,
                  })}
                  style={{margin: '0px 4px'}}
                  onClick={event => {
                    setTranspancyAnchorEl(event.currentTarget);
                  }}
                >
                  <ReactSVG src={'assets/icons/transparency.svg'} />
                </Fab>
                <Popover
                  id={transpancyAnchorEl ? 'simple-popover' : undefined}
                  open={Boolean(transpancyAnchorEl)}
                  anchorEl={transpancyAnchorEl}
                  onClose={() => {
                    setTranspancyAnchorEl(null);
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
                  <TextTranspancy
                    title={'Transparency'}
                    defualtValue={selectedObjectsConfig.opacity * 100}
                    onChange={opacity => {
                      onChangeOpacity(opacity);
                    }}
                  />
                </Popover>
              </>
            </Box>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}

export default SectionThree;
