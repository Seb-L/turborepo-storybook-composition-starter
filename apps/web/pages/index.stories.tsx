import React from 'react'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import IndexPage from '.';

export default {
  title: 'Pages/Index',
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>

export const Default: ComponentStoryObj<typeof IndexPage> = {}
