import React, {ReactElement} from 'react';
import clsx from 'clsx';
import {Box, Button} from '@mui/material';
import {Close} from '@mui/icons-material';
import Body from '../components/body';
import {useStyles} from './styles';

export interface Props {
  type?: 'info' | 'error' | 'success';
  text: string;
  icon?: ReactElement;
  onClose: () => void;
  action?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

function CustomFeedback({type = 'info', text, icon, onClose, action, className}: Props) {
  const classes = useStyles();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      className={clsx(type, classes.box, className)}
    >
      <Box display={'flex'} alignItems={'center'}>
        {icon && (
          <Box mr={1} display={'flex'} width={18} height={18} className={classes.icon}>
            {icon}
          </Box>
        )}
        <Body variant={'caption'} className={action?.text ? classes.mr : undefined}>
          {text}
        </Body>
      </Box>
      {action ? (
        <Box>
          <Button onClick={action.onClick} className={classes.action}>
            {action.text}
          </Button>
        </Box>
      ) : (
        <Close onClick={onClose} className={classes.close} fontSize={'small'} />
      )}
    </Box>
  );
}

export default CustomFeedback;
