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

### Wann Linear vs Nicht-Linear verwenden

- **Linear verwenden** für:
  - Mehrstufige Formulare, bei denen die Daten von vorherigen Schritten abhängen
  - Onboarding-Flows mit sequenziellen Informationen
  - Prozesse, die der Reihe nach abgeschlossen werden müssen

- **Nicht-linear verwenden** für:
  - Formulare, bei denen die Schritte unabhängig sind
  - Wenn Benutzer mehrere Abschnitte überprüfen/bearbeiten müssen
  - Konfigurations-Assistenten mit optionalen Schritten

### Barrierefreiheit

- Jeder Schritt hat eine aussagekräftige Beschriftung
- Formular-Validierung liefert klare Fehlermeldungen
- Vollständige Tastatur-Navigation wird unterstützt
- Screenreader-freundlich mit korrekten ARIA-Labels

### Mobile Optimierung

Für mobile Geräte sollten Sie berücksichtigen:
- Verwendung vertikaler Ausrichtung
- Größere Touch-Ziele für Navigations-Buttons
- Vereinfachte Formular-Layouts
- Progressive Offenlegung von Informationen

## Browser-Unterstützung

Diese Komponente unterstützt alle modernen Browser, die Angular Material unterstützen:
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
      description: 'Ob der Stepper linear ist (erfordert das Abschließen der vorherigen Schritte)',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    editable: {
      control: 'boolean',
      description: 'Ob abgeschlossene Schritte bearbeitet werden können',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    labelPosition: {
      control: 'select',
      options: ['bottom', 'end'],
      description: 'Position der Schritt-Labels (wird nur auf horizontaler Ausrichtung angewendet)',
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
        story: 'Standard horizontaler Stepper mit linearer Navigation und bearbeitbaren Schritten.'
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
        story: 'Vertikales Stepper-Layout, nützlich für mobile Interfaces oder wenn Sie mehr Inhalt pro Schritt haben.'
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
        story: 'Nicht-linearer Stepper ermöglicht Benutzern die Navigation zu jedem Schritt ohne vorherige Abschlüsse.'
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
        story: 'Nicht-bearbeitbarer Stepper verhindert, dass Benutzer zu abgeschlossenen Schritten zurückkehren können.',
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
