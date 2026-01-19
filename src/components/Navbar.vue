<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__container">
      <!-- Logo -->
      <a href="#inicio" class="navbar__logo">
        <svg class="navbar__logo-icon" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1"/>
          <path d="M20 8v24M8 20h24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <circle cx="20" cy="20" r="6" fill="currentColor"/>
        </svg>
        <span class="navbar__logo-text">{{ clinicName }}</span>
      </a>

      <!-- Menú hamburguesa móvil -->
      <button 
        class="navbar__toggle" 
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Menú de navegación"
      >
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
      </button>

      <!-- Navegación -->
      <nav class="navbar__nav" :class="{ 'navbar__nav--open': isMenuOpen }">
        <ul class="navbar__menu">
          <li v-for="item in menuItems" :key="item.href">
            <a 
              :href="item.href" 
              class="navbar__link"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Botón carrito -->
      <button class="navbar__cart" @click="$emit('open-cart')">
        <svg class="navbar__cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
        <span v-if="cartCount > 0" class="navbar__cart-badge">{{ cartCount }}</span>
        <span class="sr-only">Ver carrito</span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { CONFIG } from '@/config'

export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      clinicName: CONFIG.CLINIC_NAME,
      menuItems: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Catálogo', href: '#catalogo' },
        { label: 'Promociones', href: '#promociones' },
        { label: 'Cómo pedir', href: '#como-pedir' },
        { label: 'Preguntas', href: '#faq' },
        { label: 'Contacto', href: '#contacto' }
      ]
    }
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.navbar--scrolled {
  box-shadow: var(--shadow);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 24px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  font-weight: 700;
  font-size: 1.1rem;
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
}

.navbar__logo-text {
  font-family: var(--font-display);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 4px;
}

.navbar__toggle-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar__nav {
  flex: 1;
}

.navbar__menu {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  list-style: none;
}

.navbar__link {
  display: block;
  padding: 8px 16px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-gray);
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.navbar__link:hover {
  color: var(--primary);
  background: rgba(8, 145, 178, 0.08);
}

.navbar__cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  background: var(--bg-light);
  transition: all 0.2s ease;
}

.navbar__cart:hover {
  background: var(--primary);
  color: white;
}

.navbar__cart-icon {
  width: 22px;
  height: 22px;
}

.navbar__cart-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: var(--secondary);
  border-radius: 10px;
}

/* Mobile */
@media (max-width: 900px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-lg);
  }

  .navbar__nav--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar__menu {
    flex-direction: column;
    gap: 4px;
  }

  .navbar__link {
    width: 100%;
    text-align: center;
    padding: 12px 16px;
  }
}

@media (max-width: 480px) {
  .navbar__logo-text {
    font-size: 0.95rem;
  }
}
</style>
