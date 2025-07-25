import type { Meta, StoryObj } from '@storybook/angular';
import { StepperExampleComponent } from './stepper-example.component';

const meta: Meta<StepperExampleComponent> = {
  title: 'Components/Navigation/Stepper',
  component: StepperExampleComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Angular Material Stepper provides a wizard-like workflow by dividing content into logical steps.

This example demonstrates:
- Multi-step form with validation
- Linear and non-linear navigation
- Horizontal and vertical orientations
- Editable and non-editable steps
- Form validation with error messages
- Review step with summary
- Reset functionality

The stepper includes a complete user registration flow with personal information, contact details, address, and review steps.
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the stepper',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    linear: {
      control: 'boolean',
      description: 'Whether the stepper is linear (requires completing previous steps)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    editable: {
      control: 'boolean',
      description: 'Whether completed steps can be edited',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['bottom', 'end'],
      description: 'Position of step labels (only applies to horizontal orientation)',
      table: {
        defaultValue: { summary: 'end' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<StepperExampleComponent>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    editable: true,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal stepper with linear navigation and editable steps.',
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    linear: true,
    editable: true,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical stepper layout, useful for mobile interfaces or when you have more content in each step.',
      },
    },
  },
};

export const NonLinear: Story = {
  args: {
    orientation: 'horizontal',
    linear: false,
    editable: true,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Non-linear stepper allows users to navigate to any step without completing previous ones.',
      },
    },
  },
};

export const NonEditable: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    editable: false,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Non-editable stepper prevents users from going back to modify completed steps.',
      },
    },
  },
};

export const LabelsAtBottom: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    editable: true,
    labelPosition: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stepper with labels positioned at the bottom of step icons.',
      },
    },
  },
};

export const VerticalNonLinear: Story = {
  args: {
    orientation: 'vertical',
    linear: false,
    editable: true,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical stepper with non-linear navigation, allowing free movement between steps.',
      },
    },
  },
};

export const MobileOptimized: Story = {
  args: {
    orientation: 'vertical',
    linear: true,
    editable: true,
    labelPosition: 'end',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Vertical stepper optimized for mobile devices with responsive form layout.',
      },
    },
  },
};

export const StrictWorkflow: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    editable: false,
    labelPosition: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Strict workflow stepper - linear navigation with no editing of completed steps.',
      },
    },
  },
};
