import Vue from 'vue'
import Vuex from 'vuex'
import { CONFIG, formatCurrency } from '@/config'

Vue.use(Vuex)

// Cargar carrito desde localStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('clinica_cart')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.warn('Error loading cart from localStorage:', e)
  }
  return []
}

// Guardar carrito en localStorage
function saveCartToStorage(cart) {
  try {
    localStorage.setItem('clinica_cart', JSON.stringify(cart))
  } catch (e) {
    console.warn('Error saving cart to localStorage:', e)
  }
}

export default new Vuex.Store({
  state: {
    cart: loadCartFromStorage(),
    patientName: '',
    observations: '',
    appointmentDate: '',
    isCartOpen: false
  },

  getters: {
    cartItems: state => state.cart,
    
    cartCount: state => {
      return state.cart.reduce((total, item) => total + item.cantidad, 0)
    },
    
    subtotal: state => {
      // Los precios ya incluyen IGV, calculamos el precio base
      return state.cart.reduce((total, item) => {
        const precioSinIGV = item.precioBase / (1 + CONFIG.IGV_RATE)
        return total + (precioSinIGV * item.cantidad)
      }, 0)
    },
    
    igv: (state, getters) => {
      return getters.subtotal * CONFIG.IGV_RATE
    },
    
    total: (state, getters) => {
      // El total son los precios finales (que ya incluyen IGV)
      return state.cart.reduce((total, item) => {
        return total + (item.precioBase * item.cantidad)
      }, 0)
    },
    
    formattedSubtotal: (state, getters) => {
      return formatCurrency(getters.subtotal)
    },
    
    formattedIgv: (state, getters) => {
      return formatCurrency(getters.igv)
    },
    
    formattedTotal: (state, getters) => {
      return formatCurrency(getters.total)
    },
    
    isCartEmpty: state => state.cart.length === 0,
    
    isInCart: state => id => {
      return state.cart.some(item => item.id === id)
    },
    
    getItemQuantity: state => id => {
      const item = state.cart.find(item => item.id === id)
      return item ? item.cantidad : 0
    }
  },

  mutations: {
    ADD_TO_CART(state, item) {
      const existing = state.cart.find(i => i.id === item.id)
      if (existing) {
        existing.cantidad++
      } else {
        state.cart.push({
          ...item,
          cantidad: 1
        })
      }
      saveCartToStorage(state.cart)
    },
    
    REMOVE_FROM_CART(state, id) {
      const index = state.cart.findIndex(item => item.id === id)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
      saveCartToStorage(state.cart)
    },
    
    UPDATE_QUANTITY(state, { id, cantidad }) {
      const item = state.cart.find(i => i.id === id)
      if (item) {
        if (cantidad <= 0) {
          const index = state.cart.findIndex(i => i.id === id)
          state.cart.splice(index, 1)
        } else {
          item.cantidad = cantidad
        }
      }
      saveCartToStorage(state.cart)
    },
    
    CLEAR_CART(state) {
      state.cart = []
      saveCartToStorage(state.cart)
    },
    
    SET_PATIENT_NAME(state, name) {
      state.patientName = name
    },
    
    SET_OBSERVATIONS(state, obs) {
      state.observations = obs
    },
    
    SET_APPOINTMENT_DATE(state, date) {
      state.appointmentDate = date
    },
    
    TOGGLE_CART(state, value) {
      state.isCartOpen = value !== undefined ? value : !state.isCartOpen
    }
  },

  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item)
    },
    
    removeFromCart({ commit }, id) {
      commit('REMOVE_FROM_CART', id)
    },
    
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload)
    },
    
    incrementQuantity({ commit, state }, id) {
      const item = state.cart.find(i => i.id === id)
      if (item) {
        commit('UPDATE_QUANTITY', { id, cantidad: item.cantidad + 1 })
      }
    },
    
    decrementQuantity({ commit, state }, id) {
      const item = state.cart.find(i => i.id === id)
      if (item) {
        commit('UPDATE_QUANTITY', { id, cantidad: item.cantidad - 1 })
      }
    },
    
    clearCart({ commit }) {
      commit('CLEAR_CART')
      commit('SET_PATIENT_NAME', '')
      commit('SET_OBSERVATIONS', '')
      commit('SET_APPOINTMENT_DATE', '')
    },
    
    setPatientName({ commit }, name) {
      commit('SET_PATIENT_NAME', name)
    },
    
    setObservations({ commit }, obs) {
      commit('SET_OBSERVATIONS', obs)
    },
    
    setAppointmentDate({ commit }, date) {
      commit('SET_APPOINTMENT_DATE', date)
    },
    
    openCart({ commit }) {
      commit('TOGGLE_CART', true)
    },
    
    closeCart({ commit }) {
      commit('TOGGLE_CART', false)
    },
    
    toggleCart({ commit }) {
      commit('TOGGLE_CART')
    },
    
    // Agregar paquete al carrito
    addPackageToCart({ commit }, pkg) {
      commit('ADD_TO_CART', {
        id: pkg.id,
        nombre: pkg.nombre,
        precioBase: pkg.precioPromo,
        esPromo: true,
        descripcion: pkg.descripcion
      })
    }
  }
})
