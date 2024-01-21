import { useEffect } from 'react';
import INIT_STATE from 'shared/globalTheme/themeConfig';
import { buildTheme } from 'shared/globalTheme/Theme-variable';

const themeSettings = () => {
  const theme = buildTheme({
    direction: INIT_STATE.activeDir,
    theme: INIT_STATE.activeTheme,
  });
  // useEffect(() => {
  //   document.dir = INIT_STATE.activeDir;
  // }, []);

  return theme;
};
export default themeSettings;
