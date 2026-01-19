<template>
  <section id="promociones" class="packages section">
    <div class="container">
      <h2 class="section-title">Paquetes y Promociones</h2>
      <p class="section-subtitle">
        Ahorra con nuestros paquetes especiales. Ideales para chequeos preventivos.
      </p>

      <div class="packages__grid">
        <article 
          v-for="pkg in packages" 
          :key="pkg.id" 
          class="package-card"
          :class="{ 'package-card--popular': pkg.popular }"
        >
          <div v-if="pkg.popular" class="package-card__badge">Más popular</div>
          
          <div class="package-card__header">
            <h3 class="package-card__title">{{ pkg.nombre }}</h3>
            <p class="package-card__description">{{ pkg.descripcion }}</p>
          </div>

          <div class="package-card__pricing">
            <div class="package-card__price-old">
              <span>Precio regular:</span>
              <span>{{ formatPrice(pkg.precioRegular) }}</span>
            </div>
            <div class="package-card__price-new">
              <span class="package-card__price-value">{{ formatPrice(pkg.precioPromo) }}</span>
              <span class="package-card__discount">-{{ pkg.descuento }}%</span>
            </div>
          </div>

          <div class="package-card__content">
            <p class="package-card__includes-title">Incluye:</p>
            <ul class="package-card__includes">
              <li v-for="analysis in getPackageAnalyses(pkg)" :key="analysis.id">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ analysis.nombre }}
              </li>
            </ul>

            <div class="package-card__prep">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span>{{ pkg.preparacion }}</span>
            </div>
          </div>

          <button 
            @click="addPackage(pkg)" 
            class="btn btn-primary package-card__btn"
            :class="{ 'btn-secondary': isInCart(pkg.id) }"
          >
            <svg v-if="!isInCart(pkg.id)" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            <svg v-else viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            {{ isInCart(pkg.id) ? 'Agregado' : 'Agregar paquete' }}
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { formatCurrency } from '@/config'
import { PACKAGES, getAnalysesByIds } from '@/data/analyses'

export default {
  name: 'Packages',
  data() {
    return {
      packages: PACKAGES
    }
  },
  computed: {
    ...mapGetters(['isInCart'])
  },
  methods: {
    ...mapActions(['addPackageToCart']),
    
    formatPrice(price) {
      return formatCurrency(price)
    },
    
    getPackageAnalyses(pkg) {
      return getAnalysesByIds(pkg.analisis)
    },
    
    addPackage(pkg) {
      if (!this.isInCart(pkg.id)) {
        this.addPackageToCart(pkg)
      }
    },
    
    isInCart(id) {
      return this.$store.getters.isInCart(id)
    }
  }
}
</script>

<style scoped>
.packages {
  background: white;
}

.packages__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.package-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border: 2px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  transition: all 0.3s ease;
}

.package-card:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.package-card--popular {
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.package-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: var(--primary);
  border-radius: 20px;
  white-space: nowrap;
}

.package-card__header {
  text-align: center;
  margin-bottom: 24px;
}

.package-card__title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.package-card__description {
  font-size: 0.95rem;
  color: var(--text-gray);
}

.package-card__pricing {
  text-align: center;
  padding: 20px;
  background: var(--bg-light);
  border-radius: var(--radius-lg);
  margin-bottom: 24px;
}

.package-card__price-old {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-light);
  text-decoration: line-through;
  margin-bottom: 8px;
}

.package-card__price-new {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.package-card__price-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.package-card__discount {
  padding: 4px 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  background: var(--secondary);
  border-radius: 6px;
}

.package-card__content {
  flex-grow: 1;
  margin-bottom: 24px;
}

.package-card__includes-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.package-card__includes {
  list-style: none;
  margin-bottom: 20px;
}

.package-card__includes li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 0.95rem;
  color: var(--text-dark);
  border-bottom: 1px solid var(--border);
}

.package-card__includes li:last-child {
  border-bottom: none;
}

.package-card__includes svg {
  flex-shrink: 0;
  color: var(--secondary);
}

.package-card__prep {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  font-size: 0.85rem;
  color: var(--text-gray);
  background: rgba(245, 158, 11, 0.1);
  border-radius: var(--radius);
}

.package-card__prep svg {
  flex-shrink: 0;
  color: var(--accent);
}

.package-card__btn {
  width: 100%;
}

@media (max-width: 1024px) {
  .packages__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .packages__grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
