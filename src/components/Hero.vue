<template>
  <section id="inicio" class="hero">
    <div class="container hero__container">
      <div class="hero__content">
        <span class="hero__badge">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
          </svg>
          Laboratorio Certificado
        </span>
        <h1 class="hero__title">
          Tus análisis clínicos,<br>
          <span class="hero__title-highlight">fácil y rápido</span>
        </h1>
        <p class="hero__subtitle">
          Selecciona tus exámenes, revisa el total y envía tu pedido por WhatsApp. 
          Resultados confiables con la mejor atención.
        </p>
        <div class="hero__actions">
          <a href="#catalogo" class="btn btn-primary btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            Ver catálogo
          </a>
          <a href="#promociones" class="btn btn-outline btn-lg">
            Ver promociones
          </a>
        </div>
        <p class="hero__note">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Precios referenciales. Confirma preparación y disponibilidad por WhatsApp.
        </p>
      </div>
      <div class="hero__visual">
        <div class="hero__card hero__card--1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Resultados<br>en 24h</span>
        </div>
        <div class="hero__card hero__card--2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span>+50<br>Análisis</span>
        </div>
        <div class="hero__card hero__card--3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <span>Atención<br>Personalizada</span>
        </div>
        <div class="hero__blob"></div>
      </div>
    </div>
    <div class="hero__wave">
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  position: relative;
  padding: 140px 0 100px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdfa 100%);
  overflow: hidden;
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--secondary);
  background: rgba(5, 150, 105, 0.1);
  border-radius: 50px;
  margin-bottom: 24px;
}

.hero__title {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-dark);
  margin-bottom: 24px;
}

.hero__title-highlight {
  color: var(--primary);
  position: relative;
}

.hero__subtitle {
  font-size: 1.2rem;
  color: var(--text-gray);
  max-width: 500px;
  margin-bottom: 32px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.hero__note {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-light);
}

.hero__note svg {
  flex-shrink: 0;
  color: var(--accent);
}

.hero__visual {
  position: relative;
  height: 400px;
}

.hero__card {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-dark);
  animation: float 6s ease-in-out infinite;
}

.hero__card svg {
  color: var(--primary);
}

.hero__card--1 {
  top: 20px;
  right: 40px;
  animation-delay: 0s;
}

.hero__card--2 {
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  animation-delay: 2s;
}

.hero__card--3 {
  bottom: 20px;
  right: 80px;
  animation-delay: 4s;
}

.hero__blob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  opacity: 0.15;
  animation: morph 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.hero__card--2 {
  animation: float2 6s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% - 15px));
  }
}

@keyframes morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;
}

.hero__wave svg {
  width: 100%;
  height: 80px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero__title {
    font-size: 2.8rem;
  }
  
  .hero__visual {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 80px;
  }

  .hero__container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero__title {
    font-size: 2.2rem;
  }

  .hero__subtitle {
    margin: 0 auto 32px;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__note {
    justify-content: center;
    text-align: center;
  }

  .hero__visual {
    height: 280px;
    order: -1;
  }

  .hero__card {
    padding: 16px;
    font-size: 0.8rem;
  }

  .hero__card svg {
    width: 24px;
    height: 24px;
  }

  .hero__card--1 {
    top: 10px;
    right: 10px;
  }

  .hero__card--2 {
    left: 10px;
  }

  .hero__card--3 {
    bottom: 10px;
    right: 30px;
  }

  .hero__blob {
    width: 200px;
    height: 200px;
  }
}
</style>
