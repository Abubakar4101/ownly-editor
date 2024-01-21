import React, {ReactElement, useCallback} from 'react';
import clsx from 'clsx';
import {Paper, Box, Typography, Checkbox, IconButton, Tooltip} from '@mui/material';
import {useStyles} from './styles';

const size = 'medium';
export interface Props {
  id: string;
  header: string;
  body: {
    address: string;
    location: string;
    industry: string;
    description: string;
    tags: string[];
  };
  adornment: React.ReactElement;
  footer: {
    icon: React.ReactNode;
    text: string;
  };
  actions: {
    icon: ReactElement;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }[];
  selected?: boolean;
  onSelect?: (id: string) => void;
}

function Card({header, body, actions = [], footer, onSelect, selected, ...item}: Props) {
  const classes = useStyles();

  const handleSelection = useCallback(() => {
    if (onSelect) {
      onSelect(item.id);
    }
  }, [item.id, onSelect]);

  return (
    <Paper
      elevation={0}
      className={clsx(classes.box, {checked: selected}, size, {selectable: true})}
    >
      <Box className={classes.upperSection}>
        <Box display="flex" mb="5px">
          {actions.length ? (
            <Box ml="auto" display="flex" alignItems="center" className={classes.actions}>
              {actions.map((action, index) => (
                <IconButton onClick={action.onClick} key={index} className={classes.actionBtn}>
                  {action.icon}
                </IconButton>
              ))}
            </Box>
          ) : (
            <></>
          )}
        </Box>

        <Box display="flex" alignItems="center" position="relative">
          {item.adornment && (
            <div
              className={clsx(classes.moduleShape, 'iconRounded', 'moduleShape', 'large')}
              style={{backgroundColor: '#0B6CB9'}}
            >
              {item.adornment}
            </div>
          )}
          <Checkbox
            inputProps={{
              'aria-label': 'teams checkbox',
            }}
            color="primary"
            className={classes.checkbox}
            onChange={handleSelection}
            checked={selected}
          />
          {header && (
            <Tooltip title={header}>
              <Typography className={classes.name}>{header}</Typography>
            </Tooltip>
          )}
        </Box>
        <Box ml={6} mt={0}>
          {body && (
            <Box>
              <Typography variant="caption" color="textSecondary" component="div">
                {body.address}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="div">
                {body.location}
              </Typography>
              <Box mt={1} display={'flex'} alignItems={'center'} className={clsx(classes.Industry)}>
                <Typography className={classes.text}>{body.industry}</Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box mt={2} display={'flex'} alignItems={'center'}>
          <Typography
            className={clsx(classes.descriptionText)}
            variant="caption"
            color="textSecondary"
            component="div"
          >
            {body.description || 'No description to show '}
          </Typography>
        </Box>
        <Box mt={2} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
          <Box display={'flex'} alignItems={'center'}>
            <Typography variant="body1" color="textSecondary" component="div">
              {'Tags'}
            </Typography>
          </Box>
          <Box className={classes.tagsWrapper}>
            {body.tags.map((tag, index) => {
              return (
                <Box
                  key={index}
                  mt={2}
                  display={'flex'}
                  alignItems={'center'}
                  className={clsx(classes.tagChip)}
                >
                  <Box className={classes.text}>{tag}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box className={classes.lowerSection}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          py={0.5}
          className={classes.footerElements}
        >
          <Box display="flex" alignItems="center">
            <Box className={clsx(classes.iconStyle, size, 'function', 'icon')}>{footer.icon}</Box>
            <Typography variant={'body1'}>{footer.text}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Card;
