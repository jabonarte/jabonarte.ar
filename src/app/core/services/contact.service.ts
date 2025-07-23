import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  /**
   * Send contact form data
   */
  sendContactForm(data: ContactFormData): Observable<ContactResponse> {
    // En producción, esto sería una llamada real a la API
    // return this.http.post<ContactResponse>('/api/contact', data);

    // Simulación de envío exitoso
    return of({
      success: true,
      message: 'Mensaje enviado exitosamente',
      id: `msg_${Date.now()}`,
    }).pipe(
      delay(2000), // Simular delay de red
      catchError((error) => {
        console.error('Error sending contact form:', error);
        return of({
          success: false,
          message: 'Error al enviar el mensaje. Por favor, intentá nuevamente.',
        });
      })
    );
  }

  /**
   * Generate WhatsApp message
   */
  generateWhatsAppMessage(data: Partial<ContactFormData>): string {
    const baseMessage =
      'Hola! Me gustaría obtener más información sobre sus productos naturales.';

    if (data.subject) {
      return `${baseMessage}\n\nAsunto: ${data.subject}\n${data.message || ''}`;
    }

    return baseMessage;
  }

  /**
   * Get WhatsApp URL with pre-filled message
   */
  getWhatsAppUrl(message: string, phone: string = '5491112345678'): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Validate email format
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone number format
   */
  validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }
}
