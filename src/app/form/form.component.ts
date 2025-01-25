import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments.prod';
@Component({
  selector: 'app-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formActionUrl?: string;

  ngOnInit(): void {
    this.formActionUrl = `https://formspree.io/f/${environment.apiKey}`;
  }

}
