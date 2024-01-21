import React, {ReactElement} from 'react';
import {Box, Button, Typography, Link} from '@mui/material';
import {useTranslation} from 'react-i18next';
import NotFound from './NotFound.svg';

function ErrorPage404(): ReactElement {
  const {t} = useTranslation();

  return (
    <div>
      <Box width={'100%'} height={'calc(100vh - 150px)'} display="flex" justifyContent="center">
        <Box display="flex" justifyContent="center" flexDirection="column" width="25vw">
          <Box height="40vh">
            <img src={NotFound} width="100%" height="100%" />
          </Box>
          <Box mt={4} style={{textAlign: 'center'}}>
            <Typography variant="h4" style={{fontFamily: 'Poppins', fontWeight: 500}}>
              {`${t('general.404.title')}`}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            <Link href="/">
              <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{paddingBottom: 3, paddingTop: 3, backgroundColor: '#0B6CB9'}}
              >
                {`${t('general.404.homeButton')}`}
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/*</Layout>*/}
    </div>
  );
}

export default ErrorPage404;
