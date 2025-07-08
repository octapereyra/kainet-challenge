import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      .footer {
        background-color: #f8f9fa;
        border-top: 1px solid #dee2e6;
        padding: 20px 0;
        margin-top: auto;
      }
    `,
  ],
})
export class FooterComponent {
  protected currentYear: number = new Date().getFullYear();
}
