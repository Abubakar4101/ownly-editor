import React from 'react';
import {
  Typography,
  Box,
  TableRow,
  TableCell,
  LinearProgress,
  IconButton,
  Avatar,
  Tooltip,
  Chip,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import {UserTypes} from '../../types/index';
import {formatDate} from 'shared/components/TimeIntervals';
import clsx from 'clsx';
import {useStyles} from './styles';

interface Loction {
  address: string;
  city: string;
  country: string;
}

interface Props {
  title: React.ReactNode;
  imgsrc: string;
  menusCount: number;
  type?: UserTypes;
  loction: Loction;
  createdAt: string;
  actions: React.ReactNode;
}

const CardA = (props: Props) => {
  const {title, imgsrc, loction, menusCount, type, actions, createdAt} = props;

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const classes = useStyles();

  return (
    <TableRow className={clsx(classes.box, {checked: false}, 'large', {selectable: false})}>
      <TableCell
        sx={{
          pl: 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            src={imgsrc}
            alt={imgsrc}
            sx={{
              borderRadius: '10px',
              height: '70px',
              width: '90px',
            }}
          />

          <Box
            sx={{
              ml: 2,
            }}
          >
            <Typography variant="h3">{title}</Typography>
            <Typography color="textSecondary" variant="h4" fontWeight="400">
              {`${loction.address}, ${loction.city}, ${loction.country}`}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        {/* <Typography color="textSecondary" variant="h4" fontWeight="500">
          Menues
        </Typography> */}
        <Box display={'flex'}>
          <Typography variant="h5">{`${
            menusCount > 0 ? `${menusCount} Menues` : `No menues yet`
          }`}</Typography>
        </Box>
      </TableCell>
      {/* <TableCell>
        <Chip
          sx={{
            backgroundColor:
              type === 'admin'
                ? theme => theme.palette.primary.main
                : theme => theme.palette.secondary.main,
            color: '#fff',
            borderRadius: '6px',
          }}
          size="medium"
          label={capitalize(type)}
        />
      </TableCell> */}
      <TableCell>
        <Typography variant="h5">{formatDate(createdAt, 'dateOnly')}</Typography>
      </TableCell>
      <TableCell className={classes.actions}>{actions}</TableCell>
    </TableRow>
  );
};
export default CardA;
