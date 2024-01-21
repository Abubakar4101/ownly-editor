import React, {useMemo} from 'react';
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';
import {Box, experimentalStyled, Container, Button, useMediaQuery} from '@mui/material';
import {TopbarHeight} from 'shared/globalTheme/Theme-variable';
import Footer from 'shared/components/Footer';
import {useTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';

interface Props {
  children: React.ReactNode;
  height?: number;
}

export default function PageWrapper(props: Props) {
  const {children, height} = props;
  const theme = useTheme();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      [theme.breakpoints.up('lg')]: {
        paddingTop: height || TopbarHeight,
      },
      [theme.breakpoints.down('lg')]: {
        paddingTop: '64px',
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <PageWrapper> */}
      <Container
        maxWidth={false}
        // sx={{
        //   paddingTop: height ? '20px' : '0px',
        //   paddingLeft: lgUp ? '280px!important' : '',
        // }}
        style={{
          maxWidth: '100%',
          padding: '0px 8px',
        }}
      >
        <Box sx={{minHeight: 'calc(100vh - 100px)'}}>{children}</Box>
        {/* <Footer /> */}
      </Container>
      {/* </PageWrapper> */}
    </div>
  );
}

export const pageWrapper =
  (
    Component: React.LazyExoticComponent<(props: RouteConfigComponentProps) => JSX.Element | null>,
  ) =>
  (props: RouteConfigComponentProps) => {
    return (
      <>
        <PageWrapper>
          <Component {...props} />
        </PageWrapper>
      </>
    );
  };
