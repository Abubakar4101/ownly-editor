import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  colorButtonContainer: {
    alignItems: 'center',
    gap: '15px',
  },
  selectedText: {
    color: 'white',
    fontSize: '12px',
  },
  colorButton: {
    minWidth: '50px !important',
    minHeight: '50px !important',
    borderRadius: '15px !important',
    opacity: '0',
    '&.selected': {
      boxShadow: '0px 0px 5px 5px #8cca70 !important',
      border: '2px solid #56AC65',
    },
  },
  animatedButton: {
    animationName: '$fadeIn', // Name of the animation keyframe
    animationDuration: '0.1s', // Duration of the animation
    animationTimingFunction: 'ease-in', // Timing function for the animation
    animationFillMode: 'forwards', // Keep the final state of the animation
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translate(10px, 10px) ease-in-out'
    },
    to: {
      opacity: 1,
      transform: 'translate(0px, 0px) ease-in-out'
    },
  },
}));
