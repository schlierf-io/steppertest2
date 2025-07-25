# Angular Material Storybook Project

This project demonstrates how to set up Storybook.js with Angular Material components. It includes examples of various Angular Material components with their corresponding Storybook stories.

## Features

- ✅ Angular 20+ with standalone components
- ✅ Angular Material 20+ with Indigo-Pink theme
- ✅ Storybook 9+ with Angular support
- ✅ Bundled Roboto fonts and Material Icons for better performance
- ✅ Example components with comprehensive stories

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run Storybook:
```bash
npm run storybook
```

3. Open your browser to `http://localhost:6006`

### Build Storybook for Production

```bash
npm run build-storybook
```

## Project Structure

```
src/app/components/
├── nav-bar/                 # Navigation toolbar component
│   ├── nav-bar.component.ts
│   └── nav-bar.component.stories.ts
├── button-showcase/         # Button examples component
│   ├── button-showcase.component.ts
│   └── button-showcase.component.stories.ts
├── card-example/           # Card component example
│   ├── card-example.component.ts
│   └── card-example.component.stories.ts
├── stepper-example/        # Advanced stepper with forms
│   ├── stepper-example.component.ts
│   └── stepper-example.component.stories.ts
└── simple-stepper/         # Basic stepper component
    ├── simple-stepper.component.ts
    └── simple-stepper.component.stories.ts
```

## Configuration

### Angular Material Setup

The project includes:
- **Theme**: Indigo-Pink prebuilt theme
- **Typography**: Roboto font family (300, 400, 500, 700 weights)
- **Icons**: Material Icons font
- **Animations**: Enabled

### Storybook Configuration

Key configuration in `angular.json`:

```json
{
  "storybook": {
    "builder": "@storybook/angular:start-storybook",
    "options": {
      "styles": [
        "@angular/material/prebuilt-themes/indigo-pink.css",
        "@fontsource/roboto/300.css",
        "@fontsource/roboto/400.css", 
        "@fontsource/roboto/500.css",
        "@fontsource/roboto/700.css",
        "@fontsource/material-icons",
        "src/styles.scss"
      ]
    }
  }
}
```

## Example Components

### 1. Navigation Bar (`nav-bar`)
- Demonstrates `MatToolbarModule`, `MatButtonModule`, `MatIconModule`
- Shows primary color theming
- Includes responsive layout with spacer

### 2. Button Showcase (`button-showcase`)
- Comprehensive button examples: basic, raised, stroked, flat
- Icon buttons: icon-button, fab, mini-fab
- Buttons with icons
- Color variants: primary, accent, warn
- Disabled state support

### 3. Card Example (`card-example`)
- Demonstrates `MatCardModule` with header, content, actions
- Image support with `mat-card-image`
- Avatar placeholder in header
- Customizable content and actions

### 4. Stepper Example (`stepper-example`)
- Advanced multi-step form with validation
- Demonstrates `MatStepperModule`, `MatFormFieldModule`, `MatInputModule`
- Linear and non-linear navigation
- Horizontal and vertical orientations
- Form validation with error messages
- Review step with data summary
- Reset functionality

### 5. Simple Stepper (`simple-stepper`)
- Basic stepper for simple workflows
- Customizable step content and labels
- Step completion tracking
- Perfect for onboarding or tutorials

## Writing Stories

### Standalone Components

For standalone Angular components, simply import the component:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { MyComponent } from './my-component.component';

const meta: Meta<MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
};

export default meta;
type Story = StoryObj<MyComponent>;

export const Default: Story = {
  args: {
    // component inputs
  },
};
```

### Module Components

For module-based components, use `moduleMetadata`:

```typescript
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<MyComponent> = {
  title: 'Components/MyComponent',
  decorators: [
    moduleMetadata({
      declarations: [MyComponent],
      imports: [MatButtonModule],
    }),
  ],
};
```

## Performance Optimizations

- **Bundled fonts**: Fonts are bundled with the application instead of loaded from CDN
- **Offline support**: Stories work offline since fonts are local
- **Consistent snapshots**: No font loading delays in visual regression tests

## Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm start` - Start Angular development server
- `npm run build` - Build Angular application
- `npm test` - Run unit tests

## Learn More

- [Storybook for Angular](https://storybook.js.org/docs/get-started/frameworks/angular)
- [Angular Material](https://material.angular.io/)
- [Angular Material + Storybook Recipe](https://storybook.js.org/recipes/@angular/material)
