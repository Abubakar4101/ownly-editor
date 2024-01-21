import React, {useEffect} from 'react';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,
    // We have to temporary ignore this due to incorrect definitions
    // in the stylis-plugin-rtl module
    // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
    stylisPlugins: [stylisRTLPlugin],
  });

interface Props {
  children: React.ReactNode;
  direction: 'ltr' | 'rtl';
}

function RTL(props: Props) {
  const {children, direction} = props;

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return (
    <>
      {/* {direction === 'rtl' ? ( */}
      {/* <CacheProvider value={styleCache()}> {children} </CacheProvider> */}
      {/* ) : (
      )} */}
      {children}
    </>
  );
}

export default RTL;
