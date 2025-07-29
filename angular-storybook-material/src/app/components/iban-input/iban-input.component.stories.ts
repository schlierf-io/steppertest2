import type { Meta, StoryObj } from '@storybook/angular';
import { IbanInputComponent } from './iban-input';

const meta: Meta<IbanInputComponent> = {
  title: 'Components/Input/IBAN',
  component: IbanInputComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the IBAN input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<IbanInputComponent>;

export const Default: Story = {
  args: {
    label: 'IBAN',
    placeholder: 'DE89 3704 0044 0532 0130 00',
    required: false,
    disabled: false,
  },
};

export const Required: Story = {
  args: {
    label: 'IBAN (Required)',
    placeholder: 'DE89 3704 0044 0532 0130 00',
    required: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'IBAN',
    placeholder: 'DE89 3704 0044 0532 0130 00',
    required: false,
    disabled: true,
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Bank Account Number (IBAN)',
    placeholder: 'DE89 3704 0044 0532 0130 00',
    required: false,
    disabled: false,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: 'IBAN',
    placeholder: 'Enter your international bank account number',
    required: false,
    disabled: false,
  },
};

export const RequiredAndDisabled: Story = {
  args: {
    label: 'IBAN (Required)',
    placeholder: 'DE89 3704 0044 0532 0130 00',
    required: true,
    disabled: true,
  },
};
