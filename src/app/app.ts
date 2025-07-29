import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleFormComponent } from './sample-form/sample-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SampleFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('material-test2');
}
