import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Typography, Button, TextField, Divider} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import {ReactSVG} from 'react-svg';
import {PrintingTypes} from './index';

interface Props {
  selectedType: PrintingTypes;
  onSelectType: (newType: PrintingTypes) => void;
}

function BodyTab(props: Props) {
  const {selectedType, onSelectType} = props;

  const classes = useStyles();

  return (
    <Box className={clsx(classes.bodyWrraper)}>
      <Box className={clsx(classes.leftBody)}>
        <img width={'80%'} src="./assets/printingTypes/image.png"></img>
        <Box mt={4} width={'77%'}>
          <Typography
            variant={'body1'}
            style={{color: '#CACCD2', fontFamily: 'Duplet Rounded', fontWeight: 700}}
            gutterBottom
          >
            {selectedType}
          </Typography>
          <Typography
            variant={'caption'}
            style={{
              color: '#CACCD2',
              display: 'flex',
              fontFamily: 'Duplet Rounded',
              lineHeight: '15px',
            }}
            gutterBottom
          >
            {
              'Specialized inkjet technology to directly print high-resolution, Good for texts and Specialized inkjet technology to directly print high-resolution, Good for texts'
            }
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" variant="fullWidth" flexItem className={classes.divider} />
      <Box className={clsx(classes.rightBody)}>
        <Box ml={2} mt={2}>
          <Typography
            variant={'caption'}
            className={classes.printingTypesText}
            style={{textTransform: 'uppercase'}}
            gutterBottom
          >
            {'General'}
          </Typography>
          <Box mt={0.8} display={'flex'}>
            <Button
              className={clsx(classes.printingTypesBut, {selected: selectedType === 'DTG'})}
              variant="outlined"
              startIcon={
                <ReactSVG
                  style={{marginTop: '4px'}}
                  src={'./assets/printingTypes/printing-page.svg'}
                />
              }
              endIcon={
                <ReactSVG
                  src={
                    selectedType === 'DTG'
                      ? './assets/printingTypes/switchSelected.svg'
                      : './assets/printingTypes/switchUnselected.svg'
                  }
                />
              }
              onClick={() => {
                onSelectType('DTG');
              }}
            >
              DTG
            </Button>
            <Button
              className={clsx(classes.printingTypesBut, {selected: selectedType === 'UV'})}
              variant="outlined"
              startIcon={
                <ReactSVG
                  style={{marginTop: '4px'}}
                  src={'./assets/printingTypes/printing-page.svg'}
                />
              }
              endIcon={
                <ReactSVG
                  src={
                    selectedType === 'UV'
                      ? './assets/printingTypes/switchSelected.svg'
                      : './assets/printingTypes/switchUnselected.svg'
                  }
                />
              }
              onClick={() => {
                onSelectType('UV');
              }}
            >
              UV
            </Button>
          </Box>
        </Box>
        <Box className={clsx(classes.printingTypesContent)}>
          <Box className={clsx(classes.printingTypesContentBlur)}></Box>
          <Box className={clsx(classes.printingTypesContentMsg)}>
            <Typography
              className={classes.printingTypesText}
              fontWeight={700}
              fontSize={'24px'}
              gutterBottom
            >
              {'Stay tuned'}
            </Typography>
            <Typography fontSize={'12px'} className={classes.printingTypesText} gutterBottom>
              {'We have more, enter your email to get notify when it’s ready'}
            </Typography>
            <Box display={'flex'} alignItems={'center'}>
              <TextField
                size="small"
                placeholder="Email Adress"
                className={clsx(classes.contentMsgText)}
              />
              <Button variant="outlined" size="large" className={clsx(classes.contentMsgBut)}>
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BodyTab;
