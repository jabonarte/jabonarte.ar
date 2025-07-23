import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    callback: () => void;
  };
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  /**
   * Show success notification
   */
  success(title: string, message: string, duration: number = 5000): string {
    return this.show({
      id: this.generateId(),
      type: 'success',
      title,
      message,
      duration,
    });
  }

  /**
   * Show error notification
   */
  error(title: string, message: string, duration: number = 7000): string {
    return this.show({
      id: this.generateId(),
      type: 'error',
      title,
      message,
      duration,
    });
  }

  /**
   * Show warning notification
   */
  warning(title: string, message: string, duration: number = 6000): string {
    return this.show({
      id: this.generateId(),
      type: 'warning',
      title,
      message,
      duration,
    });
  }

  /**
   * Show info notification
   */
  info(title: string, message: string, duration: number = 4000): string {
    return this.show({
      id: this.generateId(),
      type: 'info',
      title,
      message,
      duration,
    });
  }

  /**
   * Show custom notification
   */
  show(notification: Notification): string {
    const currentNotifications = this.notificationsSubject.value;
    const updatedNotifications = [...currentNotifications, notification];
    this.notificationsSubject.next(updatedNotifications);

    // Auto-remove notification after duration
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        this.remove(notification.id);
      }, notification.duration);
    }

    return notification.id;
  }

  /**
   * Remove notification by ID
   */
  remove(id: string): void {
    const currentNotifications = this.notificationsSubject.value;
    const updatedNotifications = currentNotifications.filter(
      (n) => n.id !== id
    );
    this.notificationsSubject.next(updatedNotifications);
  }

  /**
   * Clear all notifications
   */
  clear(): void {
    this.notificationsSubject.next([]);
  }

  /**
   * Get current notifications
   */
  getNotifications(): Notification[] {
    return this.notificationsSubject.value;
  }

  /**
   * Generate unique ID for notification
   */
  private generateId(): string {
    return `notification_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }

  /**
   * Show product added to cart notification
   */
  productAddedToCart(productName: string): string {
    return this.success(
      'Producto agregado',
      `${productName} se agregó al carrito exitosamente.`,
      3000
    );
  }

  /**
   * Show form submission success
   */
  formSubmittedSuccessfully(formName: string): string {
    return this.success(
      'Enviado exitosamente',
      `Tu ${formName} se envió correctamente. Te responderemos pronto.`,
      5000
    );
  }

  /**
   * Show form submission error
   */
  formSubmissionError(formName: string): string {
    return this.error(
      'Error al enviar',
      `Hubo un problema al enviar tu ${formName}. Por favor, intentá nuevamente.`,
      7000
    );
  }

  /**
   * Show network error
   */
  networkError(): string {
    return this.error(
      'Error de conexión',
      'No se pudo conectar con el servidor. Verificá tu conexión a internet.',
      8000
    );
  }

  /**
   * Show validation error
   */
  validationError(fieldName: string): string {
    return this.warning(
      'Error de validación',
      `Por favor, completá correctamente el campo "${fieldName}".`,
      5000
    );
  }

  /**
   * Show loading notification
   */
  loading(message: string = 'Cargando...'): string {
    return this.info(
      'Cargando',
      message,
      0 // No auto-remove
    );
  }

  /**
   * Show skin test completion
   */
  skinTestCompleted(skinType: string): string {
    return this.success(
      'Test completado',
      `Tu tipo de piel es: ${skinType}. Revisá las recomendaciones personalizadas.`,
      6000
    );
  }

  /**
   * Show WhatsApp redirect
   */
  whatsAppRedirect(): string {
    return this.info(
      'Redirigiendo a WhatsApp',
      'Se abrirá WhatsApp para continuar con tu consulta.',
      3000
    );
  }

  /**
   * Show search results
   */
  searchResults(count: number): string {
    if (count === 0) {
      return this.info(
        'Sin resultados',
        'No se encontraron productos que coincidan con tu búsqueda.',
        4000
      );
    } else {
      return this.success(
        'Resultados encontrados',
        `Se encontraron ${count} productos.`,
        3000
      );
    }
  }
}
