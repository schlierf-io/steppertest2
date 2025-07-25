import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simple-stepper',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatIconModule],
  template: `
    <mat-stepper 
      [orientation]="orientation" 
      [linear]="linear"
      #stepper>
      
      <mat-step [completed]="step1Completed">
        <ng-template matStepLabel>{{ step1Label }}</ng-template>
        <div class="step-content">
          <h3>{{ step1Title }}</h3>
          <p>{{ step1Content }}</p>
          <div class="button-row">
            <button mat-raised-button color="primary" 
                    (click)="markStepCompleted(1)" 
                    matStepperNext>
              {{ step1ButtonText }}
            </button>
          </div>
        </div>
      </mat-step>

      <mat-step [completed]="step2Completed">
        <ng-template matStepLabel>{{ step2Label }}</ng-template>
        <div class="step-content">
          <h3>{{ step2Title }}</h3>
          <p>{{ step2Content }}</p>
          <div class="button-row">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-raised-button color="primary" 
                    (click)="markStepCompleted(2)" 
                    matStepperNext>
              {{ step2ButtonText }}
            </button>
          </div>
        </div>
      </mat-step>

      <mat-step [completed]="step3Completed">
        <ng-template matStepLabel>{{ step3Label }}</ng-template>
        <div class="step-content">
          <h3>{{ step3Title }}</h3>
          <p>{{ step3Content }}</p>
          <div class="button-row">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-raised-button color="accent" 
                    (click)="markStepCompleted(3)">
              <mat-icon>check</mat-icon>
              {{ step3ButtonText }}
            </button>
            <button mat-button (click)="resetStepper(stepper)">Reset</button>
          </div>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: [`
    .step-content {
      padding: 16px;
      min-height: 200px;
    }
    
    .step-content h3 {
      margin-top: 0;
      color: rgba(0, 0, 0, 0.87);
    }
    
    .step-content p {
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.5;
      margin-bottom: 24px;
    }
    
    .button-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    
    mat-stepper {
      max-width: 600px;
    }
  `],
})
export class SimpleStepperComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() linear: boolean = true;
  
  // Step 1 properties
  @Input() step1Label: string = 'Step 1';
  @Input() step1Title: string = 'Getting Started';
  @Input() step1Content: string = 'Welcome to the first step of our process. This is where you begin your journey.';
  @Input() step1ButtonText: string = 'Continue';
  
  // Step 2 properties
  @Input() step2Label: string = 'Step 2';
  @Input() step2Title: string = 'Configuration';
  @Input() step2Content: string = 'In this step, you can configure your preferences and settings.';
  @Input() step2ButtonText: string = 'Next';
  
  // Step 3 properties
  @Input() step3Label: string = 'Step 3';
  @Input() step3Title: string = 'Completion';
  @Input() step3Content: string = 'Congratulations! You have reached the final step. Review and complete your process.';
  @Input() step3ButtonText: string = 'Finish';

  step1Completed = false;
  step2Completed = false;
  step3Completed = false;

  markStepCompleted(stepNumber: number) {
    switch (stepNumber) {
      case 1:
        this.step1Completed = true;
        break;
      case 2:
        this.step2Completed = true;
        break;
      case 3:
        this.step3Completed = true;
        console.log('Process completed!');
        break;
    }
  }

  resetStepper(stepper: any) {
    this.step1Completed = false;
    this.step2Completed = false;
    this.step3Completed = false;
    stepper.reset();
  }
}
