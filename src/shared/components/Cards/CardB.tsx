import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Fab,
  IconButton,
  Stack,
  Menu as MenuDiv,
  MenuItem,
  Card,
  Avatar,
  Tooltip,
  Switch,
  Chip,
  Grid,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import {UserTypes} from '../../types/index';
import {formatDate} from 'shared/components/TimeIntervals';
import clsx from 'clsx';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import {useTheme} from '@mui/material/styles';
import {useStyles} from './styles';

interface Props {
  title: React.ReactNode;
  imgsrc: string;
  state: string;
  description: string;
  itemCount: number;
  actions: React.ReactNode;
  updatedAt: string;
  selected?: boolean;
}

const CardA = (props: Props) => {
  const {title, imgsrc, state, selected, description, itemCount, actions, updatedAt} = props;

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const classes = useStyles();

  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Card
      style={{margin: '0px'}}
      className={clsx(classes.box, {checked: selected}, 'large', {selectable: false})}
    >
      <Box>
        <Box display="flex" alignItems="center">
          <DragIndicatorIcon style={{color: '#848484'}} />
          <Avatar src={imgsrc} alt={imgsrc} sx={{ml: 1.5, width: '65px', height: '65px'}} />
          <Box width={'100%'} display={'flex'} justifyContent={'space-between'} sx={{ml: 2}}>
            <Box width={'100%'} display={'flex'}>
              <Box width={'58%'}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography variant="h3">{title}</Typography>
                </Box>
                <Typography m={'5px 0px'} variant="body2">
                  {description}
                </Typography>
                <Box display={'flex'}>
                  <Chip
                    label={state === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE'}
                    sx={{mr: '10px', width: '80px', height: '21px'}}
                    size="small"
                    color={state === 'ACTIVE' ? 'primary' : 'secondary'}
                  />
                  <Typography color="textSecondary" variant="body1" fontWeight="400">
                    {`updated at ${formatDate(updatedAt, 'dateOnly')}`}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Chip
                  color="default"
                  size="medium"
                  sx={{
                    borderRadius: '6px',
                    color: () => theme.palette.grey.A400,
                    fontSize: '16px',
                  }}
                  label={`${itemCount} Items`}
                />
              </Box>
            </Box>
            <Box className={classes.actions} display={'flex'} flexDirection={'column'}>
              {actions}
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
export default CardA;
