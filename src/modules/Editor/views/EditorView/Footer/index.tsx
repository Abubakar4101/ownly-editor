import React, { useContext, useMemo } from 'react';
import { Box, IconButton, Fab, Typography, Divider } from '@mui/material';
import { useStyles } from './styles';
import { ArrowBackIos, InfoOutlined, InvertColorsOutlined } from '@mui/icons-material';
import ActionMenu from './ActionMenu';
import EditorContext from '../context/EditorContext';
import SubFooter from './SubFooter';
import SidesFooter from './SidesFooterHori';
import { ReactSVG } from 'react-svg';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';
import clsx from 'clsx';


function Footer() {
  const { selectedRenderMode, isFirstUse, bottomMenu, getSelectedObjects, onSelectBottomMenuType, onSelectCategory, selectedCategory, showRightMenu } = useContext(EditorContext);
  const [priceCollapse, setPriceCollapse] = React.useState(true);
  const { bottomMenuVisibility } = useEditorActions();
  const { width, height } = useWindowDimensions();
  const classes = useStyles();
  const handleClickCollapse = (e: any) => {
    setPriceCollapse(!priceCollapse); // Un-commented this line
    // console.log('Button clicked, priceCollapse state is now: ', !priceCollapse);
  };

  const handleHorizontalMenu = (e: any) => {
    onSelectBottomMenuType('CircularMenu');
  }
  const isSubMenu = useMemo(() => {
    if (
      selectedCategory === 'Texts' ||
      selectedCategory === 'Draw' ||
      selectedCategory === 'Graphics'
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedCategory]);
  return (
    <Box className={classes.footer}>
      {(width ?? 0) > 700 && (height ?? 0) > 450 && <Box alignItems={'flex-end'} style={{ pointerEvents: 'none', marginTop: '100%' }}>
        <Box className={classes.priceWrapper}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            style={{
              boxShadow: '0px 5px 4px 0px #8783E140',
              cursor: 'pointer',
            }}
            onClick={e => handleClickCollapse(e)}
          >
            <IconButton
              size="small"
              aria-label="menu"
              color="inherit"
              aria-controls="notification-menu"
              aria-haspopup="true"
            >
              <ReactSVG src={'assets/icons/ArrowDown.svg'} />
            </IconButton>
          </Box>
          {priceCollapse ? (
            <Box></Box>
          ) : (
            <Box style={{ backgroundColor: 'grey' }} paddingY={1} paddingX={2}>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography fontSize={'12px'}>{'Text 1'}</Typography>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography fontSize={'13px'} fontWeight={'bold'}>
                    {'PVC Printing'}
                  </Typography>
                  <Typography fontSize={'13px'} fontWeight={'bold'}>
                    {'£100.00'}
                  </Typography>
                </Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography fontSize={'12px'}>{'Image 1'}</Typography>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography fontSize={'13px'} fontWeight={'bold'}>
                    {'Laser Printing'}
                  </Typography>
                  <Typography fontSize={'13px'} fontWeight={'bold'}>
                    {'£100.00'}
                  </Typography>
                </Box>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'} paddingTop={0.5}>
                <Typography fontSize={'13px'} fontWeight={'bold'}>
                  {'t-shirt'}
                </Typography>
                <Typography fontSize={'13px'} fontWeight={'bold'}>
                  {'£100.00'}
                </Typography>
              </Box>
            </Box>
          )}
          <Box ml={2} mt={1}>
            <Typography variant="subtitle1" display="block" className={classes.priceValue}>
              {'£300.00'}
            </Typography>
            <Typography variant="subtitle2" display="block" className={classes.priceText}>
              {'Total'}
            </Typography>
          </Box>
        </Box>
      </Box>}

      <Box display={'flex'} flexDirection={selectedCategory === 'Draw' ? 'column' : 'row'} className={classes.bottomMenuWrapper}>
        {/* {Draw Menu} */}
        {
          (width ?? 0) < 700 && (height ?? 0) > 450 && <Box display={'flex'} className={clsx(classes.subBottomMenuWrapper, { isSubMenu: true })}>
            <Box
              display={bottomMenu === 'CircularMenu' && ((width ?? 0) <= 700 || (height ?? 0) <= 450) ? 'none' : 'flex'}
              alignItems={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'center' : 'flex-start'}
              flexDirection={'column'}
              justifyContent={'flex-end'}
              overflow={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'hidden' : 'scroll'}
              className={classes.actionMenu}
            >
              {selectedCategory &&
                isSubMenu &&
                (selectedCategory === 'Draw' || getSelectedObjects().length) && <Box width={selectedCategory === 'Draw' ? '650px' : (selectedCategory === 'Graphics' ? '780px' : '840px')} className={clsx(classes.subActionMenu, { isSubMenu: true })}>
                  <SubFooter />
                </Box>}
            </Box>
          </Box>
        }

        {/* {Bottom menu} */}
        <Box display={'flex'} flexDirection={'row'} alignItems={'end'}>
          <Box
            display={bottomMenu === 'CircularMenu' && ((width ?? 0) <= 700 || (height ?? 0) <= 450) ? 'none' : 'flex'}
            alignItems={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'center' : 'flex-start'}
            flexDirection={'column'}
            justifyContent={'flex-end'}
            overflow={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'hidden' : 'scroll'}
            className={classes.actionMenu}
          >
            {selectedRenderMode === '3DMODE' && (width ?? 0) > 700 && (height ?? 0) > 450 && <SidesFooter />}
            <ActionMenu />
          </Box>
        </Box>
      </Box>


      {
        (selectedCategory === 'Draw' || !showRightMenu) && (width ?? 0) > 650 && (height ?? 0) < 450 && <Box display={'flex'} className={classes.subBottomMenuWrapper}>
          <Box
            display={bottomMenu === 'CircularMenu' && ((width ?? 0) <= 700 || (height ?? 0) <= 450) ? 'none' : 'flex'}
            alignItems={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'center' : 'flex-start'}
            flexDirection={'column'}
            justifyContent={'flex-end'}
            overflow={(width ?? 0) > 700 && (height ?? 0) > 450 ? 'hidden' : 'scroll'}
            className={classes.actionMenu}
          >

            {selectedRenderMode === '3DMODE' && (width ?? 0) > 700 && (height ?? 0) > 450 && <SidesFooter />}
            {selectedCategory &&
              isSubMenu &&
              (selectedCategory === 'Draw' || getSelectedObjects().length) && <Box width={selectedCategory === 'Draw' ? '650px' : (selectedCategory === 'Graphics' ? '780px' : '840px')} className={clsx(classes.subActionMenu, { isSubMenu: true })}>
                <SubFooter />
              </Box>}
          </Box>

        </Box>
      }
      {((width ?? 0) > 650 || (height ?? 0) <= 450) && <Box className={classes.infoWrapper}>
        <Fab color="primary" aria-label="water" size="medium" className={classes.infoBut}>
          <InvertColorsOutlined />
        </Fab>
        <Fab color="primary" aria-label="info" size="medium" className={classes.infoBut}>
          <InfoOutlined />
        </Fab>
      </Box>}
    </Box>
  );
}

export default Footer;
