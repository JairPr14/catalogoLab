<template>
  <div>
    <!-- Overlay -->
    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="cart-overlay" 
        @click="closeCart"
      ></div>
    </transition>

    <!-- Drawer -->
    <transition name="slide">
      <aside v-if="isOpen" class="cart-drawer">
        <div class="cart-drawer__header">
          <h2 class="cart-drawer__title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
            </svg>
            Mi carrito
            <span v-if="cartCount > 0" class="cart-drawer__count">({{ cartCount }})</span>
          </h2>
          <button @click="closeCart" class="cart-drawer__close" aria-label="Cerrar carrito">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Estado vacío -->
        <div v-if="isCartEmpty" class="cart-drawer__empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <h3>Tu carrito está vacío</h3>
          <p>Agrega análisis desde el catálogo para comenzar.</p>
          <button @click="goToCatalog" class="btn btn-primary">
            Ver catálogo
          </button>
        </div>

        <!-- Lista de items -->
        <div v-else class="cart-drawer__content">
          <div class="cart-drawer__items">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="cart-item__info">
                <h4 class="cart-item__name">{{ item.nombre }}</h4>
                <span v-if="item.esPromo" class="cart-item__badge">Paquete</span>
                <p class="cart-item__price">{{ formatPrice(item.precioBase) }} c/u</p>
              </div>
              <div class="cart-item__actions">
                <div class="cart-item__quantity">
                  <button 
                    @click="decrementQuantity(item.id)" 
                    class="cart-item__qty-btn"
                    aria-label="Disminuir"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                  <span class="cart-item__qty-value">{{ item.cantidad }}</span>
                  <button 
                    @click="incrementQuantity(item.id)" 
                    class="cart-item__qty-btn"
                    aria-label="Aumentar"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                </div>
                <button 
                  @click="removeFromCart(item.id)" 
                  class="cart-item__remove"
                  aria-label="Eliminar"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Totales -->
          <div class="cart-drawer__totals">
            <div class="cart-drawer__total-row">
              <span>Subtotal (sin IGV)</span>
              <span>{{ formattedSubtotal }}</span>
            </div>
            <div class="cart-drawer__total-row cart-drawer__total-row--igv">
              <span>IGV ({{ igvPercentage }}%)</span>
              <span>{{ formattedIgv }}</span>
            </div>
            <div class="cart-drawer__total-row cart-drawer__total-row--total">
              <span>Total a pagar</span>
              <span>{{ formattedTotal }}</span>
            </div>
          </div>

          <!-- Campos opcionales -->
          <div class="cart-drawer__fields">
            <div class="cart-drawer__field">
              <label for="patient-name">Nombre del paciente (opcional)</label>
              <input 
                id="patient-name"
                type="text" 
                v-model="patientName"
                placeholder="Ingresa tu nombre"
                @input="updatePatientName"
              >
            </div>
            <div class="cart-drawer__field">
              <label for="observations">Observaciones (opcional)</label>
              <textarea 
                id="observations"
                v-model="observations"
                placeholder="Ej: Prefiero cita en la mañana"
                rows="2"
                @input="updateObservations"
              ></textarea>
            </div>
            <div class="cart-drawer__field">
              <label for="appointment-date">Fecha preferida de cita (opcional)</label>
              <input 
                id="appointment-date"
                type="date"
                v-model="appointmentDate"
                @input="updateAppointmentDate"
              >
            </div>
          </div>
          <!-- Acciones -->
          <div class="cart-drawer__actions">
            <a 
              :href="whatsappLink" 
              target="_blank" 
              rel="noopener" 
              class="btn btn-whatsapp btn-lg cart-drawer__whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar pedido por WhatsApp
            </a>
            <button @click="clearCart" class="btn btn-outline cart-drawer__clear">
              Vaciar carrito
            </button>
          </div>

          <p class="cart-drawer__note">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            Precios referenciales. Confirma preparación y disponibilidad por WhatsApp.
          </p>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import { CONFIG, formatCurrency, generateWhatsAppLink } from '@/config'

