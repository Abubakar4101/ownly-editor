import React, {useMemo} from 'react';
import {Box, Checkbox, FormControlLabel, Button} from '@mui/material';
import clsx from 'clsx';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';

export interface ActionButton {
  name: string;
  icon: JSX.Element;
  type: string;
  handler: Function;
  disabled?: boolean;
}

interface Props {
  handleSelectAll?: (selectAll: boolean) => void;
  actions: ActionButton[];
  selected?: number;
  count?: number;
  color?: 'primary' | 'secondary';
}

function ListActions(props: Props) {
  const {handleSelectAll, actions, selected, count, color} = props;
  const classes = useStyles();
  const {t} = useTranslation();
  const selectedDevices = useMemo(() => selected || 0, [selected]);
  const total = useMemo(() => count || 0, [count]);

  return (
    <Box display="flex" ml={2} mb={0} alignItems="center" pr={5} justifyContent="space-between">
      {handleSelectAll && (
        <div className={classes.listTitle}>
          <FormControlLabel
            control={
              <Checkbox
                indeterminate={selectedDevices !== 0 && selectedDevices !== total}
                checked={selectedDevices !== 0 && selectedDevices === total}
                name="selectAll"
                onChange={event => handleSelectAll && handleSelectAll(event.target.checked)}
                color={'primary'}
              />
            }
            label={`Select All`}
            color="primary"
          />
        </div>
      )}
      <Box>
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="contained"
            startIcon={action.icon}
            size="medium"
            disableElevation
            disabled={action.disabled}
            className={clsx(classes.actionButton, action.type, 'lower', 'near')}
            onClick={() => action.handler(true)}
            color={color}
          >
            {action.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default ListActions;
