# Jabón Arte - Cosmética Natural Artesanal

Sitio web de cosmética natural artesanal desarrollado con Angular 19, diseñado para mostrar productos naturales y proporcionar información educativa sobre el cuidado de la piel.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para desktop y móvil
- **Componentes Modulares**: Arquitectura basada en componentes standalone
- **Test de Piel Interactivo**: Sistema de evaluación personalizada
- **Catálogo de Productos**: Filtrado y búsqueda avanzada
- **Integración WhatsApp**: Contacto directo con pre-llenado de mensajes
- **Formularios Reactivos**: Validación completa y manejo de estados
- **Sistema de Notificaciones**: Feedback en tiempo real al usuario
- **Almacenamiento Local**: Persistencia de datos del usuario

## 🛠️ Tecnologías

- **Angular 19**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Tailwind CSS**: Framework de estilos
- **RxJS**: Programación reactiva
- **Angular Forms**: Formularios reactivos
- **LocalStorage**: Persistencia de datos

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd jabonarte.ar/angular-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── layout/
│   │   └── services/
│   │       ├── contact.service.ts
│   │       ├── products.service.ts
│   │       ├── storage.service.ts
│   │       └── notification.service.ts
│   ├── features/
│   │   ├── home/
│   │   │   └── components/
│   │   │       ├── home/
│   │   │       ├── about/
│   │   │       ├── hero/
│   │   │       └── features/
│   │   ├── products/
│   │   │   └── components/
│   │   │       ├── products/
│   │   │       ├── product-card/
│   │   │       ├── product-detail/
│   │   │       └── product-filters/
│   │   ├── skin-test/
│   │   │   └── components/
│   │   │       └── skin-test/
│   │   └── contact/
│   │       └── components/
│   │           ├── contact/
│   │           └── contact-form/
│   └── shared/
│       ├── components/
│       ├── directives/
│       ├── models/
│       └── pipes/
```

## 🧩 Componentes Principales

### Core Components

#### HeaderComponent
- **Ubicación**: `core/components/header/`
- **Funcionalidad**: Navegación principal, menú móvil, botón de pedido
- **Características**: Sticky header, navegación responsive, integración WhatsApp

#### FooterComponent
- **Ubicación**: `core/components/footer/`
- **Funcionalidad**: Información de contacto, enlaces de navegación
- **Características**: Enlaces sociales, información de la empresa

### Feature Components

#### HomeComponent
- **Ubicación**: `features/home/components/home/`
- **Funcionalidad**: Página principal con hero section
- **Características**: Diseño atractivo, call-to-action buttons

#### ProductsComponent
- **Ubicación**: `features/products/components/products/`
- **Funcionalidad**: Catálogo de productos con filtros
- **Características**: Grid responsive, filtrado por categoría, búsqueda

#### ContactComponent
- **Ubicación**: `features/contact/components/contact/`
- **Funcionalidad**: Formulario de contacto e información
- **Características**: Validación reactiva, integración WhatsApp/Instagram

#### SkinTestComponent
- **Ubicación**: `features/skin-test/components/skin-test/`
- **Funcionalidad**: Test interactivo de tipo de piel
- **Características**: Preguntas progresivas, resultados personalizados

## 🔧 Servicios

### ContactService
```typescript
// Envío de formularios de contacto
sendContactForm(data: ContactFormData): Observable<ContactResponse>

// Generación de mensajes WhatsApp
generateWhatsAppMessage(data: Partial<ContactFormData>): string

// Validación de email y teléfono
validateEmail(email: string): boolean
validatePhone(phone: string): boolean
```

### ProductsService
```typescript
// Obtener todos los productos
getProducts(): Observable<Product[]>

// Filtrado avanzado
filterProducts(filter: ProductFilter): Observable<Product[]>

// Búsqueda de productos
searchProducts(query: string): Observable<Product[]>

// Productos por categoría
getProductsByCategory(category: string): Observable<Product[]>
```

### StorageService
```typescript
// Gestión de localStorage
setItem(key: string, value: any): void
getItem<T>(key: string): T | null

