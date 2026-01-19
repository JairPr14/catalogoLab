<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits__grid">
        <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <div class="benefit-card__icon" v-html="benefit.icon"></div>
          <h3 class="benefit-card__title">{{ benefit.title }}</h3>
          <p class="benefit-card__text">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  data() {
    return {
      benefits: [
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>`,
          title: 'Resultados Rápidos',
          text: 'Obtén tus resultados en 24-48 horas. Análisis urgentes disponibles.'
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>`,
          title: 'Resultados Confiables',
          text: 'Equipos de última generación y profesionales certificados.'
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>`,
          title: 'Atención Cálida',
          text: 'Personal capacitado para una experiencia cómoda y sin estrés.'
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>`,
          title: 'Pedido por WhatsApp',
          text: 'Selecciona tus análisis y coordina tu cita de forma sencilla.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.benefits {
  padding: 60px 0;
  background: white;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.benefit-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: var(--bg-light);
  transform: translateY(-5px);
}

.benefit-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
  border-radius: var(--radius-lg);
  color: var(--primary);
}

.benefit-card__icon svg {
  width: 32px;
  height: 32px;
}

.benefit-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.benefit-card__text {
  font-size: 0.95rem;
  color: var(--text-gray);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .benefits__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .benefit-card {
    padding: 24px 16px;
  }
}
</style>
