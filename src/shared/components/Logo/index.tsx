import React from 'react';
import INIT_STATE from '../../globalTheme/themeConfig';
import {Link} from 'react-router-dom';
import {ReactComponent as LogoDark} from '../../assets/images/logos/logo-dark.svg';
import {ReactComponent as LogoLight} from '../../assets/images/logos/logo-white.svg';

const LogoIcon = () => {
  return (
    // underline="none"
    <Link to="/">{INIT_STATE.activeMode === 'dark' ? <LogoLight /> : <LogoDark />}</Link>
  );
};

export default LogoIcon;