export default {
  name: 'CartDrawer',
  data() {
    return {
      patientName: '',
      observations: '',
      appointmentDate: '',
      igvPercentage: CONFIG.IGV_RATE * 100
    }
  },
  computed: {
    ...mapState(['isCartOpen']),
    ...mapGetters([
      'cartItems',
      'cartCount',
      'isCartEmpty',
      'subtotal',
      'igv',
      'total',
      'formattedSubtotal',
      'formattedIgv',
      'formattedTotal'
    ]),
    
    isOpen() {
      return this.isCartOpen
    },
    
    whatsappLink() {
      return generateWhatsAppLink(this.generateMessage())
    }
  },
  watch: {
    isCartOpen(val) {
      if (val) {
        // Cargar valores del store
        this.patientName = this.$store.state.patientName
        this.observations = this.$store.state.observations
        this.appointmentDate = this.$store.state.appointmentDate
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  methods: {
    ...mapActions([
      'closeCart',
      'removeFromCart',
      'incrementQuantity',
      'decrementQuantity',
      'clearCart',
      'setPatientName',
      'setObservations',
      'setAppointmentDate'
    ]),
    
    formatPrice(price) {
      return formatCurrency(price)
    },
    
    updatePatientName() {
      this.setPatientName(this.patientName)
    },
    
    updateObservations() {
      this.setObservations(this.observations)
    },
    
    updateAppointmentDate() {
      this.setAppointmentDate(this.appointmentDate)
    },
    
    goToCatalog() {
      this.closeCart()
      window.location.hash = '#catalogo'
    },
    
    generateMessage() {
      let message = '🏥 *PEDIDO DE ANÁLISIS CLÍNICOS*\n'
      message += `📋 *${CONFIG.CLINIC_NAME}*\n`
      message += '━━━━━━━━━━━━━━━━━━━━━\n\n'
      
      if (this.patientName.trim()) {
        message += `👤 *Paciente:* ${this.patientName.trim()}\n\n`
      }
      
      message += '📝 *Detalle del pedido:*\n'
      
      this.cartItems.forEach((item, index) => {
        const itemTotal = formatCurrency(item.precioBase * item.cantidad)
        message += `${index + 1}. ${item.nombre}\n`
        message += `   ${item.cantidad} x ${formatCurrency(item.precioBase)} = ${itemTotal}\n`
      })
      
      message += '\n━━━━━━━━━━━━━━━━━━━━━\n'
      message += `💰 Subtotal: ${this.formattedSubtotal}\n`
      message += `📊 IGV (${this.igvPercentage}%): ${this.formattedIgv}\n`
      message += `✅ *TOTAL: ${this.formattedTotal}*\n`
      message += '━━━━━━━━━━━━━━━━━━━━━\n\n'
      
      if (this.observations.trim()) {
        message += `📌 *Observaciones:*\n${this.observations.trim()}\n\n`
      }
            if (this.appointmentDate) {
        const dateObj = new Date(this.appointmentDate)
        const formattedDate = dateObj.toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
        message += `📅 *Fecha preferida:* ${formattedDate}\n\n`
      }
            message += '¿Podrían confirmarme disponibilidad y horario de toma de muestra? 🙏'
      
      return message
    }
  }
}
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  background: white;
  z-index: 1200;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
}

.cart-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  background: white;
}

.cart-drawer__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-dark);
}

.cart-drawer__title svg {
  color: var(--primary);
}

.cart-drawer__count {
  font-weight: 400;
  color: var(--text-gray);
}

.cart-drawer__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius);
  color: var(--text-gray);
  transition: all 0.2s ease;
}

.cart-drawer__close:hover {
  background: var(--bg-light);
  color: var(--text-dark);
}

.cart-drawer__close svg {
  width: 20px;
  height: 20px;
}

/* Estado vacío */
.cart-drawer__empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  text-align: center;
}

.cart-drawer__empty svg {
  width: 80px;
  height: 80px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.cart-drawer__empty h3 {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.cart-drawer__empty p {
  color: var(--text-gray);
  margin-bottom: 24px;
}

/* Contenido */
.cart-drawer__content {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.cart-drawer__items {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item__info {
  flex: 1;
  min-width: 0;
}

.cart-item__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 4px;
  line-height: 1.3;
}

.cart-item__badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--secondary);
  background: rgba(5, 150, 105, 0.1);
  border-radius: 4px;
  margin-bottom: 4px;
}

.cart-item__price {
  font-size: 0.85rem;
  color: var(--text-gray);
}

.cart-item__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cart-item__quantity {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  background: var(--bg-light);
  border-radius: var(--radius-sm);
}

.cart-item__qty-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  color: var(--primary);
  transition: all 0.2s ease;
}

.cart-item__qty-btn:hover {
  background: var(--primary);
  color: white;
}

.cart-item__qty-value {
  min-width: 20px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
}

.cart-item__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  color: var(--error);
  transition: all 0.2s ease;
}

.cart-item__remove:hover {
  background: rgba(239, 68, 68, 0.1);
}

/* Totales */
.cart-drawer__totals {
  padding: 20px 24px;
  background: var(--bg-light);
}

.cart-drawer__total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 0.95rem;
  color: var(--text-gray);
}

.cart-drawer__total-row--igv {
  border-bottom: 1px dashed var(--border);
  padding-bottom: 12px;
  margin-bottom: 4px;
}

.cart-drawer__total-row--total {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark);
  padding-top: 8px;
}

.cart-drawer__total-row--total span:last-child {
  color: var(--primary-dark);
}

/* Campos */
.cart-drawer__fields {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
}

.cart-drawer__field {
  margin-bottom: 16px;
}

.cart-drawer__field:last-child {
  margin-bottom: 0;
}

.cart-drawer__field label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-gray);
  margin-bottom: 8px;
}

.cart-drawer__field input,
.cart-drawer__field textarea {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.95rem;
  transition: all 0.2s ease;
  resize: none;
}

.cart-drawer__field input:focus,
.cart-drawer__field textarea:focus {
  outline: none;
  border-color: var(--primary);
}

/* Acciones */
.cart-drawer__actions {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-drawer__whatsapp {
  width: 100%;
}

.cart-drawer__clear {
  width: 100%;
}

.cart-drawer__note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 16px 24px;
  font-size: 0.8rem;
  color: var(--text-light);
  background: var(--bg-light);
}

.cart-drawer__note svg {
  flex-shrink: 0;
  color: var(--accent);
  margin-top: 1px;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 480px) {
  .cart-drawer {
    max-width: 100%;
  }
}
</style>
