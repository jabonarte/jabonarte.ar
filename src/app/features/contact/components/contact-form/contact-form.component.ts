import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../../../../core/services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;

      // Crear objeto con los campos requeridos por el servicio
      const formData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: 'Consulta desde formulario web',
        message: this.contactForm.value.message,
      };

      this.contactService.sendContactForm(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          if (response.success) {
            this.showSuccess = true;
            this.contactForm.reset();
            setTimeout(() => {
              this.showSuccess = false;
            }, 5000);
          } else {
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 5000);
          }
        },
        error: () => {
          this.isSubmitting = false;
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 5000);
        },
      });
    }
  }
}
