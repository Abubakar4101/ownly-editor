import React from 'react';
import {Grid, Typography, Box, Breadcrumbs, Link} from '@mui/material';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props {
  subtitle: string;
  items: {
    title: string;
    to?: string;
  }[];
  title: string;
  children?: React.ReactNode;
}

const Breadcrumb = ({subtitle, items, title, children}: Props) => (
  <Grid
    container
    sx={{
      p: '15px',
    }}
  >
    <Grid item xs={12} sm={6} lg={8}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {items
          ? items.map(item => (
              <div key={item.title}>
                {item.to ? (
                  <Link underline="none" color="inherit" component={NavLink} to={item.to}>
                    {item.title}
                  </Link>
                ) : (
                  <Typography color="textPrimary">{item.title}</Typography>
                )}
              </div>
            ))
          : ''}
      </Breadcrumbs>
      <Typography
        fontWeight="700"
        variant="h1"
        sx={{
          lineHeight: '1.235',
        }}
      >
        {title}
      </Typography>
      <Typography color="textSecondary" fontWeight="400" variant="h4">
        {subtitle}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-start">
      <Box
        sx={{
          display: {xs: 'none', md: 'block', lg: 'flex'},
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Grid>
  </Grid>
);

Breadcrumb.propTypes = {
  subtitle: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Breadcrumb;
