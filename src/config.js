// Configuración global de la aplicación
export const CONFIG = {
  // Número de WhatsApp (formato internacional sin +)
  WHATSAPP_NUMBER: '51952813698',
  
  // IGV (Impuesto General a las Ventas)
  // NOTA: Los precios mostrados ya incluyen IGV
  IGV_RATE: 0.18,
  
  // Moneda
  CURRENCY: 'PEN',
  CURRENCY_SYMBOL: 'S/',
  
  // Información de la clínica
  CLINIC_NAME: 'Clínica Enfoque Salud',
  CLINIC_ADDRESS: 'Alfonso Ugarte 641, Chiclayo, Perú',
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
    facebook: 'https://www.facebook.com/C.EnfoqueSalud',
    instagram: 'https://www.instagram.com/clinicaenfoquesalud/',
    tiktok: 'https://www.tiktok.com/@c.enfoquesalud',
    website:'https://www.clinicaenfoquesalud.com/'
  }
}

// Formateador de moneda
export function formatCurrency(amount) {
  return `${CONFIG.CURRENCY_SYMBOL} ${amount.toFixed(2)}`
}

// Calcular precio base sin IGV (a partir del precio final que incluye IGV)
export function getPriceWithoutIGV(finalPrice) {
  return finalPrice / (1 + CONFIG.IGV_RATE)
}

// Calcular solo el monto del IGV
export function getIGVAmount(finalPrice) {
  const basePrice = getPriceWithoutIGV(finalPrice)
  return finalPrice - basePrice
}

// Generador de enlace WhatsApp
export function generateWhatsAppLink(message) {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`
}
