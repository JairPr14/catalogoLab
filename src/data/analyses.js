// Datos de análisis clínicos
// Precios en Soles (S/) - Ya incluyen IGV (18%)
// Referencia: Laboratorios de Chiclayo (Suiza Lab, Clinilab, Roe, etc.)

export const CATEGORIES = [
  { id: 'all', name: 'Todos' },
  { id: 'hematologia', name: 'Hematología' },
  { id: 'bioquimica', name: 'Bioquímica' },
  { id: 'inmunologia', name: 'Inmunología' },
  { id: 'microbiologia', name: 'Microbiología' },
  { id: 'hormonas', name: 'Hormonas' },
  { id: 'orina-heces', name: 'Orina/Heces' },
  { id: 'marcadores', name: 'Marcadores Tumorales' },
  { id: 'serologia', name: 'Serología' }
]

export const ANALYSES = [
  // ==================== HEMATOLOGÍA ====================
  {
    id: 1,
    nombre: 'Hemograma Completo',
    categoria: 'hematologia',
    precioBase: 25.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Recuento de glóbulos rojos, blancos, plaquetas, hemoglobina, hematocrito, índices eritrocitarios',
    observaciones: 'Examen básico de control'
  },
  {
    id: 2,
    nombre: 'Grupo Sanguíneo y Factor Rh',
    categoria: 'hematologia',
    precioBase: 20.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Determinación de grupo ABO y factor Rh',
    observaciones: 'Importante para transfusiones y embarazo'
  },
  {
    id: 3,
    nombre: 'Tiempo de Coagulación y Sangría',
    categoria: 'hematologia',
    precioBase: 18.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Tiempo de coagulación, tiempo de sangría',
    observaciones: 'Requerido para cirugías'
  },
  {
    id: 21,
    nombre: 'Tiempo de Protrombina (TP)',
    categoria: 'hematologia',
    precioBase: 22.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'TP, INR',
    observaciones: 'Control de anticoagulantes'
  },
  {
    id: 22,
    nombre: 'Tiempo de Tromboplastina TTPa',
    categoria: 'hematologia',
    precioBase: 25.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'TTPa activado',
    observaciones: 'Evaluación de coagulación'
  },
  {
    id: 23,
    nombre: 'Perfil de Coagulación Completo',
    categoria: 'hematologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'TP, TTPa, INR, fibrinógeno, tiempo de sangría',
    observaciones: 'Evaluación preoperatoria completa'
  },
  {
    id: 24,
    nombre: 'Velocidad de Sedimentación VSG',
    categoria: 'hematologia',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'VSG por método Westergren',
    observaciones: 'Marcador de inflamación'
  },
  {
    id: 25,
    nombre: 'Reticulocitos',
    categoria: 'hematologia',
    precioBase: 20.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Recuento de reticulocitos',
    observaciones: 'Evaluación de producción de glóbulos rojos'
  },
  {
    id: 26,
    nombre: 'Ferritina Sérica',
    categoria: 'hematologia',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Ferritina cuantitativa',
    observaciones: 'Evaluación de reservas de hierro'
  },
  {
    id: 27,
    nombre: 'Hierro Sérico',
    categoria: 'hematologia',
    precioBase: 25.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Hierro en sangre',
    observaciones: 'Diagnóstico de anemia'
  },
  {
    id: 28,
    nombre: 'Transferrina',
    categoria: 'hematologia',
    precioBase: 40.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Transferrina sérica',
    observaciones: 'Evaluación del metabolismo del hierro'
  },
  {
    id: 29,
    nombre: 'Perfil de Hierro Completo',
    categoria: 'hematologia',
    precioBase: 85.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Hierro sérico, ferritina, transferrina, capacidad de fijación',
    observaciones: 'Evaluación completa de anemia'
  },
  
  // ==================== BIOQUÍMICA ====================
  {
    id: 4,
    nombre: 'Glucosa en Ayunas',
    categoria: 'bioquimica',
    precioBase: 12.00,
    preparacion: 'Ayuno de 8-12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Medición de glucosa sérica',
    observaciones: 'Control de diabetes'
  },
  {
    id: 5,
    nombre: 'Perfil Lipídico Completo',
    categoria: 'bioquimica',
    precioBase: 45.00,
    preparacion: 'Ayuno de 12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Colesterol total, HDL, LDL, triglicéridos, VLDL',
    observaciones: 'Evaluación de riesgo cardiovascular'
  },
  {
    id: 6,
    nombre: 'Creatinina Sérica',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Medición de creatinina en sangre',
    observaciones: 'Evaluación de función renal'
  },
  {
    id: 7,
    nombre: 'Urea',
    categoria: 'bioquimica',
    precioBase: 14.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Medición de urea en sangre',
    observaciones: 'Evaluación de función renal'
  },
  {
    id: 8,
    nombre: 'Ácido Úrico',
    categoria: 'bioquimica',
    precioBase: 16.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Medición de ácido úrico sérico',
    observaciones: 'Diagnóstico de gota'
  },
  {
    id: 9,
    nombre: 'Perfil Hepático Completo',
    categoria: 'bioquimica',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'TGO, TGP, bilirrubinas total/directa/indirecta, fosfatasa alcalina, GGT, proteínas totales, albúmina',
    observaciones: 'Evaluación completa del hígado'
  },
  {
    id: 30,
    nombre: 'Glucosa Post Prandial',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: '2 horas después de comer',
    tiempoResultado: '24 horas',
    incluye: 'Glucosa sérica post ingesta',
    observaciones: 'Control de diabetes'
  },
  {
    id: 31,
    nombre: 'Hemoglobina Glicosilada (HbA1c)',
    categoria: 'bioquimica',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'HbA1c porcentaje',
    observaciones: 'Control de diabetes últimos 3 meses'
  },
  {
    id: 32,
    nombre: 'Test de Tolerancia a la Glucosa',
    categoria: 'bioquimica',
    precioBase: 45.00,
    preparacion: 'Ayuno de 10-12 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Glucosa basal y post carga (75g)',
    observaciones: 'Diagnóstico de diabetes gestacional'
  },
  {
    id: 33,
    nombre: 'Colesterol Total',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Colesterol total en sangre',
    observaciones: 'Evaluación cardiovascular básica'
  },
  {
    id: 34,
    nombre: 'Triglicéridos',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Triglicéridos séricos',
    observaciones: 'Control de lípidos'
  },
  {
    id: 35,
    nombre: 'Colesterol HDL',
    categoria: 'bioquimica',
    precioBase: 18.00,
    preparacion: 'Ayuno de 12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Colesterol HDL (bueno)',
    observaciones: 'Factor protector cardiovascular'
  },
  {
    id: 36,
    nombre: 'Colesterol LDL',
    categoria: 'bioquimica',
    precioBase: 18.00,
    preparacion: 'Ayuno de 12 horas',
    tiempoResultado: '24 horas',
    incluye: 'Colesterol LDL (malo)',
    observaciones: 'Factor de riesgo cardiovascular'
  },
  {
    id: 37,
    nombre: 'TGO (AST)',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Transaminasa glutámico oxalacética',
    observaciones: 'Marcador hepático y muscular'
  },
  {
    id: 38,
    nombre: 'TGP (ALT)',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Transaminasa glutámico pirúvica',
    observaciones: 'Marcador hepático específico'
  },
  {
    id: 39,
    nombre: 'Bilirrubinas Totales y Fraccionadas',
    categoria: 'bioquimica',
    precioBase: 22.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Bilirrubina total, directa e indirecta',
    observaciones: 'Evaluación de ictericia'
  },
  {
    id: 40,
    nombre: 'Fosfatasa Alcalina',
    categoria: 'bioquimica',
    precioBase: 18.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'FA sérica',
    observaciones: 'Marcador hepático y óseo'
  },
  {
    id: 41,
    nombre: 'GGT (Gamma Glutamil Transferasa)',
    categoria: 'bioquimica',
    precioBase: 20.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'GGT sérica',
    observaciones: 'Marcador de daño hepático'
  },
  {
    id: 42,
    nombre: 'Proteínas Totales',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Proteínas totales séricas',
    observaciones: 'Evaluación nutricional'
  },
  {
    id: 43,
    nombre: 'Albúmina',
    categoria: 'bioquimica',
    precioBase: 15.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Albúmina sérica',
    observaciones: 'Marcador de función hepática'
  },
  {
    id: 44,
    nombre: 'Perfil Renal Completo',
    categoria: 'bioquimica',
    precioBase: 55.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Urea, creatinina, ácido úrico, electrolitos',
    observaciones: 'Evaluación completa de función renal'
  },
  {
    id: 45,
    nombre: 'Electrolitos Séricos',
    categoria: 'bioquimica',
    precioBase: 35.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Sodio, potasio, cloro',
    observaciones: 'Balance hidroelectrolítico'
  },
  {
    id: 46,
    nombre: 'Calcio Sérico',
    categoria: 'bioquimica',
    precioBase: 18.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Calcio total en sangre',
    observaciones: 'Metabolismo óseo'
  },
  {
    id: 47,
    nombre: 'Fósforo Sérico',
    categoria: 'bioquimica',
    precioBase: 18.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Fósforo inorgánico',
    observaciones: 'Metabolismo óseo'
  },
  {
    id: 48,
    nombre: 'Magnesio Sérico',
    categoria: 'bioquimica',
    precioBase: 22.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Magnesio en sangre',
    observaciones: 'Función neuromuscular'
  },
  {
    id: 49,
    nombre: 'Amilasa',
    categoria: 'bioquimica',
    precioBase: 40.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Amilasa sérica',
    observaciones: 'Evaluación pancreática'
  },
  {
    id: 50,
    nombre: 'Lipasa',
    categoria: 'bioquimica',
    precioBase: 50.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Lipasa sérica',
    observaciones: 'Marcador pancreático específico'
  },
  {
    id: 51,
    nombre: 'LDH (Lactato Deshidrogenasa)',
    categoria: 'bioquimica',
    precioBase: 22.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'LDH total',
    observaciones: 'Marcador de daño tisular'
  },
  {
    id: 52,
    nombre: 'CPK (Creatinfosfoquinasa)',
    categoria: 'bioquimica',
    precioBase: 28.00,
    preparacion: 'Ayuno de 8 horas, evitar ejercicio',
    tiempoResultado: '24 horas',
    incluye: 'CPK total',
    observaciones: 'Marcador muscular y cardíaco'
  },
  {
    id: 53,
    nombre: 'CPK-MB',
    categoria: 'bioquimica',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'Fracción MB de CPK',
    observaciones: 'Marcador cardíaco específico'
  },
  {
    id: 54,
    nombre: 'Troponina I',
    categoria: 'bioquimica',
    precioBase: 85.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '2-4 horas',
    incluye: 'Troponina I ultrasensible',
    observaciones: 'Diagnóstico de infarto'
  },
  
  // ==================== INMUNOLOGÍA ====================
  {
    id: 10,
    nombre: 'PCR (Proteína C Reactiva)',
    categoria: 'inmunologia',
    precioBase: 40.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24 horas',
    incluye: 'PCR cuantitativa',
    observaciones: 'Marcador de inflamación'
  },
  {
    id: 11,
    nombre: 'Factor Reumatoide',
    categoria: 'inmunologia',
    precioBase: 35.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'FR cuantitativo',
    observaciones: 'Diagnóstico de artritis reumatoide'
  },
  {
    id: 12,
    nombre: 'Prueba de Embarazo (Beta HCG CUALITATIVO)',
    categoria: 'inmunologia',
    precioBase: 25.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Beta HCG cuantitativa en sangre',
    observaciones: 'Confirmación de embarazo'
  },
   {
    id: 13,
    nombre: 'Prueba de Embarazo  (Beta HCG CUANTITATIVO)',
    categoria: 'inmunologia',
    precioBase: 50.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Beta HCG cuantitativa en sangre',
    observaciones: 'Confirmación de embarazo'
  },

  {
    id: 55,
    nombre: 'PCR Ultrasensible',
    categoria: 'inmunologia',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'PCR de alta sensibilidad',
    observaciones: 'Riesgo cardiovascular'
  },
  {
    id: 56,
    nombre: 'Anticuerpos Antinucleares (ANA)',
    categoria: 'inmunologia',
    precioBase: 75.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'ANA por IFI',
    observaciones: 'Diagnóstico de lupus y autoinmunes'
  },
  {
    id: 57,
    nombre: 'Complemento C3',
    categoria: 'inmunologia',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'C3 cuantitativo',
    observaciones: 'Evaluación de enfermedades autoinmunes'
  },
  {
    id: 58,
    nombre: 'Complemento C4',
    categoria: 'inmunologia',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'C4 cuantitativo',
    observaciones: 'Evaluación de enfermedades autoinmunes'
  },
  {
    id: 59,
    nombre: 'Inmunoglobulinas (IgG, IgA, IgM)',
    categoria: 'inmunologia',
    precioBase: 95.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Panel de inmunoglobulinas',
    observaciones: 'Evaluación del sistema inmune'
  },
  {
    id: 60,
    nombre: 'IgE Total',
    categoria: 'inmunologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgE sérica total',
    observaciones: 'Evaluación de alergias'
  },
  {
    id: 61,
    nombre: 'Perfil Reumatológico',
    categoria: 'inmunologia',
    precioBase: 120.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '48-72 horas',
    incluye: 'FR, PCR, VSG, ANA, ácido úrico',
    observaciones: 'Evaluación de enfermedades reumáticas'
  },
  {
    id: 62,
    nombre: 'Anti CCP (Péptido Citrulinado)',
    categoria: 'inmunologia',
    precioBase: 95.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'Anticuerpos anti-CCP',
    observaciones: 'Diagnóstico específico de artritis reumatoide'
  },
  {
    id: 63,
    nombre: 'ASTO (Antiestreptolisina O)',
    categoria: 'inmunologia',
    precioBase: 25.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'ASTO cuantitativo',
    observaciones: 'Infección estreptocócica reciente'
  },
  
  // ==================== MICROBIOLOGÍA ====================
  {
    id: 13,
    nombre: 'Urocultivo',
    categoria: 'microbiologia',
    precioBase: 45.00,
    preparacion: 'Primera orina de la mañana, aseo previo',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo y antibiograma',
    observaciones: 'Diagnóstico de infección urinaria'
  },
  {
    id: 14,
    nombre: 'Coprocultivo',
    categoria: 'microbiologia',
    precioBase: 50.00,
    preparacion: 'Muestra de heces frescas',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo bacteriano de heces',
    observaciones: 'Diagnóstico de infección intestinal'
  },
  {
    id: 64,
    nombre: 'Cultivo de Secreción Faríngea',
    categoria: 'microbiologia',
    precioBase: 45.00,
    preparacion: 'En ayunas, sin enjuague bucal',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo y antibiograma',
    observaciones: 'Diagnóstico de faringitis bacteriana'
  },
  {
    id: 65,
    nombre: 'Cultivo de Secreción Vaginal',
    categoria: 'microbiologia',
    precioBase: 50.00,
    preparacion: 'Sin duchas vaginales 24h antes',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo, Gram y antibiograma',
    observaciones: 'Diagnóstico de vaginosis'
  },
  {
    id: 66,
    nombre: 'Espermatocultivo',
    categoria: 'microbiologia',
    precioBase: 55.00,
    preparacion: 'Abstinencia de 3-5 días',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo y antibiograma',
    observaciones: 'Diagnóstico de infección seminal'
  },
  {
    id: 67,
    nombre: 'Cultivo de Secreción de Herida',
    categoria: 'microbiologia',
    precioBase: 50.00,
    preparacion: 'Sin antibióticos tópicos',
    tiempoResultado: '48-72 horas',
    incluye: 'Cultivo y antibiograma',
    observaciones: 'Infecciones de piel y tejidos'
  },
  {
    id: 68,
    nombre: 'BK Directo (Baciloscopia)',
    categoria: 'microbiologia',
    precioBase: 25.00,
    preparacion: 'Primera expectoración de la mañana',
    tiempoResultado: '24-48 horas',
    incluye: 'Tinción de Ziehl-Neelsen',
    observaciones: 'Screening de tuberculosis'
  },
  {
    id: 69,
    nombre: 'Cultivo para BK (Koch)',
    categoria: 'microbiologia',
    precioBase: 85.00,
    preparacion: 'Primera expectoración de la mañana',
    tiempoResultado: '6-8 semanas',
    incluye: 'Cultivo de micobacterias',
    observaciones: 'Diagnóstico confirmatorio de TBC'
  },
  {
    id: 70,
    nombre: 'Gram y Cultivo de Orina',
    categoria: 'microbiologia',
    precioBase: 50.00,
    preparacion: 'Primera orina de la mañana',
    tiempoResultado: '48-72 horas',
    incluye: 'Tinción de Gram + cultivo + antibiograma',
    observaciones: 'Evaluación completa de ITU'
  },
  {
    id: 71,
    nombre: 'KOH (Examen Micológico Directo)',
    categoria: 'microbiologia',
    precioBase: 20.00,
    preparacion: 'Muestra de piel, uña o cabello',
    tiempoResultado: '24 horas',
    incluye: 'Examen directo con KOH',
    observaciones: 'Diagnóstico de hongos'
  },
  {
    id: 72,
    nombre: 'Cultivo para Hongos',
    categoria: 'microbiologia',
    precioBase: 55.00,
    preparacion: 'Muestra de lesión',
    tiempoResultado: '2-4 semanas',
    incluye: 'Cultivo micológico',
    observaciones: 'Identificación de hongos'
  },
  
  // ==================== HORMONAS ====================
  {
    id: 15,
    nombre: 'TSH (Hormona Tiroides)',
    categoria: 'hormonas',
    precioBase: 35.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'TSH ultrasensible',
    observaciones: 'Evaluación de tiroides'
  },
  {
    id: 16,
    nombre: 'T4 Libre',
    categoria: 'hormonas',
    precioBase: 38.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Tiroxina libre',
    observaciones: 'Complemento de perfil tiroideo'
  },
  {
    id: 17,
    nombre: 'Perfil Tiroideo Completo',
    categoria: 'hormonas',
    precioBase: 95.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'TSH, T3 total, T3 libre, T4 total, T4 libre',
    observaciones: 'Evaluación completa de tiroides'
  },
  {
    id: 73,
    nombre: 'T3 Total',
    categoria: 'hormonas',
    precioBase: 35.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Triyodotironina total',
    observaciones: 'Función tiroidea'
  },
  {
    id: 74,
    nombre: 'T3 Libre',
    categoria: 'hormonas',
    precioBase: 38.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'T3 libre',
    observaciones: 'Función tiroidea activa'
  },
  {
    id: 75,
    nombre: 'T4 Total',
    categoria: 'hormonas',
    precioBase: 32.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Tiroxina total',
    observaciones: 'Función tiroidea'
  },
  {
    id: 76,
    nombre: 'Anticuerpos Antitiroideos (Anti-TPO)',
    categoria: 'hormonas',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '48-72 horas',
    incluye: 'Anti-TPO cuantitativo',
    observaciones: 'Tiroiditis autoinmune'
  },
  {
    id: 77,
    nombre: 'Antitiroglobulina',
    categoria: 'hormonas',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '48-72 horas',
    incluye: 'Anti-Tg cuantitativo',
    observaciones: 'Tiroiditis autoinmune'
  },
  {
    id: 78,
    nombre: 'Insulina Basal',
    categoria: 'hormonas',
    precioBase: 45.00,
    preparacion: 'Ayuno de 10-12 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Insulina sérica',
    observaciones: 'Resistencia a la insulina'
  },
  {
    id: 79,
    nombre: 'Índice HOMA',
    categoria: 'hormonas',
    precioBase: 55.00,
    preparacion: 'Ayuno de 10-12 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Glucosa + insulina + cálculo HOMA',
    observaciones: 'Evaluación de resistencia a insulina'
  },
  {
    id: 80,
    nombre: 'Cortisol AM',
    categoria: 'hormonas',
    precioBase: 45.00,
    preparacion: 'Toma entre 7-9 AM',
    tiempoResultado: '24-48 horas',
    incluye: 'Cortisol matutino',
    observaciones: 'Función suprarrenal'
  },
  {
    id: 81,
    nombre: 'Prolactina',
    categoria: 'hormonas',
    precioBase: 45.00,
    preparacion: 'Ayuno de 8 horas, reposo previo',
    tiempoResultado: '24-48 horas',
    incluye: 'Prolactina sérica',
    observaciones: 'Evaluación de hipófisis'
  },
  {
    id: 82,
    nombre: 'FSH (Hormona Foliculoestimulante)',
    categoria: 'hormonas',
    precioBase: 42.00,
    preparacion: 'Día 3-5 del ciclo menstrual',
    tiempoResultado: '24-48 horas',
    incluye: 'FSH sérica',
    observaciones: 'Evaluación de fertilidad'
  },
  {
    id: 83,
    nombre: 'LH (Hormona Luteinizante)',
    categoria: 'hormonas',
    precioBase: 42.00,
    preparacion: 'Día 3-5 del ciclo menstrual',
    tiempoResultado: '24-48 horas',
    incluye: 'LH sérica',
    observaciones: 'Evaluación de fertilidad'
  },
  {
    id: 84,
    nombre: 'Estradiol',
    categoria: 'hormonas',
    precioBase: 48.00,
    preparacion: 'Según indicación médica',
    tiempoResultado: '24-48 horas',
    incluye: 'E2 sérico',
    observaciones: 'Función ovárica'
  },
  {
    id: 85,
    nombre: 'Progesterona',
    categoria: 'hormonas',
    precioBase: 48.00,
    preparacion: 'Día 21 del ciclo menstrual',
    tiempoResultado: '24-48 horas',
    incluye: 'Progesterona sérica',
    observaciones: 'Evaluación de ovulación'
  },
  {
    id: 86,
    nombre: 'Testosterona Total',
    categoria: 'hormonas',
    precioBase: 48.00,
    preparacion: 'Ayuno de 8 horas, toma AM',
    tiempoResultado: '24-48 horas',
    incluye: 'Testosterona sérica',
    observaciones: 'Función gonadal masculina'
  },
  {
    id: 87,
    nombre: 'Testosterona Libre',
    categoria: 'hormonas',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas, toma AM',
    tiempoResultado: '24-48 horas',
    incluye: 'Testosterona libre',
    observaciones: 'Evaluación hormonal masculina'
  },
  {
    id: 88,
    nombre: 'Perfil Hormonal Femenino',
    categoria: 'hormonas',
    precioBase: 165.00,
    preparacion: 'Día 3-5 del ciclo',
    tiempoResultado: '48-72 horas',
    incluye: 'FSH, LH, estradiol, progesterona, prolactina',
    observaciones: 'Evaluación completa de fertilidad'
  },
  {
    id: 89,
    nombre: 'Perfil Hormonal Masculino',
    categoria: 'hormonas',
    precioBase: 145.00,
    preparacion: 'Ayuno de 8 horas, toma AM',
    tiempoResultado: '48-72 horas',
    incluye: 'Testosterona total y libre, FSH, LH, prolactina',
    observaciones: 'Evaluación de función gonadal'
  },
  {
    id: 90,
    nombre: 'PTH (Paratohormona)',
    categoria: 'hormonas',
    precioBase: 75.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'PTH intacta',
    observaciones: 'Metabolismo del calcio'
  },
  {
    id: 91,
    nombre: 'Vitamina D (25-OH)',
    categoria: 'hormonas',
    precioBase: 85.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: '25-hidroxivitamina D',
    observaciones: 'Evaluación de deficiencia de vitamina D'
  },
  {
    id: 92,
    nombre: 'Vitamina B12',
    categoria: 'hormonas',
    precioBase: 55.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Cianocobalamina sérica',
    observaciones: 'Diagnóstico de anemia megaloblástica'
  },
  {
    id: 93,
    nombre: 'Ácido Fólico',
    categoria: 'hormonas',
    precioBase: 55.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Folato sérico',
    observaciones: 'Evaluación nutricional y embarazo'
  },
  
  // ==================== ORINA/HECES ====================
  {
    id: 18,
    nombre: 'Examen Completo de Orina',
    categoria: 'orina-heces',
    precioBase: 15.00,
    preparacion: 'Primera orina de la mañana',
    tiempoResultado: '24 horas',
    incluye: 'Físico, químico y sedimento',
    observaciones: 'Examen de rutina'
  },
  {
    id: 19,
    nombre: 'Examen Parasitológico de Heces',
    categoria: 'orina-heces',
    precioBase: 18.00,
    preparacion: 'Muestra de heces frescas',
    tiempoResultado: '24 horas',
    incluye: 'Búsqueda de parásitos y huevos',
    observaciones: 'Se recomienda 3 muestras seriadas'
  },
  {
    id: 20,
    nombre: 'Sangre Oculta en Heces',
    categoria: 'orina-heces',
    precioBase: 25.00,
    preparacion: 'Evitar carnes rojas 3 días antes',
    tiempoResultado: '24 horas',
    incluye: 'Test inmunológico',
    observaciones: 'Screening de cáncer colorrectal'
  },
  {
    id: 94,
    nombre: 'Parasitológico Seriado (3 muestras)',
    categoria: 'orina-heces',
    precioBase: 45.00,
    preparacion: 'Muestras de 3 días diferentes',
    tiempoResultado: '48-72 horas',
    incluye: 'Examen directo y concentración',
    observaciones: 'Mayor sensibilidad diagnóstica'
  },
  {
    id: 95,
    nombre: 'Test de Graham (Oxiuros)',
    categoria: 'orina-heces',
    precioBase: 15.00,
    preparacion: 'Sin bañarse en la mañana',
    tiempoResultado: '24 horas',
    incluye: 'Búsqueda de huevos de oxiuros',
    observaciones: 'Se recomienda 3 muestras seriadas'
  },
  {
    id: 96,
    nombre: 'Reacción Inflamatoria en Heces',
    categoria: 'orina-heces',
    precioBase: 18.00,
    preparacion: 'Muestra de heces frescas',
    tiempoResultado: '24 horas',
    incluye: 'Leucocitos y moco',
    observaciones: 'Evaluación de infección intestinal'
  },
  {
    id: 97,
    nombre: 'Thevenon (Sangre Oculta Química)',
    categoria: 'orina-heces',
    precioBase: 18.00,
    preparacion: 'Evitar carnes rojas 3 días',
    tiempoResultado: '24 horas',
    incluye: 'Test químico para hemoglobina',
    observaciones: 'Screening digestivo'
  },
  {
    id: 98,
    nombre: 'Orina de 24 horas - Proteínas',
    categoria: 'orina-heces',
    precioBase: 35.00,
    preparacion: 'Recolección de 24 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Proteínas totales en orina',
    observaciones: 'Evaluación de daño renal'
  },
  {
    id: 99,
    nombre: 'Orina de 24 horas - Creatinina',
    categoria: 'orina-heces',
    precioBase: 35.00,
    preparacion: 'Recolección de 24 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'Depuración de creatinina',
    observaciones: 'Evaluación de función renal'
  },
  {
    id: 100,
    nombre: 'Microalbuminuria',
    categoria: 'orina-heces',
    precioBase: 45.00,
    preparacion: 'Primera orina de la mañana',
    tiempoResultado: '24-48 horas',
    incluye: 'Albúmina en orina',
    observaciones: 'Daño renal temprano en diabetes'
  },
  {
    id: 101,
    nombre: 'Relación Albumina/Creatinina',
    categoria: 'orina-heces',
    precioBase: 55.00,
    preparacion: 'Primera orina de la mañana',
    tiempoResultado: '24-48 horas',
    incluye: 'Albúmina y creatinina en orina',
    observaciones: 'Evaluación de nefropatía diabética'
  },
  
  // ==================== MARCADORES TUMORALES ====================
  {
    id: 102,
    nombre: 'PSA Total',
    categoria: 'marcadores',
    precioBase: 45.00,
    preparacion: 'Sin actividad sexual 48h antes',
    tiempoResultado: '24-48 horas',
    incluye: 'Antígeno prostático específico',
    observaciones: 'Screening de cáncer de próstata'
  },
  {
    id: 103,
    nombre: 'PSA Libre',
    categoria: 'marcadores',
    precioBase: 55.00,
    preparacion: 'Sin actividad sexual 48h antes',
    tiempoResultado: '24-48 horas',
    incluye: 'PSA libre',
    observaciones: 'Complemento para evaluación prostática'
  },
  {
    id: 104,
    nombre: 'PSA Total y Libre + Relación',
    categoria: 'marcadores',
    precioBase: 85.00,
    preparacion: 'Sin actividad sexual 48h antes',
    tiempoResultado: '24-48 horas',
    incluye: 'PSA total, PSA libre, relación',
    observaciones: 'Evaluación prostática completa'
  },
  {
    id: 105,
    nombre: ' Antígeno Carcinoembrionario CEA',
    categoria: 'marcadores',
    precioBase: 55.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'CEA sérico',
    observaciones: 'Cáncer colorrectal y otros'
  },
  {
    id: 106,
    nombre: 'CA 125',
    categoria: 'marcadores',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'CA 125 sérico',
    observaciones: 'Cáncer de ovario'
  },
  {
    id: 107,
    nombre: 'CA 15-3',
    categoria: 'marcadores',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'CA 15-3 sérico',
    observaciones: 'Cáncer de mama'
  },
  {
    id: 108,
    nombre: 'CA 19-9',
    categoria: 'marcadores',
    precioBase: 65.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'CA 19-9 sérico',
    observaciones: 'Cáncer de páncreas y vía biliar'
  },
  {
    id: 109,
    nombre: 'AFP Alfafetoproteína',
    categoria: 'marcadores',
    precioBase: 55.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '24-48 horas',
    incluye: 'AFP sérica',
    observaciones: 'Cáncer hepático y testicular'
  },
  {
    id: 110,
    nombre: 'Perfil de Marcadores Tumorales Mujer',
    categoria: 'marcadores',
    precioBase: 185.00,
    preparacion: 'Ayuno de 8 horas',
    tiempoResultado: '48-72 horas',
    incluye: 'CEA, CA 125, CA 15-3, CA 19-9',
    observaciones: 'Screening oncológico femenino'
  },
  {
    id: 111,
    nombre: 'Perfil de Marcadores Tumorales Varón',
    categoria: 'marcadores',
    precioBase: 165.00,
    preparacion: 'Ayuno de 8 horas, abstinencia sexual 48h',
    tiempoResultado: '48-72 horas',
    incluye: 'CEA, PSA total y libre, AFP',
    observaciones: 'Screening oncológico masculino'
  },
  
  // ==================== SEROLOGÍA ====================
  {
    id: 112,
    nombre: 'VDRL',
    categoria: 'serologia',
    precioBase: 18.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'VDRL cualitativo y cuantitativo',
    observaciones: 'Screening de sífilis'
  },
  {
    id: 113,
    nombre: 'RPR',
    categoria: 'serologia',
    precioBase: 20.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'RPR cualitativo y cuantitativo',
    observaciones: 'Screening de sífilis'
  },
  {
    id: 114,
    nombre: 'HIV (Elisa)',
    categoria: 'serologia',
    precioBase: 35.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Anticuerpos anti-VIH 1 y 2',
    observaciones: 'Screening de VIH'
  },
  {
    id: 115,
    nombre: 'Hepatitis B - HBsAg',
    categoria: 'serologia',
    precioBase: 35.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Antígeno de superficie',
    observaciones: 'Infección activa por hepatitis B'
  },
  {
    id: 116,
    nombre: 'Hepatitis B - Anti HBs',
    categoria: 'serologia',
    precioBase: 38.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Anticuerpos protectores',
    observaciones: 'Inmunidad post vacunación o infección'
  },
  {
    id: 117,
    nombre: 'Hepatitis B - Anti HBc Total',
    categoria: 'serologia',
    precioBase: 42.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Anti-core total',
    observaciones: 'Contacto previo con hepatitis B'
  },
  {
    id: 118,
    nombre: 'Perfil Hepatitis B Completo',
    categoria: 'serologia',
    precioBase: 105.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'HBsAg, Anti-HBs, Anti-HBc total',
    observaciones: 'Evaluación completa de hepatitis B'
  },
  {
    id: 119,
    nombre: 'Hepatitis C - Anti HCV',
    categoria: 'serologia',
    precioBase: 45.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Anticuerpos anti-VHC',
    observaciones: 'Screening de hepatitis C'
  },
  {
    id: 120,
    nombre: 'Hepatitis A - IgM Anti HAV',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgM anti hepatitis A',
    observaciones: 'Infección aguda por hepatitis A'
  },
  {
    id: 121,
    nombre: 'Hepatitis A - IgG Anti HAV',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti hepatitis A',
    observaciones: 'Inmunidad por infección previa o vacuna'
  },
  {
    id: 122,
    nombre: 'Panel de Hepatitis (A, B, C)',
    categoria: 'serologia',
    precioBase: 125.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'HAV IgM, HBsAg, Anti-HCV',
    observaciones: 'Screening completo de hepatitis'
  },
  {
    id: 123,
    nombre: 'Prueba Rápida de HIV',
    categoria: 'serologia',
    precioBase: 25.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '20 minutos',
    incluye: 'Anticuerpos VIH 1/2',
    observaciones: 'Resultado presuntivo'
  },
  {
    id: 124,
    nombre: 'Panel ITS Básico',
    categoria: 'serologia',
    precioBase: 85.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'VDRL, HIV, HBsAg',
    observaciones: 'Screening de ITS'
  },
  {
    id: 125,
    nombre: 'Panel ITS Completo',
    categoria: 'serologia',
    precioBase: 145.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'VDRL, HIV, HBsAg, Anti-HCV, Herpes I/II',
    observaciones: 'Evaluación completa de ITS'
  },
  {
    id: 126,
    nombre: 'Toxoplasma IgG',
    categoria: 'serologia',
    precioBase: 45.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti Toxoplasma',
    observaciones: 'Infección previa por toxoplasma'
  },
  {
    id: 127,
    nombre: 'Toxoplasma IgM',
    categoria: 'serologia',
    precioBase: 48.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgM anti Toxoplasma',
    observaciones: 'Infección reciente por toxoplasma'
  },
  {
    id: 128,
    nombre: 'Rubéola IgG',
    categoria: 'serologia',
    precioBase: 45.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti Rubéola',
    observaciones: 'Inmunidad por vacuna o infección'
  },
  {
    id: 129,
    nombre: 'Rubéola IgM',
    categoria: 'serologia',
    precioBase: 48.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgM anti Rubéola',
    observaciones: 'Infección reciente'
  },
  {
    id: 130,
    nombre: 'Citomegalovirus IgG',
    categoria: 'serologia',
    precioBase: 48.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti CMV',
    observaciones: 'Infección previa por CMV'
  },
  {
    id: 131,
    nombre: 'Citomegalovirus IgM',
    categoria: 'serologia',
    precioBase: 52.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgM anti CMV',
    observaciones: 'Infección reciente por CMV'
  },
  {
    id: 132,
    nombre: 'Perfil TORCH',
    categoria: 'serologia',
    precioBase: 195.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '48-72 horas',
    incluye: 'Toxoplasma, Rubéola, CMV, Herpes IgG e IgM',
    observaciones: 'Evaluación prenatal'
  },
  {
    id: 133,
    nombre: 'Herpes I IgG',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti HSV-1',
    observaciones: 'Herpes labial'
  },
  {
    id: 134,
    nombre: 'Herpes II IgG',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'IgG anti HSV-2',
    observaciones: 'Herpes genital'
  },
  {
    id: 135,
    nombre: 'Helicobacter Pylori IgG',
    categoria: 'serologia',
    precioBase: 45.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24-48 horas',
    incluye: 'Anticuerpos IgG',
    observaciones: 'Infección por H. pylori'
  },
  {
    id: 136,
    nombre: 'Test de Antígeno para H. Pylori en Heces',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'Muestra de heces frescas',
    tiempoResultado: '24-48 horas',
    incluye: 'Antígeno fecal de H. pylori',
    observaciones: 'Infección activa'
  },
  {
    id: 137,
    nombre: 'Dengue NS1',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Antígeno NS1 dengue',
    observaciones: 'Diagnóstico primeros 5 días'
  },
  {
    id: 138,
    nombre: 'Dengue IgG/IgM',
    categoria: 'serologia',
    precioBase: 55.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Anticuerpos IgG e IgM',
    observaciones: 'Diagnóstico después del día 5'
  },
  {
    id: 139,
    nombre: 'Panel Completo Dengue',
    categoria: 'serologia',
    precioBase: 95.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'NS1 + IgG + IgM',
    observaciones: 'Diagnóstico integral de dengue'
  },
  {
    id: 140,
    nombre: 'COVID-19 IgG/IgM',
    categoria: 'serologia',
    precioBase: 45.00,
    preparacion: 'No requiere ayuno',
    tiempoResultado: '24 horas',
    incluye: 'Anticuerpos contra SARS-CoV-2',
    observaciones: 'Infección previa o respuesta a vacuna'
  }
]