// Gestión de sessionStorage
setSessionItem(key: string, value: any): void
getSessionItem<T>(key: string): T | null

// Métodos específicos
saveUserPreferences(preferences: any): void
getCartItems(): any[]
saveSkinTestResults(results: any): void
```

### NotificationService
```typescript
// Tipos de notificación
success(title: string, message: string, duration?: number): string
error(title: string, message: string, duration?: number): string
warning(title: string, message: string, duration?: number): string
info(title: string, message: string, duration?: number): string

// Métodos específicos
productAddedToCart(productName: string): string
formSubmittedSuccessfully(formName: string): string
skinTestCompleted(skinType: string): string
```

## 🎨 Estilos y Diseño

### Paleta de Colores
- **Primario**: `#6B4C3B` (Marrón oscuro)
- **Secundario**: `#9CB1A3` (Verde suave)
- **Acento**: `#DCC7B4` (Beige)
- **Fondo**: `#FFF4EC` (Crema claro)

### Clases CSS Principales
```css
/* Contenedores */
.container { @apply max-w-7xl mx-auto px-4 md:px-6; }

/* Botones */
.btn-primary { @apply bg-[#9CB1A3] hover:bg-[#9CB1A3]/90 text-white rounded-full; }
.btn-secondary { @apply bg-[#DCC7B4] hover:bg-[#DCC7B4]/90 text-[#6B4C3B] rounded-full; }

/* Textos */
.text-primary { @apply text-[#6B4C3B]; }
.text-secondary { @apply text-[#9CB1A3]; }
```

## 🚀 Deployment

### Build de Producción

1. **Optimizar para producción**
   ```bash
   ng build --configuration production
   ```

2. **Verificar el build**
   ```bash
   ng serve --configuration production
   ```

### Configuración de Entornos

#### environment.ts (Desarrollo)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  whatsappNumber: '5491112345678',
  instagramHandle: 'jabonarte.ar'
};
```

#### environment.prod.ts (Producción)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.jabonarte.ar',
  whatsappNumber: '5491112345678',
  instagramHandle: 'jabonarte.ar'
};
```

### Plataformas de Deployment

#### Vercel
1. Conectar repositorio GitHub
2. Configurar build command: `ng build --configuration production`
3. Output directory: `dist/jabon-arte`
4. Deploy automático en push a main

#### Netlify
1. Conectar repositorio GitHub
2. Build command: `ng build --configuration production`
3. Publish directory: `dist/jabon-arte`
4. Configurar redirects para SPA

#### GitHub Pages
1. Configurar GitHub Actions
2. Build y deploy automático
3. Configurar base href en angular.json

## 📊 Performance

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimizaciones Implementadas
- Lazy loading de módulos
- Compresión de imágenes
- Minificación de CSS/JS
- Caching de assets
- Service Worker (futuro)

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests unitarios
ng test

# Tests e2e
ng e2e

# Coverage
ng test --code-coverage
```

### Estructura de Tests
```
src/
├── app/
│   └── **/*.spec.ts
└── test.ts
```

## 🔍 SEO

### Meta Tags
- Title dinámico por página
- Meta description optimizada
- Open Graph tags
- Twitter Cards

### Sitemap
- Generación automática
- URLs principales incluidas
- Actualización en build

## 📱 PWA (Futuro)

### Características Planificadas
- Service Worker
- Manifest.json
- Offline functionality
- Push notifications

## 🤝 Contribución

### Flujo de Trabajo
1. Fork del repositorio
2. Crear feature branch
3. Implementar cambios
4. Ejecutar tests
5. Crear Pull Request

### Estándares de Código
- ESLint configurado
- Prettier para formateo
- Conventional Commits
- TypeScript strict mode

## 📞 Soporte

### Contacto
- **Email**: info@jabonarte.ar
- **WhatsApp**: +54 9 11 1234-5678
- **Instagram**: @jabonarte.ar

### Issues
- Reportar bugs en GitHub Issues
- Incluir pasos de reproducción
- Especificar entorno y versión

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Jabón Arte**
