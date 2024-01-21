import React from 'react';
import Routes from './routes';
import languages from './definitions/translations/en.json';
import i18n from 'i18n';

i18n.addResourceBundle('en', 'translation', languages, true);

function Editor() {
  return <Routes />;
}
export default Editor;
