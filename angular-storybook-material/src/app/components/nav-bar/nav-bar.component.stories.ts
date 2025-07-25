import type { Meta, StoryObj } from '@storybook/angular';
import { NavBarComponent } from './nav-bar.component';

const meta: Meta<NavBarComponent> = {
  title: 'Components/Navigation/Toolbar',
  component: NavBarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: 'text',
      description: 'The title displayed in the navigation bar',
    },
  },
};

export default meta;
type Story = StoryObj<NavBarComponent>;

export const Default: Story = {
  args: {
    pageTitle: 'My Application',
  },
};

export const LongTitle: Story = {
  args: {
    pageTitle: 'My Very Long Application Title That Might Wrap',
  },
};

export const ShortTitle: Story = {
  args: {
    pageTitle: 'App',
  },
};

export const NoTitle: Story = {
  args: {
    pageTitle: '',
  },
};
