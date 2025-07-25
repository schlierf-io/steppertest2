import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{ title }}</mat-card-title>
        <mat-card-subtitle>{{ subtitle }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="imageUrl" [alt]="imageAlt" *ngIf="imageUrl">
      <mat-card-content>
        <p>{{ content }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button [color]="buttonColor">{{ primaryAction }}</button>
        <button mat-button [color]="buttonColor">{{ secondaryAction }}</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `],
})
export class CardExampleComponent {
  @Input() title: string = 'Shiba Inu';
  @Input() subtitle: string = 'Dog Breed';
  @Input() content: string = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  @Input() imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() imageAlt: string = 'Photo of a Shiba Inu';
  @Input() primaryAction: string = 'LIKE';
  @Input() secondaryAction: string = 'SHARE';
  @Input() buttonColor: 'primary' | 'accent' | 'warn' | '' = 'primary';
}
