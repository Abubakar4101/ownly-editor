import React, {ReactElement, useMemo} from 'react';
import clsx from 'clsx';
import {Link as RouterLink, LinkProps, useParams} from 'react-router-dom';
import {injectParamsIntoUrl} from '../utils';
import {makeStyles} from '@mui/styles';
import qs from 'qs';

const useStyles = makeStyles(() => ({
  link: () => ({
    textDecoration: 'none',
  }),
}));

interface Props extends LinkProps {
  params?: {[k: string]: string};
  children: React.ReactNode;
  to: string;
  underline?: boolean;
  newPage?: boolean;
  queryString?: {};
}

function LinkWithParams(props: Props): ReactElement {
  const {children, to, params, underline = false, newPage, queryString = {}, ...rest} = props;
  const urlParams = useParams();
  const classes = useStyles(underline);

  const routePathWithParams = useMemo(
    () => injectParamsIntoUrl(to, {...urlParams, ...params}),
    [to, urlParams, params],
  );

  return (
    <RouterLink
      target={newPage ? '_black' : undefined}
      {...rest}
      to={`${routePathWithParams}?${qs.stringify(queryString)}`}
      className={clsx(rest.className, classes.link)}
    >
      {children}
    </RouterLink>
  );
}

export default LinkWithParams;
