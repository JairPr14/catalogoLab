# Clínica Enfoque Salud - Landing Page

Landing page tipo catálogo para clínica/laboratorio de análisis clínicos, desarrollada en Vue 2.

## 🚀 Características

- ✅ **Catálogo de análisis clínicos** con buscador, filtros y ordenamiento
- ✅ **Carrito lateral (drawer)** con controles de cantidad
- ✅ **Cálculo automático de IGV** (18% configurable)
- ✅ **Envío por WhatsApp** con mensaje preformateado
- ✅ **Paquetes promocionales** con descuentos
- ✅ **Persistencia del carrito** en localStorage
- ✅ **Diseño responsive** (mobile-first)
- ✅ **Botón flotante de WhatsApp**

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run serve

# Compilar para producción
npm run build
```

## ⚙️ Configuración

Edita el archivo `src/config.js` para personalizar:

```javascript
export const CONFIG = {
  // Número de WhatsApp (formato internacional sin +)
  WHATSAPP_NUMBER: '51952813698',
  
  // IGV (Impuesto General a las Ventas)
  IGV_RATE: 0.18,
  
  // Información de la clínica
  CLINIC_NAME: 'Clínica Enfoque Salud',
  CLINIC_ADDRESS: 'Calle Alfonso Ugarte 641 , Chiclayo, Perú',
  CLINIC_PHONE: '+51 952 813 698',
  CLINIC_EMAIL: 'contacto@enfoquesalud.com',
  
  // Horarios
  SCHEDULE: {
    weekdays: 'Lunes a Viernes: 7:00 AM - 7:00 PM',
    saturday: 'Sábados: 7:00 AM - 2:00 PM',
    sunday: 'Domingos: 7:00 AM - 2:00 PM'
  },
  
  // Redes sociales
  SOCIAL: {
    facebook: 'https://facebook.com/enfoquesalud',
    instagram: 'https://instagram.com/enfoquesalud',
    tiktok: 'https://tiktok.com/@enfoquesalud'
    PaginaWEb:'https://www.clinicaenfoquesalud.com/'
  }
}
```

## 📝 Agregar/Editar Análisis

Edita el archivo `src/data/analyses.js`:

```javascript
export const ANALYSES = [
  {
    id: 1,
    nombre: 'Hemograma Completo',
    categoria: 'hematologia', // Debe coincidir con CATEGORIES
    precioBase: 25.00, // Precio sin IGV
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Descripción de lo que incluye',
    observaciones: 'Notas adicionales'
  },
  // ... más análisis
]
```

### Categorías disponibles:
- `hematologia` - Hematología
- `bioquimica` - Bioquímica  
- `inmunologia` - Inmunología
- `microbiologia` - Microbiología
- `hormonas` - Hormonas
- `orina-heces` - Orina/Heces
- `marcadores` - Marcadores Tumorales
- `serologia` - Serología

## 🎁 Agregar Paquetes Promocionales

```javascript
export const PACKAGES = [
  {
    id: 'pkg-1',
    nombre: 'Chequeo Básico',
    descripcion: 'Ideal para control anual',
    analisis: [1, 4, 18], // IDs de los análisis incluidos
    precioRegular: 52.00,
    precioPromo: 42.00,
    descuento: 19, // Porcentaje de descuento
    preparacion: 'Ayuno de 8-12 horas',
    popular: true // Mostrar etiqueta "Más popular"
  }
]
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.vue         # Header con navegación
│   ├── Hero.vue           # Sección principal
│   ├── Benefits.vue       # Beneficios
│   ├── Catalog.vue        # Catálogo con filtros
│   ├── AnalysisCard.vue   # Tarjeta de análisis
│   ├── Packages.vue       # Paquetes promocionales
│   ├── HowToOrder.vue     # Pasos para pedir
│   ├── FAQ.vue            # Preguntas frecuentes
│   ├── Footer.vue         # Pie de página
│   ├── CartDrawer.vue     # Carrito lateral
│   └── WhatsAppButton.vue # Botón flotante
├── data/
│   └── analyses.js        # Datos de análisis y paquetes
├── store/
│   └── index.js           # Vuex store (carrito)
├── config.js              # Configuración global
├── App.vue                # Componente principal
└── main.js                # Punto de entrada
```

## 📱 Mensaje de WhatsApp

El mensaje enviado incluye:
- Nombre del paciente (opcional)
- Lista de análisis con cantidades y precios
- Subtotal sin IGV
- IGV (18%)
- Total con IGV
- Observaciones (opcional)
- Texto de cierre solicitando confirmación

## 🎨 Personalización de Estilos

Las variables CSS están en `App.vue`:

```css
:root {
  --primary: #0891b2;
  --primary-dark: #0e7490;
  --secondary: #059669;
  --accent: #f59e0b;
  /* ... más variables */
}
```

## 📄 Licencia

Proyecto desarrollado para uso interno de clínicas y laboratorios.
