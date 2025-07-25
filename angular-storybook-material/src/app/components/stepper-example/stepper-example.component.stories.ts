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
# Angular Material Stepper Komponente

Der Angular Material Stepper bietet einen Assistent-ähnlichen Workflow, indem er Inhalte in logische Schritte unterteilt. Diese Komponente ist perfekt für mehrstufige Formulare, Onboarding-Flows und alle Prozesse, die sequenzielle Benutzereingaben erfordern.

## Hauptmerkmale

### 🔄 Mehrere Navigationsmodi
- **Linear**: Benutzer müssen jeden Schritt der Reihe nach abschließen
- **Nicht-linear**: Benutzer können frei zwischen Schritten navigieren

### ✏️ Bearbeitbare Schritte
- Benutzern erlauben, abgeschlossene Schritte zu bearbeiten
- Abgeschlossene Schritte sperren, um Änderungen zu verhindern

### 📱 Responsive Design
- Horizontales Layout für Desktop
- Vertikales Layout für mobile Geräte
- Flexible Label-Positionierung

### ✅ Formular-Validierung
- Echtzeit-Validierungs-Feedback
- Pflichtfeld-Validierung
- E-Mail-Format-Validierung
- Fehlermeldungen für jedes Feld

### 📋 Überprüfung & Absenden
- Zusammenfassung aller eingegebenen Daten
- Ein-Klick-Übermittlung
- Zurücksetzen-Funktionalität

## Formular-Struktur

Der Stepper umfasst vier Hauptabschnitte:

1. **Persönliche Informationen**: Vorname, Nachname (beide erforderlich)
2. **Kontaktinformationen**: E-Mail (validiertes Format), Telefonnummer (beide erforderlich)
3. **Adressinformationen**: Straße und Hausnummer, Stadt, Postleitzahl (alle erforderlich)
4. **Überprüfung & Absenden**: Zusammenfassung mit Absenden- und Zurücksetzen-Optionen

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
        story: 'Horizontaler Stepper mit Labels, die unterhalb der Schritt-Icons positioniert sind.'
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
        story: 'Vertikaler Stepper mit nicht-linearer Navigation, die freie Bewegung zwischen Schritten ermöglicht.'
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
        story: 'Vertikaler Stepper, optimiert für mobile Geräte mit responsiver Formular-Layout.'
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
        story: 'Strikter Workflow-Stepper - lineare Navigation ohne Möglichkeit zum Bearbeiten abgeschlossener Schritte.'
      },
    },
  },
};
