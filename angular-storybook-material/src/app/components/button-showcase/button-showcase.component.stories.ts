import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonShowcaseComponent } from './button-showcase.component';

const meta: Meta<ButtonShowcaseComponent> = {
  title: 'Components/Buttons/Button Showcase',
  component: ButtonShowcaseComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the button showcase',
    },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn', ''],
      description: 'Color theme for the buttons',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether buttons should be disabled',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonShowcaseComponent>;

export const Default: Story = {
  args: {
    title: 'Angular Material Buttons',
    color: 'primary',
    disabled: false,
  },
};

export const AccentColor: Story = {
  args: {
    title: 'Accent Color Buttons',
    color: 'accent',
    disabled: false,
  },
};

export const WarnColor: Story = {
  args: {
    title: 'Warning Color Buttons',
    color: 'warn',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Buttons',
    color: 'primary',
    disabled: true,
  },
};

export const NoColor: Story = {
  args: {
    title: 'Default Color Buttons',
    color: '',
    disabled: false,
  },
};
