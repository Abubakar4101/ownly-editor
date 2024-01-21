import React, {ReactNode} from 'react';
import {Box, Modal, Typography, Button} from '@mui/material';
import {useStyles} from './styles';
import CloseIcon from '@mui/icons-material/Close';
import clsx from 'clsx';

export interface Props {
  open: boolean;
  onClose?: () => void;
  title: string;
  content: ReactNode;
  actions: Array<{
    text: string;
    disable?: boolean;
    onClick: () => void;
    variant: 'primary' | 'secondary' | 'error' | 'inherit';
  }>;
  alignment?: 'center' | 'right';
  disableBackdropClick?: boolean;
}
function Dialog({
  open,
  onClose,
  title,
  content,
  actions,
  alignment = 'right',
  disableBackdropClick,
}: Props) {
  const classes = useStyles();
  return (
    <Modal
      className={classes.root}
      open={open}
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          onClose && onClose();
        }
      }}
      // disableBackdropClick={}
      BackdropProps={{className: classes.backdrop}}
    >
      <Box className={classes.paper}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.header}
        >
          <Typography
            variant="body1"
            component="div"
            display="initial"
            className={classes.title}
            color={'textPrimary'}
          >
            {title}
          </Typography>
          {onClose && (
            <CloseIcon opacity={0.7} onClick={() => onClose()} className={classes.icon} />
          )}
        </Box>

        <Box display={'flex'} flexDirection="column" className={classes.content}>
          {content}
        </Box>
        <Box display="flex" justifyContent={alignment === 'right' ? 'flex-end' : 'center'}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            className={alignment === 'center' ? classes.actionContainers : undefined}
            flexDirection={alignment === 'center' ? 'column' : undefined}
          >
            {actions.slice(0, 2).map(({text, disable, onClick, variant}, index) => (
              <Button
                key={index}
                variant={'contained'}
                disabled={disable}
                onClick={onClick}
                color={variant}
                className={classes.actionBtns}
                // classes={{
                //   contained: variant === 'danger' ? classes.containedDanger : '',
                //   text: clsx(variant === 'danger' ? classes.textDanger : '', classes.text),
                //   containedSecondary: classes.containedSecondary,
                // }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
export default Dialog;
