import React, { lazy, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { QueryParamProvider } from 'use-query-params';
import { AppPaths } from '../../types';
import ErrorPage404 from 'shared/components/mine/ErrorPages/404';
import Sidebar from 'shared/components/Sidebar';
import { moduleWrapper } from '../../ModuleWrapper';

const EditorView = lazy(() => import('../views/EditorView'));

const routes: RouteConfig[] = [
  {
    path: AppPaths.HOME,
    exact: true,
    name: 'Editor',
    component: moduleWrapper(EditorView),
  },
  {
    path: '*',
    exact: false,
    name: '404',
    component: ErrorPage404,
  },
];

const Routes = () => {
  const renderedRoutes = renderRoutes(routes);

  return (
    <React.Suspense fallback="...">
      <QueryParamProvider ReactRouterRoute={Route}>{renderedRoutes}</QueryParamProvider>
    </React.Suspense>
  );
};

export default Routes;
