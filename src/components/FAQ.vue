<template>
  <section id="faq" class="faq section">
    <div class="container">
      <h2 class="section-title">Preguntas Frecuentes</h2>
      <p class="section-subtitle">
        Resolvemos tus dudas más comunes sobre nuestros servicios.
      </p>

      <div class="faq__list">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="faq-item"
          :class="{ 'faq-item--open': openIndex === index }"
        >
          <button 
            class="faq-item__header" 
            @click="toggle(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="faq-item__question">{{ item.question }}</span>
            <svg class="faq-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="faq-item__content">
            <p class="faq-item__answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <div class="faq__cta">
        <p>¿Tienes otra pregunta?</p>
        <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn-whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { CONFIG, generateWhatsAppLink } from '@/config'

export default {
  name: 'FAQ',
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: '¿Necesito cita previa para mis análisis?',
          answer: 'Recomendamos coordinar tu visita por WhatsApp para asegurar una atención rápida y evitar tiempos de espera. Sin embargo, también atendemos sin cita previa según disponibilidad.'
        },
        {
          question: '¿Cuánto tiempo tardan los resultados?',
          answer: 'La mayoría de análisis de rutina tienen resultados en 24 horas. Algunos exámenes especializados como cultivos pueden tomar 48-72 horas. Te indicamos el tiempo específico al momento de tu toma de muestra.'
        },
        {
          question: '¿Cómo me preparo para mis análisis?',
          answer: 'Cada análisis tiene requerimientos específicos. Los más comunes requieren ayuno de 8-12 horas (solo agua). En nuestra página indicamos la preparación de cada examen. Confirma los detalles por WhatsApp antes de tu cita.'
        },
        {
          question: '¿Los precios incluyen IGV?',
          answer: 'Sí, todos los precios mostrados en el catálogo ya incluyen el IGV (18%). En el carrito verás el desglose con el precio base sin IGV, el IGV y el total final para mayor transparencia.'
        },
        {
          question: '¿Aceptan seguros o convenios?',
          answer: 'Trabajamos con atención particular. Para información sobre convenios corporativos o institucionales, por favor contáctanos directamente por WhatsApp.'
        },
        {
          question: '¿Cómo recibo mis resultados?',
          answer: 'Puedes recoger tus resultados físicos en nuestro local o solicitar envío digital por correo electrónico. Indica tu preferencia al momento de la toma de muestra.'
        },
        {
          question: '¿Atienden a menores de edad?',
          answer: 'Sí, atendemos pacientes de todas las edades. Los menores de edad deben venir acompañados de un adulto responsable o apoderado.'
        },
        {
          question: '¿Cuál es su horario de atención?',
          answer: `${CONFIG.SCHEDULE.weekdays}. ${CONFIG.SCHEDULE.saturday}. ${CONFIG.SCHEDULE.sunday}.`
        }
      ]
    }
  },
  computed: {
    whatsappLink() {
      return generateWhatsAppLink('Hola, tengo una consulta sobre sus servicios de análisis clínicos.')
    }
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
.faq {
  background: white;
}

.faq__list {
  max-width: 800px;
  margin: 0 auto 48px;
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
}

.faq-item__question {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
  padding-right: 16px;
}

.faq-item__icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--primary);
  transition: transform 0.3s ease;
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
}

.faq-item__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item--open .faq-item__content {
  max-height: 300px;
}

.faq-item__answer {
  padding: 0 0 20px;
  font-size: 0.95rem;
  color: var(--text-gray);
  line-height: 1.7;
}

.faq__cta {
  text-align: center;
  padding: 32px;
  background: var(--bg-light);
  border-radius: var(--radius-xl);
}

.faq__cta p {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 16px;
}

@media (max-width: 600px) {
  .faq-item__question {
    font-size: 0.95rem;
  }
}
</style>