// Paquetes promocionales
// Precios en Soles (S/) - Ya incluyen IGV
export const PACKAGES = [
  {
    id: 'pkg-1',
    nombre: 'Chequeo Básico',
    descripcion: 'Ideal para control anual de rutina',
    analisis: [1, 4, 18], // Hemograma, Glucosa, Orina
    precioRegular: 52.00,
    precioPromo: 42.00,
    descuento: 19,
    preparacion: 'Ayuno de 8-12 horas',
    popular: true
  },
  {
    id: 'pkg-2',
    nombre: 'Perfil Cardiometabólico',
    descripcion: 'Control de riesgo cardiovascular y diabetes',
    analisis: [1, 4, 5, 6, 31], // Hemograma, Glucosa, Perfil Lipídico, Creatinina, HbA1c
    precioRegular: 152.00,
    precioPromo: 115.00,
    descuento: 24,
    preparacion: 'Ayuno de 12 horas',
    popular: true
  },
  {
    id: 'pkg-3',
    nombre: 'Chequeo Ejecutivo',
    descripcion: 'Evaluación integral de salud',
    analisis: [1, 4, 5, 9, 15, 18, 44], // Hemograma, Glucosa, Perfil Lipídico, Perfil Hepático, TSH, Orina, Perfil Renal
    precioRegular: 272.00,
    precioPromo: 199.00,
    descuento: 27,
    preparacion: 'Ayuno de 12 horas',
    popular: false
  },
  {
    id: 'pkg-4',
    nombre: 'Perfil Tiroideo Plus',
    descripcion: 'Evaluación completa de tiroides con anticuerpos',
    analisis: [17, 76, 77], // Perfil Tiroideo, Anti-TPO, Anti-Tg
    precioRegular: 225.00,
    precioPromo: 175.00,
    descuento: 22,
    preparacion: 'Ayuno de 8 horas',
    popular: false
  },
  {
    id: 'pkg-5',
    nombre: 'Chequeo Prenatal',
    descripcion: 'Control básico para gestantes',
    analisis: [1, 2, 4, 18, 112, 114, 115], // Hemograma, Grupo y Rh, Glucosa, Orina, VDRL, HIV, HBsAg
    precioRegular: 160.00,
    precioPromo: 125.00,
    descuento: 22,
    preparacion: 'Ayuno de 8 horas',
    popular: true
  },
  {
    id: 'pkg-6',
    nombre: 'Perfil Preoperatorio',
    descripcion: 'Exámenes requeridos antes de cirugía',
    analisis: [1, 2, 21, 22, 4, 6, 7], // Hemograma, Grupo Rh, TP, TTPa, Glucosa, Creatinina, Urea
    precioRegular: 131.00,
    precioPromo: 99.00,
    descuento: 24,
    preparacion: 'Ayuno de 8 horas',
    popular: false
  },
  {
    id: 'pkg-7',
    nombre: 'Perfil Hepático Plus',
    descripcion: 'Evaluación completa del hígado con hepatitis',
    analisis: [9, 115, 119], // Perfil Hepático, HBsAg, Anti-HCV
    precioRegular: 145.00,
    precioPromo: 115.00,
    descuento: 21,
    preparacion: 'Ayuno de 8 horas',
    popular: false
  },
  {
    id: 'pkg-8',
    nombre: 'Chequeo Diabético',
    descripcion: 'Control integral para pacientes diabéticos',
    analisis: [4, 31, 44, 100, 18], // Glucosa, HbA1c, Perfil Renal, Microalbuminuria, Orina
    precioRegular: 182.00,
    precioPromo: 139.00,
    descuento: 24,
    preparacion: 'Ayuno de 10-12 horas',
    popular: true
  },
  {
    id: 'pkg-9',
    nombre: 'Perfil Prostático',
    descripcion: 'Evaluación completa de próstata',
    analisis: [104, 18, 6], // PSA Total y Libre, Orina, Creatinina
    precioRegular: 115.00,
    precioPromo: 89.00,
    descuento: 23,
    preparacion: 'Abstinencia sexual 48h, ayuno 8h',
    popular: false
  },
  {
    id: 'pkg-10',
    nombre: 'Panel ITS Completo',
    descripcion: 'Screening integral de infecciones de transmisión sexual',
    analisis: [112, 114, 115, 119, 133, 134], // VDRL, HIV, HBsAg, Anti-HCV, Herpes I, Herpes II
    precioRegular: 243.00,
    precioPromo: 185.00,
    descuento: 24,
    preparacion: 'No requiere ayuno',
    popular: false
  },
  {
    id: 'pkg-11',
    nombre: 'Perfil Anemia',
    descripcion: 'Diagnóstico completo de anemia',
    analisis: [1, 29, 92, 93], // Hemograma, Perfil de Hierro, Vitamina B12, Ácido Fólico
    precioRegular: 220.00,
    precioPromo: 169.00,
    descuento: 23,
    preparacion: 'Ayuno de 8 horas',
    popular: false
  },
  {
    id: 'pkg-12',
    nombre: 'Chequeo Mujer 40+',
    descripcion: 'Control preventivo para mujeres mayores de 40',
    analisis: [1, 4, 5, 17, 106, 107, 18], // Hemograma, Glucosa, Perfil Lipídico, Perfil Tiroideo, CA 125, CA 15-3, Orina
    precioRegular: 310.00,
    precioPromo: 239.00,
    descuento: 23,
    preparacion: 'Ayuno de 12 horas',
    popular: true
  },
  {
    id: 'pkg-13',
    nombre: 'Chequeo Varón 40+',
    descripcion: 'Control preventivo para varones mayores de 40',
    analisis: [1, 4, 5, 104, 17, 18], // Hemograma, Glucosa, Perfil Lipídico, PSA Total/Libre, Perfil Tiroideo, Orina
    precioRegular: 297.00,
    precioPromo: 229.00,
    descuento: 23,
    preparacion: 'Ayuno de 12 horas, abstinencia 48h',
    popular: true
  },
  {
    id: 'pkg-14',
    nombre: 'Perfil Reumatológico Plus',
    descripcion: 'Evaluación de enfermedades reumáticas',
    analisis: [61, 62, 56], // Perfil Reumatológico, Anti-CCP, ANA
    precioRegular: 290.00,
    precioPromo: 225.00,
    descuento: 22,
    preparacion: 'Ayuno de 8 horas',
    popular: false
  },
  {
    id: 'pkg-15',
    nombre: 'Perfil TORCH Prenatal',
    descripcion: 'Screening infeccioso prenatal completo',
    analisis: [132, 12], // TORCH, Beta HCG
    precioRegular: 230.00,
    precioPromo: 185.00,
    descuento: 20,
    preparacion: 'No requiere ayuno',
    popular: false
  }
]

// Función para obtener análisis por IDs
export function getAnalysesByIds(ids) {
  return ANALYSES.filter(a => ids.includes(a.id))
}
