import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {}
