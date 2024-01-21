import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  rightArcButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    '&:hover $selectedText': {
      display: 'block',
    },
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorButton: {
    minWidth: '50px !important',
    minHeight: '50px !important',
    opacitly: '0',
    borderRadius: '15px !important',
    border: '2px solid #8783E1 !important',
    padding: '0px !important',
    lineHeight: '0px !important',
    backgroundColor: '#282729 !important',
    '&.selected': {
      boxShadow: '0px 0px 5px 5px #6561C2 !important',
      border: '4px solid #8783E1',
    },
    '&:hover': {
      boxShadow: '0px 0px 15px 5px #6561C2 !important',
      border: '2px solid #8783E1',
    },

    [theme.breakpoints.down(1367)]: {
      minWidth: '40px !important',
      minHeight: '40px !important',
    },
    '@media (min-height: 901px) and (max-height: 3000px)': {
      minWidth: '70px !important',
      minHeight: '70px !important',
      borderRadius: '25px !important',
    },
  },
  selectedText: {
    display: 'none',
    color: 'white',
    fontSize: '12px',
  },
  // secondaryColor: {
  //   color: ` ${theme.palette.secondary}`,
  // },
  animatedButton: {
    animationName: '$fadeIn', // Name of the animation keyframe
    animationDuration: '0.2s', // Duration of the animation
    animationTimingFunction: 'ease-in', // Timing function for the animation
    animationFillMode: 'forwards', // Keep the final state of the animation
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translate(-10px, -40px) ease-in-out',
    },
    to: {
      opacity: 1,
      transform: 'translate(0px, 0px) ease-in-out',
    },
  },
}));
