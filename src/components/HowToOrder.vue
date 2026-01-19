<template>
  <section id="como-pedir" class="how-to-order section">
    <div class="container">
      <h2 class="section-title">¿Cómo hacer tu pedido?</h2>
      <p class="section-subtitle">
        Solicitar tus análisis es muy fácil. Solo sigue estos 3 pasos.
      </p>

      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step__number">{{ index + 1 }}</div>
          <div class="step__icon" v-html="step.icon"></div>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__text">{{ step.text }}</p>
        </div>
      </div>

      <div class="how-to-order__cta">
        <a href="#catalogo" class="btn btn-primary btn-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          Ir al catálogo
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowToOrder',
  data() {
    return {
      steps: [
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>`,
          title: 'Selecciona tus análisis',
          text: 'Navega por nuestro catálogo, busca lo que necesitas y agrega los análisis a tu carrito.'
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>`,
          title: 'Revisa y confirma',
          text: 'Verifica tu carrito con los análisis seleccionados. Los precios mostrados ya incluyen IGV (18%).'
        },
        {
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>`,
          title: 'Envía por WhatsApp',
          text: 'Presiona el botón de WhatsApp y coordina tu cita de toma de muestra con nosotros.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.how-to-order {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 48px;
}

.step {
  position: relative;
  text-align: center;
  padding: 40px 24px;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow);
}

.step__number {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  background: var(--primary);
  border-radius: 50%;
}

.step__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
  border-radius: 50%;
  color: var(--primary);
}

.step__icon svg {
  width: 36px;
  height: 36px;
}

.step__title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.step__text {
  font-size: 0.95rem;
  color: var(--text-gray);
  line-height: 1.6;
}

.how-to-order__cta {
  text-align: center;
}

/* Conectores entre pasos */
@media (min-width: 900px) {
  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -20px;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-light), var(--primary));
    transform: translateY(-50%);
  }
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 48px;
    gap: 30px;
  }

  .step {
    padding: 32px 20px;
  }
}
</style>
