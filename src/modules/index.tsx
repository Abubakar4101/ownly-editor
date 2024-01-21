import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { QueryParamProvider } from 'use-query-params';
import { AppPaths } from './types';
// import {ModulesPaths} from 'shared/types/index';
import Layout from './layout';
import WithLayout from 'shared/components/WithLayout';

import Spinner from 'shared/components/Spinner';
import { ModulesPaths } from 'shared/types';

const Editor = lazy(() => import('./Editor'));
const ErrorPage404 = lazy(() => import('shared/components/mine/ErrorPages/404'));

const routes: RouteConfig[] = [
  {
    path: ModulesPaths.ROOT,
    component: WithLayout, //Security & Header
    routes: [
      {
        path: AppPaths.HOME,
        name: 'Restaurants',
        component: Editor,
      },
      {
        path: '*',
        exact: false,
        name: 'page404',
        component: ErrorPage404,
      },
    ],
  },
];

const Modules = () => {
  const renderedRoutes = renderRoutes(routes);
  return (
    <React.Suspense fallback={<Spinner />}>
      <QueryParamProvider ReactRouterRoute={Route}>{renderedRoutes}</QueryParamProvider>
    </React.Suspense>
  );
};

export default Modules;
