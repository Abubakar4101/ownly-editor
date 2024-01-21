import {useEffect} from 'react';
import {RouteConfigComponentProps} from 'react-router-config';
import {injectParamsIntoUrl} from 'shared/utils';

function Redirect(props: RouteConfigComponentProps) {
  const {
    history,
    route: {redirectTo} = {},
    match: {params},
  } = props;

  useEffect(() => {
    if (!redirectTo) {
      throw new Error('Redirect URL is not provided!');
    }
    console.log('params', params);
    history.replace(injectParamsIntoUrl(redirectTo, params));
  }, [history, redirectTo, params]);

  return null;
}

export default Redirect;
