<template>
  <footer id="contacto" class="footer">
    <div class="container">
      <div class="footer__grid">
        <!-- Columna 1: Logo e info -->
        <div class="footer__brand">
          <a href="#inicio" class="footer__logo">
            <svg class="footer__logo-icon" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.2"/>
              <path d="M20 8v24M8 20h24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              <circle cx="20" cy="20" r="6" fill="currentColor"/>
            </svg>
            <span>{{ clinicName }}</span>
          </a>
          <p class="footer__tagline">
            Análisis clínicos de calidad con atención personalizada. 
            Tu salud es nuestra prioridad.
          </p>
          <div class="footer__social">
            <a :href="social.facebook" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a :href="social.instagram" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a :href="social.tiktok" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
              <a :href="social.website" target="_blank" rel="noopener" aria-label="Website">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div class="footer__links">
          <h4 class="footer__title">Enlaces rápidos</h4>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#promociones">Promociones</a>
            <a href="#como-pedir">Cómo pedir</a>
            <a href="#faq">Preguntas frecuentes</a>
          </nav>
        </div>

        <!-- Columna 3: Contacto -->
        <div class="footer__contact">
          <h4 class="footer__title">Contacto</h4>
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>{{ address }}</span>
          </div>
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>{{ phone }}</span>
          </div>
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>{{ email }}</span>
          </div>
        </div>

        <!-- Columna 4: Horarios -->
        <div class="footer__hours">
          <h4 class="footer__title">Horario de atención</h4>
          <div class="footer__schedule">
            <p>{{ schedule.weekdays }}</p>
            <p>{{ schedule.saturday }}</p>
            <p>{{ schedule.sunday }}</p>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} {{ clinicName }}. Todos los derechos reservados.
        </p>
        <div class="footer__legal">
          <a href="#">Aviso de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { CONFIG } from '@/config'

export default {
  name: 'Footer',
  data() {
    return {
      clinicName: CONFIG.CLINIC_NAME,
      address: CONFIG.CLINIC_ADDRESS,
      phone: CONFIG.CLINIC_PHONE,
      email: CONFIG.CLINIC_EMAIL,
      schedule: CONFIG.SCHEDULE,
      social: CONFIG.SOCIAL
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--text-dark);
  color: white;
  padding: 60px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.footer__logo-icon {
  width: 36px;
  height: 36px;
  color: var(--primary-light);
}

.footer__tagline {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.footer__social a:hover {
  background: var(--primary);
  transform: translateY(-2px);
}

.footer__social svg {
  width: 18px;
  height: 18px;
}

.footer__title {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.footer__links nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__links a {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer__links a:hover {
  color: var(--primary-light);
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer__contact-item svg {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--primary-light);
  margin-top: 2px;
}

.footer__schedule p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 0;
}

.footer__copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer__legal {
  display: flex;
  gap: 24px;
}

.footer__legal a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease;
}

.footer__legal a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer__bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
