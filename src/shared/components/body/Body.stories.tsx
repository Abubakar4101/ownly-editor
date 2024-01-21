import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import Body, {Props} from './';

export default {
  title: 'Components/Typography/body',
  component: Body,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'caption', 'button'],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: [
          'primary',
          'secondary',
          'textPrimary',
          'textSecondary',
          'error',
          'initial',
          'inherit',
        ],
      },
    },
  },
} as Meta;

const Template: Story<Props> = args => <Body {...args} />;

export const body = Template.bind({});
body.args = {
  variant: 'body1',
  children: 'Hi there',
  color: 'primary',
  component: 'span',
  emphasis: 0.5,
};
