import React, {ReactElement, ReactNode, useCallback, useEffect} from 'react';
import clsx from 'clsx';
import {Close} from '@mui/icons-material';
import {createGlobalState} from 'react-hooks-global-state';
import {Box, Typography, Button, SnackbarOrigin} from '@mui/material';
import {useStyles} from './styles';
import {ProviderContext, SnackbarProvider, VariantType, useSnackbar} from 'notistack';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SuccessOutlined from './assets/checked.svg';
import CustomFeedback from './FeedBackComp';

type Types = 'primary' | 'secondary' | 'dark' | 'light' | 'warning' | 'success' | 'danger';

interface Alert {
  type?: Types;
  message: string;
  icon?: React.ReactElement | React.FC;
  action?: {
    text: string;
    onClick: () => void;
  };
}

export interface State extends SnackbarOrigin {
  open: boolean;
}

type GlobalState = {
  alerts: Alert[];
  notifications: Alert[];
  feedback: Alert[];
};

const {useGlobalState, setGlobalState} = createGlobalState<GlobalState>({
  alerts: [],
  notifications: [],
  feedback: [],
});

export const addAlert = (alert: Alert) =>
  setGlobalState('alerts', (prevAlerts: any) => [alert, ...prevAlerts]);

export const addNotification = (alert: Alert) =>
  setGlobalState('notifications', (prevAlerts: any) => [alert, ...prevAlerts]);

export const addFeedback = (alert: Alert) =>
  setGlobalState('feedback', (prevAlerts: any) => [alert, ...prevAlerts]);

export function Alerts() {
  const classes = useStyles();
  const [alerts] = useGlobalState('alerts');

  return alerts.length ? (
    <Box className={clsx(classes.alert, alerts[0].type)}>
      <Typography variant="subtitle2">{alerts[0].message}</Typography>
      <Close />
    </Box>
  ) : null;
}

export function Notifications() {
  const classes = useStyles();
  const [notifications] = useGlobalState('notifications');

  return notifications.length ? (
    <Box className={clsx(classes.notification, notifications[0].type)}>
      <Typography variant="subtitle2">{notifications[0].message}</Typography>
      <Box display="flex" alignItems="center">
        <Button className={clsx('btn', 'secondaryAction')} size="small">
          cancel
        </Button>
        <Button className={clsx('btn', 'primaryAction')} size="small">
          action
        </Button>
      </Box>
    </Box>
  ) : null;
}

const variantsMap: {[T in Types]: VariantType} = {
  primary: 'default',
  danger: 'error',
  warning: 'warning',
  success: 'success',
  secondary: 'info',
  dark: 'default',
  light: 'default',
};

export function FeedbackConsumer(props: {children: React.ReactNode}) {
  const {children} = props;
  const [feedback, setFeedback] = useGlobalState('feedback');
  // const notistackRef = React.createRef<ProviderContext | null>();
  const {closeSnackbar, enqueueSnackbar} = useSnackbar();
  const styles = useStyles();

  const onClickDismiss = useCallback(
    (key: string | number) => () => {
      // console.log('==== notistackRef ....', notistackRef?.current);
      closeSnackbar(key);
    },
    [closeSnackbar],
  );

  useEffect(() => {
    const [feedbackMessage] = feedback;
    if (feedbackMessage) {
      enqueueSnackbar(feedbackMessage.message, {
        variant: feedbackMessage.type && variantsMap[feedbackMessage.type],
        // persist: true,
        content: key => {
          const FeedbackIcon = feedbackMessage.icon;
          const Icon = React.isValidElement(FeedbackIcon) ? (
            FeedbackIcon
          ) : FeedbackIcon ? (
            <FeedbackIcon />
          ) : undefined;
          return (
            <div>
              {/* <CervelloTheme> */}
              <CustomFeedback
                className={styles.actionButton}
                onClose={() => {
                  closeSnackbar(key);
                }}
                text={feedbackMessage.message}
                icon={Icon}
                type={
                  feedbackMessage.type === 'secondary'
                    ? 'info'
                    : feedbackMessage.type === 'danger'
                    ? 'error'
                    : 'success'
                }
                action={feedbackMessage.action}
              />
              {/* </CervelloTheme> */}
            </div>
          );
        },
      });
      setFeedback([]);
    }
  }, [feedback, onClickDismiss, setFeedback, enqueueSnackbar, closeSnackbar]);

  return <div>{children}</div>;
}

export function Feedback(props: {children: React.ReactNode}) {
  const {children} = props;
  // const notistackRef = React.createRef<ProviderContext | null>();
  const classes = useStyles();

  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      iconVariant={{
        success: <img src={SuccessOutlined} width={16} height={16} className={classes.mr} />,
        error: <ErrorOutlineOutlinedIcon className={classes.mr} />,
      }}

      // ref={notistackRef}
      // innerRef={notistackRef}
      // action={barKey => <Close onClick={() => onClickDismiss(barKey)} />}
      // content={(key, message) => <div>{message}</div>}
    >
      <FeedbackConsumer>{children}</FeedbackConsumer>
    </SnackbarProvider>
  );
}
