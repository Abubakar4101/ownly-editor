import React from 'react';
import {useLocation} from 'react-router';
import {NavLink, useParams} from 'react-router-dom';
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import {SidebarWidth} from '../../globalTheme/Theme-variable';
import LogoIcon from '../Logo';
import Menuitems from './Menuitems';
import Buynow from './Buynow';
import Scrollbar from '../Scrollbar';
import LinkWithParams from 'shared/components/Link';
import {AppPaths} from '../../../modules/types';
import {useStyles} from './styles';

interface Props {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
}

const Sidebar = ({isMobileSidebarOpen, onSidebarClose, isSidebarOpen}: Props) => {
  const [open, setOpen] = React.useState(true);
  const {pathname} = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const lastSegment = pathname.split('/').pop();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const {restaurantId} = useParams<{restaurantId: string}>();
  const classes = useStyles();

  const handleClick = (index: number) => {
    if (open === Boolean(index)) {
      setOpen(prevopen => !prevopen);
    } else {
      setOpen(Boolean(index));
    }
  };

  const SidebarContent = (
    <Scrollbar other={{style: {height: 'calc(100vh - 5px)'}}}>
      <Box sx={{p: 2}}>
        <LogoIcon />
        <Box>
          <List>
            {Menuitems.map((item, index) => {
              // {/********SubHeader**********/}
              if (item.subheader) {
                return (
                  <li key={index.toString()}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      sx={{my: 2, mt: 4, opacity: '0.4'}}
                    >
                      {item.subheader}
                    </Typography>
                  </li>
                );
                // {/********If Sub Menu**********/}
                /* eslint no-else-return: "off" */
              }
              //  else if (item?.children) {
              //   return (
              //     <React.Fragment key={item.title}>
              //       <ListItem
              //         button
              //         component="li"
              //         onClick={() => handleClick(index)}
              //         selected={pathWithoutLastPart === item.href}
              //         sx={{
              //           mb: 1,
              //           ...(pathWithoutLastPart === item.href && {
              //             color: 'white',
              //             backgroundColor: theme => `${theme.palette.primary.main}!important`,
              //           }),
              //         }}
              //       >
              //         <ListItemIcon
              //           sx={{
              //             ...(pathWithoutLastPart === item.href && {
              //               color: 'white',
              //             }),
              //           }}
              //         >
              //           <FeatherIcon icon={item.icon} width="20" height="20" />
              //         </ListItemIcon>
              //         <ListItemText>{item.title}</ListItemText>
              //         {Boolean(index) === open || pathWithoutLastPart === item.href ? (
              //           <FeatherIcon icon="chevron-down" size="16" />
              //         ) : (
              //           <FeatherIcon icon="chevron-right" size="16" />
              //         )}
              //       </ListItem>
              //       <Collapse in={Boolean(index) === open} timeout="auto" unmountOnExit>
              //         <List component="li" disablePadding>
              //           {item.children.map(child => {
              //             return (
              //               <ListItem
              //                 key={child.title}
              //                 button
              //                 component={NavLink}
              //                 to={child.href}
              //                 onClick={onSidebarClose}
              //                 selected={pathDirect === child.href}
              //                 sx={{
              //                   mb: 1,
              //                   ...(pathDirect === child.href && {
              //                     color: 'primary.main',
              //                     backgroundColor: 'transparent!important',
              //                   }),
              //                 }}
              //               >
              //                 <ListItemIcon
              //                   sx={{
              //                     svg: {width: '14px', marginLeft: '3px'},
              //                     ...(pathDirect === child.href && {
              //                       color: 'primary.main',
              //                     }),
              //                   }}
              //                 >
              //                   <FeatherIcon icon={child.icon} width="20" height="20" />
              //                 </ListItemIcon>
              //                 <ListItemText>{child.title}</ListItemText>
              //               </ListItem>
              //             );
              //           })}
              //         </List>
              //       </Collapse>
              //     </React.Fragment>
              //   );
              //   // {/********If Sub No Menu**********/}
              // }
              else {
                // const isSelected = pathDirect.split('/')[3] === item.href.split('/')[3];
                return (
                  <List component="li" disablePadding key={index.toString()}>
                    <LinkWithParams
                      to={item.href}
                      params={{restaurantId: restaurantId}}
                      className={classes.link}
                    >
                      <ListItem
                        onClick={() => handleClick(index)}
                        button={true}
                        component={'li'}
                        // to={item.href}
                        selected={pathDirect.split('/')[3] === item.href.split('/')[3]}
                        sx={{
                          mb: 1,
                          ...(pathDirect.split('/')[3] === item.href.split('/')[3] && {
                            color: 'white',
                            backgroundColor: theme => `${theme.palette.primary.main}!important`,
                          }),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ...(pathDirect.split('/')[3] === item.href.split('/')[3] && {
                              color: 'white',
                            }),
                          }}
                        >
                          <FeatherIcon icon={item.icon} width="20" height="20" />
                        </ListItemIcon>
                        <ListItemText onClick={onSidebarClose}>{item.title}</ListItemText>
                      </ListItem>
                    </LinkWithParams>
                  </List>
                );
              }
            })}
          </List>
        </Box>
        {/* <Buynow /> */}
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
            border: '0 !important',
            boxShadow: '0px 7px 30px 0px rgb(113 122 131 / 11%)',
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
