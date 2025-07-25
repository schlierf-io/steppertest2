import type { Meta, StoryObj } from '@storybook/angular';
import { SimpleStepperComponent } from './simple-stepper.component';

const meta: Meta<SimpleStepperComponent> = {
  title: 'Components/Navigation/Simple Stepper',
  component: SimpleStepperComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A simplified stepper component that demonstrates basic Angular Material Stepper functionality.

This component features:
- Three customizable steps with configurable content
- Linear and non-linear navigation options
- Horizontal and vertical orientations
- Step completion tracking
- Reset functionality
- Fully customizable step labels, titles, and content

Perfect for simple workflows, onboarding processes, or tutorial sequences.
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Stepper orientation',
    },
    linear: {
      control: 'boolean',
      description: 'Whether steps must be completed in order',
    },
    step1Label: {
      control: 'text',
      description: 'Label for the first step',
    },
    step1Title: {
      control: 'text',
      description: 'Title for the first step',
    },
    step1Content: {
      control: 'text',
      description: 'Content text for the first step',
    },
    step1ButtonText: {
      control: 'text',
      description: 'Button text for the first step',
    },
    step2Label: {
      control: 'text',
      description: 'Label for the second step',
    },
    step2Title: {
      control: 'text',
      description: 'Title for the second step',
    },
    step2Content: {
      control: 'text',
      description: 'Content text for the second step',
    },
    step2ButtonText: {
      control: 'text',
      description: 'Button text for the second step',
    },
    step3Label: {
      control: 'text',
      description: 'Label for the third step',
    },
    step3Title: {
      control: 'text',
      description: 'Title for the third step',
    },
    step3Content: {
      control: 'text',
      description: 'Content text for the third step',
    },
    step3ButtonText: {
      control: 'text',
      description: 'Button text for the third step',
    },
  },
};

export default meta;
type Story = StoryObj<SimpleStepperComponent>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    step1Label: 'Step 1',
    step1Title: 'Getting Started',
    step1Content: 'Welcome to the first step of our process. This is where you begin your journey.',
    step1ButtonText: 'Continue',
    step2Label: 'Step 2',
    step2Title: 'Configuration',
    step2Content: 'In this step, you can configure your preferences and settings.',
    step2ButtonText: 'Next',
    step3Label: 'Step 3',
    step3Title: 'Completion',
    step3Content: 'Congratulations! You have reached the final step. Review and complete your process.',
    step3ButtonText: 'Finish',
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

export const NonLinear: Story = {
  args: {
    ...Default.args,
    linear: false,
  },
};

export const OnboardingFlow: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    step1Label: 'Welcome',
    step1Title: 'Welcome to Our Platform',
    step1Content: 'Thank you for joining us! Let\'s get you set up with a quick tour of the main features.',
    step1ButtonText: 'Get Started',
    step2Label: 'Setup',
    step2Title: 'Account Setup',
    step2Content: 'Configure your account preferences and personalize your experience.',
    step2ButtonText: 'Continue Setup',
    step3Label: 'Ready',
    step3Title: 'You\'re All Set!',
    step3Content: 'Your account is now configured and ready to use. Start exploring our features!',
    step3ButtonText: 'Start Using',
  },
};

export const TutorialSteps: Story = {
  args: {
    orientation: 'vertical',
    linear: false,
    step1Label: 'Learn',
    step1Title: 'Learn the Basics',
    step1Content: 'Understand the fundamental concepts and core features of the application.',
    step1ButtonText: 'I Understand',
    step2Label: 'Practice',
    step2Title: 'Practice with Examples',
    step2Content: 'Try out the features with guided examples and interactive tutorials.',
    step2ButtonText: 'Try Examples',
    step3Label: 'Master',
    step3Title: 'Master Advanced Features',
    step3Content: 'Explore advanced functionality and become a power user.',
    step3ButtonText: 'Complete Tutorial',
  },
};

export const ShortLabels: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    step1Label: 'Start',
    step1Title: 'Begin Process',
    step1Content: 'This is the starting point.',
    step1ButtonText: 'Go',
    step2Label: 'Work',
    step2Title: 'Do the Work',
    step2Content: 'Complete the main task.',
    step2ButtonText: 'Done',
    step3Label: 'End',
    step3Title: 'Finish Up',
    step3Content: 'All finished!',
    step3ButtonText: 'Complete',
  },
};

export const InstallationWizard: Story = {
  args: {
    orientation: 'horizontal',
    linear: true,
    step1Label: 'Download',
    step1Title: 'Download Software',
    step1Content: 'Download the installation package from our secure servers.',
    step1ButtonText: 'Downloaded',
    step2Label: 'Install',
    step2Title: 'Install Application',
    step2Content: 'Run the installer and follow the on-screen instructions.',
    step2ButtonText: 'Installed',
    step3Label: 'Launch',
    step3Title: 'Launch & Enjoy',
    step3Content: 'Your software is ready! Launch the application and start using it.',
    step3ButtonText: 'Launch App',
  },
};
