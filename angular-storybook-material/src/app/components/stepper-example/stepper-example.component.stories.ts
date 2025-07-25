import type { Meta, StoryObj } from '@storybook/angular';
import { StepperExampleComponent } from './stepper-example.component';

const meta: Meta<StepperExampleComponent> = {
  title: 'Components/Navigation/Stepper',
  component: StepperExampleComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Angular Material Stepper Component

The Angular Material Stepper provides a wizard-like workflow by dividing content into logical steps. This component is perfect for multi-step forms, onboarding flows, and any process that requires sequential user input.

## Key Features

### 🔄 Multiple Navigation Modes
- **Linear**: Users must complete each step in order
- **Non-linear**: Users can navigate freely between steps

### ✏️ Editable Steps
- Allow users to return and modify completed steps
- Lock completed steps to prevent changes

### 📱 Responsive Design
- Horizontal layout for desktop
- Vertical layout optimized for mobile
- Flexible label positioning

### ✅ Form Validation
- Real-time validation feedback
- Required field validation
- Email format validation
- Error messages for each field

### 📋 Review & Submit
- Summary of all entered data
- One-click submission
- Reset functionality

## Form Structure

The stepper includes four main sections:

1. **Personal Information**: First Name, Last Name (both required)
2. **Contact Information**: Email (validated format), Phone Number (both required)
3. **Address Information**: Street Address, City, ZIP Code (all required)
4. **Review & Submit**: Summary with submit and reset options

## Implementation Details

The component uses Angular Reactive Forms with built-in validators:

\`\`\`typescript
// Personal Information Form
this.firstFormGroup = this.formBuilder.group({
  firstNameCtrl: ['', Validators.required],
  lastNameCtrl: ['', Validators.required],
});

// Contact Information Form
this.secondFormGroup = this.formBuilder.group({
  emailCtrl: ['', [Validators.required, Validators.email]],
  phoneCtrl: ['', Validators.required],
});
\`\`\`

## Best Practices

### When to Use Linear vs Non-Linear

- **Use Linear** for:
  - Multi-step forms where data depends on previous steps
  - Onboarding flows with sequential information
  - Processes that must be completed in order

- **Use Non-Linear** for:
  - Forms where steps are independent
  - When users need to review/edit multiple sections
  - Configuration wizards with optional steps

### Accessibility Considerations

- Each step has a descriptive label
- Form validation provides clear error messages
- Keyboard navigation is fully supported
- Screen reader friendly with proper ARIA labels

### Mobile Optimization

For mobile devices, consider:
- Using vertical orientation
- Larger touch targets for navigation buttons
- Simplified form layouts
- Progressive disclosure of information

## Browser Support

This component supports all modern browsers that support Angular Material:
- Chrome 70+
- Firefox 63+
- Safari 12+
- Edge 79+
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
