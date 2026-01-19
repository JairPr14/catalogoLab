<template>
  <div id="app">
    <Navbar @open-cart="openCart" />
    <Hero />
    <Benefits />
    <Catalog />
    <Packages />
    <HowToOrder />
    <FAQ />
    <Footer />
    <CartDrawer />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Benefits from './components/Benefits.vue'
import Catalog from './components/Catalog.vue'
import Packages from './components/Packages.vue'
import HowToOrder from './components/HowToOrder.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import CartDrawer from './components/CartDrawer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Benefits,
    Catalog,
    Packages,
    HowToOrder,
    FAQ,
    Footer,
    CartDrawer,
    WhatsAppButton
  },
  methods: {
    openCart() {
      this.$store.dispatch('openCart')
    }
  }
}
</script>

<style>
/* Reset y variables globales */
:root {
  --primary: #0891b2;
  --primary-dark: #0e7490;
  --primary-light: #22d3ee;
  --secondary: #059669;
  --secondary-light: #10b981;
  --accent: #f59e0b;
  --text-dark: #1f2937;
  --text-gray: #6b7280;
  --text-light: #9ca3af;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;
  --border: #e5e7eb;
  --success: #10b981;
  --error: #ef4444;
  --warning: #f59e0b;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --radius-sm: 6px;
  --radius: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Poppins', var(--font-sans);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--bg-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

input, textarea {
  font-family: inherit;
  font-size: inherit;
}

/* Clases utilitarias */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
}

.section-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
  text-align: center;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-gray);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

/* Botones */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.btn-secondary {
  background: var(--secondary);
  color: white;
}

.btn-secondary:hover {
  background: var(--secondary-light);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}

.btn-whatsapp {
  background: #25D366;
  color: white;
}

.btn-whatsapp:hover {
  background: #128C7E;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
}

/* Visualmente oculto pero accesible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
