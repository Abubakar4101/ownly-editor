import React, { lazy } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import ErrorPage404 from 'shared/components/mine/ErrorPages/404';
import Modules from '../../modules';
import Root from '../Root';
import { ModulesPaths } from 'shared/types';

const routes: RouteConfig[] = [
  {
    path: ['/'],
    component: Root, //for login, user stuff
    routes: [
      {
        path: ['/', ModulesPaths.ROOT],
        name: 'modules',
        component: Modules,
      },
      {
        path: '*',
        exact: false,
        component: ErrorPage404,
      },
    ],
  },
];

const Routes = () => {
  const renderedRoutes = renderRoutes(routes);
  return <React.Suspense fallback="...">{renderedRoutes}</React.Suspense>;
};

export default Routes;
