import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stepper-example',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  template: `
    <mat-stepper 
      [orientation]="orientation" 
      [linear]="linear"
      [labelPosition]="labelPosition"
      #stepper>
      
      <!-- Step 1: Personal Information -->
      <mat-step [stepControl]="firstFormGroup" [editable]="editable">
        <form [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Personal Information</ng-template>
          
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>First Name</mat-label>
            <input matInput placeholder="Enter your first name" 
                   formControlName="firstNameCtrl" required>
            <mat-error *ngIf="firstFormGroup.get('firstNameCtrl')?.hasError('required')">
              First name is required
            </mat-error>
          </mat-form-field>
          
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Last Name</mat-label>
            <input matInput placeholder="Enter your last name" 
                   formControlName="lastNameCtrl" required>
            <mat-error *ngIf="firstFormGroup.get('lastNameCtrl')?.hasError('required')">
              Last name is required
            </mat-error>
          </mat-form-field>
          
          <div class="button-row">
            <button mat-raised-button color="primary" matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

      <!-- Step 2: Contact Information -->
      <mat-step [stepControl]="secondFormGroup" [editable]="editable">
        <form [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Contact Information</ng-template>
          
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput placeholder="Enter your email" 
                   formControlName="emailCtrl" required type="email">
            <mat-error *ngIf="secondFormGroup.get('emailCtrl')?.hasError('required')">
              Email is required
            </mat-error>
            <mat-error *ngIf="secondFormGroup.get('emailCtrl')?.hasError('email')">
              Please enter a valid email
            </mat-error>
          </mat-form-field>
          
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Phone Number</mat-label>
            <input matInput placeholder="Enter your phone number" 
                   formControlName="phoneCtrl" required>
            <mat-error *ngIf="secondFormGroup.get('phoneCtrl')?.hasError('required')">
              Phone number is required
            </mat-error>
          </mat-form-field>
          
          <div class="button-row">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-raised-button color="primary" matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

      <!-- Step 3: Address Information -->
      <mat-step [stepControl]="thirdFormGroup" [editable]="editable">
        <form [formGroup]="thirdFormGroup">
          <ng-template matStepLabel>Address</ng-template>
          
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Street Address</mat-label>
            <input matInput placeholder="Enter your street address" 
                   formControlName="addressCtrl" required>
            <mat-error *ngIf="thirdFormGroup.get('addressCtrl')?.hasError('required')">
              Address is required
            </mat-error>
          </mat-form-field>
          
          <div class="address-row">
            <mat-form-field appearance="outline" class="city-field">
              <mat-label>City</mat-label>
              <input matInput placeholder="City" 
                     formControlName="cityCtrl" required>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="zip-field">
              <mat-label>ZIP Code</mat-label>
              <input matInput placeholder="ZIP" 
                     formControlName="zipCtrl" required>
            </mat-form-field>
          </div>
          
          <div class="button-row">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-raised-button color="primary" matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

      <!-- Step 4: Review & Submit -->
      <mat-step [editable]="editable">
        <ng-template matStepLabel>Review & Submit</ng-template>
        
        <div class="review-section">
          <h3>Please review your information:</h3>
          
          <div class="review-item">
            <strong>Name:</strong> 
            {{ firstFormGroup.get('firstNameCtrl')?.value }} 
            {{ firstFormGroup.get('lastNameCtrl')?.value }}
          </div>
          
          <div class="review-item">
            <strong>Email:</strong> {{ secondFormGroup.get('emailCtrl')?.value }}
          </div>
          
          <div class="review-item">
            <strong>Phone:</strong> {{ secondFormGroup.get('phoneCtrl')?.value }}
          </div>
          
          <div class="review-item">
            <strong>Address:</strong> 
            {{ thirdFormGroup.get('addressCtrl')?.value }}, 
            {{ thirdFormGroup.get('cityCtrl')?.value }} 
            {{ thirdFormGroup.get('zipCtrl')?.value }}
          </div>
        </div>
        
        <div class="button-row">
          <button mat-button matStepperPrevious>Back</button>
          <button mat-raised-button color="accent" (click)="onSubmit()">
            <mat-icon>check</mat-icon>
            Submit
          </button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    
    .button-row {
      margin-top: 16px;
      display: flex;
      gap: 8px;
    }
    
    .address-row {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .city-field {
      flex: 2;
    }
    
    .zip-field {
      flex: 1;
    }
    
    .review-section {
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 4px;
      margin-bottom: 16px;
    }
    
    .review-item {
      margin-bottom: 8px;
      padding: 4px 0;
    }
    
    mat-stepper {
      max-width: 600px;
    }
    
    @media (max-width: 768px) {
      .address-row {
        flex-direction: column;
        gap: 0;
      }
      
      .city-field,
      .zip-field {
        flex: 1;
        margin-bottom: 16px;
      }
    }
  `],
})
export class StepperExampleComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() linear: boolean = true;
  @Input() editable: boolean = true;
  @Input() labelPosition: 'bottom' | 'end' = 'end';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      emailCtrl: ['', [Validators.required, Validators.email]],
      phoneCtrl: ['', Validators.required],
    });

    this.thirdFormGroup = this.formBuilder.group({
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      zipCtrl: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = {
      personal: this.firstFormGroup.value,
      contact: this.secondFormGroup.value,
      address: this.thirdFormGroup.value,
    };
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check the console for details.');
  }
}
