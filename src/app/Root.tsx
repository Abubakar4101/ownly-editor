import React from 'react';
import { matchRoutes, renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { withRouter, useParams } from 'react-router-dom';

function Root(props: RouteConfigComponentProps) {
  const { route: { routes = [] } = {}, history } = props;
  const { organizationId } = useParams<{ organizationId: string }>();
  if (false) {
    // return redirect(ModulesPaths.AUTH);
  } else {
    const routeRenderer = renderRoutes(routes, { history });
    // <Feedback>
    return <React.Suspense fallback={'loadiner'}>{routeRenderer}</React.Suspense>;
  }
}

export default withRouter(Root);
