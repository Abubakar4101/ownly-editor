import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import INIT_STATE from 'shared/globalTheme/themeConfig';
import { experimentalStyled, useMediaQuery, Container, Box } from '@mui/material';
import { TopbarHeight } from '../globalTheme/Theme-variable';
import Spinner from 'shared/components/Spinner';

const MainWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
}));

function WithLayout(props: RouteConfigComponentProps) {
  const { history, route: { routes = [] } = {} } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const ppppp = useParams<{ restaurantId: string }>();
  const { organizationId } = useParams<{ organizationId: string }>();

  return (
    <React.Suspense fallback={<Spinner />}>
      {(
        <MainWrapper className={INIT_STATE.activeMode === 'dark' ? 'darkbg' : ''} >
          {renderRoutes(routes, { history })}
        </MainWrapper>
      )}
    </React.Suspense>
  );
}

export default withRouter(WithLayout);
