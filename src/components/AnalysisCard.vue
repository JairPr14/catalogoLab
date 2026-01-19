<template>
  <article class="analysis-card">
    <div class="analysis-card__header">
      <span class="analysis-card__category">{{ categoryName }}</span>
      <span class="analysis-card__time">
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
        </svg>
        {{ analysis.tiempoResultado }}
      </span>
    </div>

    <h3 class="analysis-card__title">{{ analysis.nombre }}</h3>
    
    <p class="analysis-card__description">{{ analysis.incluye }}</p>

    <div class="analysis-card__info">
      <div class="analysis-card__prep">
        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <span>{{ analysis.preparacion }}</span>
      </div>
    </div>

    <div class="analysis-card__footer">
      <div class="analysis-card__price">
        <span class="analysis-card__price-label">Precio final</span>
        <span class="analysis-card__price-value">{{ formattedPrice }}</span>
      </div>

      <div class="analysis-card__actions">
        <template v-if="isInCart">
          <div class="analysis-card__quantity">
            <button 
              @click="decrementQuantity" 
              class="analysis-card__qty-btn"
              aria-label="Disminuir cantidad"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </button>
            <span class="analysis-card__qty-value">{{ itemQuantity }}</span>
            <button 
              @click="incrementQuantity" 
              class="analysis-card__qty-btn"
              aria-label="Aumentar cantidad"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </template>
        <template v-else>
          <button @click="addToCart" class="btn btn-primary btn-sm">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
            Agregar
          </button>
        </template>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { formatCurrency } from '@/config'
import { CATEGORIES } from '@/data/analyses'

export default {
  name: 'AnalysisCard',
  props: {
    analysis: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isInCart', 'getItemQuantity']),
    
    categoryName() {
      const cat = CATEGORIES.find(c => c.id === this.analysis.categoria)
      return cat ? cat.name : this.analysis.categoria
    },
    
    formattedPrice() {
      return formatCurrency(this.analysis.precioBase)
    },
    
    isInCart() {
      return this.$store.getters.isInCart(this.analysis.id)
    },
    
    itemQuantity() {
      return this.$store.getters.getItemQuantity(this.analysis.id)
    }
  },
  methods: {
    ...mapActions(['addToCart', 'incrementQuantity', 'decrementQuantity']),
    
    addToCart() {
      this.$store.dispatch('addToCart', {
        id: this.analysis.id,
        nombre: this.analysis.nombre,
        precioBase: this.analysis.precioBase,
        categoria: this.analysis.categoria
      })
    },
    
    incrementQuantity() {
      this.$store.dispatch('incrementQuantity', this.analysis.id)
    },
    
    decrementQuantity() {
      this.$store.dispatch('decrementQuantity', this.analysis.id)
    }
  }
}
</script>

<style scoped>
.analysis-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.analysis-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.analysis-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.analysis-card__category {
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--primary);
  background: rgba(8, 145, 178, 0.1);
  border-radius: 4px;
}

.analysis-card__time {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: var(--text-gray);
}

.analysis-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.analysis-card__description {
  font-size: 0.9rem;
  color: var(--text-gray);
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
}

.analysis-card__info {
  margin-bottom: 16px;
}

.analysis-card__prep {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  background: var(--bg-light);
  border-radius: var(--radius);
  font-size: 0.85rem;
  color: var(--text-gray);
}

.analysis-card__prep svg {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 2px;
}

.analysis-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.analysis-card__price {
  display: flex;
  flex-direction: column;
}

.analysis-card__price-label {
  font-size: 0.75rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.analysis-card__price-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.analysis-card__actions {
  display: flex;
  align-items: center;
}

.analysis-card__quantity {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  background: var(--bg-light);
  border-radius: var(--radius);
}

.analysis-card__qty-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  color: var(--primary);
  transition: all 0.2s ease;
}

.analysis-card__qty-btn:hover {
  background: var(--primary);
  color: white;
}

.analysis-card__qty-value {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
  color: var(--text-dark);
}
</style>
