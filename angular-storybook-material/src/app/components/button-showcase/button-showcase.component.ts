import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <div class="button-container">
      <h3>{{ title }}</h3>
      
      <div class="button-group">
        <h4>Basic Buttons</h4>
        <button mat-button [color]="color" [disabled]="disabled">Basic</button>
        <button mat-raised-button [color]="color" [disabled]="disabled">Raised</button>
        <button mat-stroked-button [color]="color" [disabled]="disabled">Stroked</button>
        <button mat-flat-button [color]="color" [disabled]="disabled">Flat</button>
      </div>

      <div class="button-group">
        <h4>Icon Buttons</h4>
        <button mat-icon-button [color]="color" [disabled]="disabled">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-fab [color]="color" [disabled]="disabled">
          <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab [color]="color" [disabled]="disabled">
          <mat-icon>edit</mat-icon>
        </button>
      </div>

      <div class="button-group">
        <h4>Buttons with Icons</h4>
        <button mat-raised-button [color]="color" [disabled]="disabled">
          <mat-icon>save</mat-icon>
          Save
        </button>
        <button mat-stroked-button [color]="color" [disabled]="disabled">
          <mat-icon>delete</mat-icon>
          Delete
        </button>
      </div>
    </div>
  `,
  styles: [`
    .button-container {
      padding: 16px;
      max-width: 600px;
    }
    
    .button-group {
      margin-bottom: 24px;
    }
    
    .button-group h4 {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.87);
    }
    
    .button-group button {
      margin: 4px 8px 4px 0;
    }
    
    h3 {
      margin-bottom: 24px;
      color: rgba(0, 0, 0, 0.87);
    }
  `],
})
export class ButtonShowcaseComponent {
  @Input() title: string = 'Angular Material Buttons';
  @Input() color: 'primary' | 'accent' | 'warn' | '' = 'primary';
  @Input() disabled: boolean = false;
}
