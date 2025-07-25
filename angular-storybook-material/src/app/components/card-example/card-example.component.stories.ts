import type { Meta, StoryObj } from '@storybook/angular';
import { CardExampleComponent } from './card-example.component';

const meta: Meta<CardExampleComponent> = {
  title: 'Components/Layout/Card',
  component: CardExampleComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
    },
    content: {
      control: 'text',
      description: 'Card content text',
    },
    imageUrl: {
      control: 'text',
      description: 'URL for the card image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the card image',
    },
    primaryAction: {
      control: 'text',
      description: 'Text for the primary action button',
    },
    secondaryAction: {
      control: 'text',
      description: 'Text for the secondary action button',
    },
    buttonColor: {
      control: 'select',
      options: ['primary', 'accent', 'warn', ''],
      description: 'Color theme for the action buttons',
    },
  },
};

export default meta;
type Story = StoryObj<CardExampleComponent>;

export const Default: Story = {
  args: {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    imageAlt: 'Photo of a Shiba Inu',
    primaryAction: 'LIKE',
    secondaryAction: 'SHARE',
    buttonColor: 'primary',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Simple Card',
    subtitle: 'No Image',
    content: 'This is a card example without an image. It demonstrates how the card looks with just text content.',
    imageUrl: '',
    imageAlt: '',
    primaryAction: 'ACTION',
    secondaryAction: 'CANCEL',
    buttonColor: 'accent',
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Custom Card',
    subtitle: 'Customized Example',
    content: 'This card demonstrates custom content with different text and styling options.',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    imageAlt: 'Another Shiba Inu photo',
    primaryAction: 'SAVE',
    secondaryAction: 'DELETE',
    buttonColor: 'warn',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    subtitle: 'Extended Text Example',
    content: 'This is an example of a card with much longer content to demonstrate how the card handles extended text. The content can wrap to multiple lines and the card will adjust its height accordingly. This is useful for testing responsive behavior and ensuring the card looks good with varying amounts of content.',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    imageAlt: 'Shiba Inu in nature',
    primaryAction: 'READ MORE',
    secondaryAction: 'BOOKMARK',
    buttonColor: 'primary',
  },
};
