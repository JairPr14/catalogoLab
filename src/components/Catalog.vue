<template>
  <section id="catalogo" class="catalog section">
    <div class="container">
      <h2 class="section-title">Catálogo de Análisis</h2>
      <p class="section-subtitle">
        Encuentra el análisis que necesitas. Selecciona y agrégalo a tu carrito.
      </p>

      <!-- Filtros y búsqueda -->
      <div class="catalog__controls">
        <div class="catalog__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="catalog__search-icon">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar análisis por nombre, categoría..."
            class="catalog__search-input"
            aria-label="Buscar análisis"
            @keyup.enter="focusResults"
          >
          <button 
            v-if="searchQuery" 
            @click="clearSearch" 
            class="catalog__search-clear"
            aria-label="Limpiar búsqueda"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="catalog__filters">
          <div class="catalog__filter-group">
            <label class="catalog__filter-label" for="category-filter">Categoría</label>
            <select 
              id="category-filter"
              v-model="selectedCategory" 
              class="catalog__select"
              aria-label="Filtrar por categoría"
            >
              <option v-for="cat in categoriesWithCount" :key="cat.id" :value="cat.id">
                {{ cat.name }} ({{ cat.count }})
              </option>
            </select>
          </div>

          <div class="catalog__filter-group">
            <label class="catalog__filter-label" for="sort-filter">Ordenar por</label>
            <select 
              id="sort-filter"
              v-model="sortBy" 
              class="catalog__select"
              aria-label="Ordenar análisis"
            >
              <option value="relevance" v-if="searchQuery">Relevancia</option>
              <option value="name-asc">Nombre (A-Z)</option>
              <option value="name-desc">Nombre (Z-A)</option>
              <option value="price-asc">Precio (menor a mayor)</option>
              <option value="price-desc">Precio (mayor a menor)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Búsquedas sugeridas -->
      <div class="catalog__suggestions" v-if="!searchQuery && !hasActiveFilters">
        <span class="catalog__suggestions-label">Búsquedas populares:</span>
        <button 
          v-for="term in popularSearches" 
          :key="term" 
          @click="searchQuery = term"
          class="catalog__suggestion-tag"
        >
          {{ term }}
        </button>
      </div>

      <!-- Contador de resultados -->
      <div class="catalog__results-header" v-if="filteredAnalyses.length > 0">
        <p class="catalog__results-count">
          <strong>{{ filteredAnalyses.length }}</strong> {{ filteredAnalyses.length === 1 ? 'análisis encontrado' : 'análisis encontrados' }}
          <span v-if="searchQuery" class="catalog__results-query">
            para "<strong>{{ searchQuery }}</strong>"
          </span>
          <span v-if="selectedCategory !== 'all'" class="catalog__results-category">
            en <strong>{{ getCategoryName(selectedCategory) }}</strong>
          </span>
        </p>
        <button 
          v-if="hasActiveFilters" 
          @click="resetFilters" 
          class="catalog__clear-filters"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          Limpiar filtros
        </button>
      </div>

      <!-- Grid de análisis -->
      <div class="catalog__grid" v-if="filteredAnalyses.length > 0" ref="resultsGrid">
        <AnalysisCard 
          v-for="analysis in paginatedAnalyses" 
          :key="analysis.id"
          :analysis="analysis"
        />
      </div>

      <!-- Paginación -->
      <div class="catalog__pagination" v-if="totalPages > 1">
        <button 
          @click="currentPage--" 
          :disabled="currentPage === 1"
          class="catalog__page-btn"
          aria-label="Página anterior"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
        <span class="catalog__page-info">
          Página {{ currentPage }} de {{ totalPages }}
        </span>
        <button 
          @click="currentPage++" 
          :disabled="currentPage === totalPages"
          class="catalog__page-btn"
          aria-label="Página siguiente"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>

      <!-- Estado vacío -->
      <div class="catalog__empty" v-if="filteredAnalyses.length === 0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3>No se encontraron análisis</h3>
        <p v-if="searchQuery">
          No se encontraron resultados para "<strong>{{ searchQuery }}</strong>"
        </p>
        <p v-else-if="selectedCategory !== 'all'">
          No hay análisis en la categoría seleccionada.
        </p>
        <p v-else>
          Intenta con otros términos de búsqueda o cambia los filtros.
        </p>
        <div class="catalog__empty-actions">
          <button @click="resetFilters" class="btn btn-outline">
            Limpiar filtros
          </button>
          <button v-if="searchQuery" @click="searchSimilar" class="btn btn-primary">
            Buscar similares
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnalysisCard from './AnalysisCard.vue'
import { ANALYSES, CATEGORIES } from '@/data/analyses'

export default {
  name: 'Catalog',
  components: {
    AnalysisCard
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'all',
      sortBy: 'name-asc',
      analyses: ANALYSES,
      categories: CATEGORIES,
      currentPage: 1,
      itemsPerPage: 12,
      popularSearches: ['Hemograma', 'Glucosa', 'Perfil tiroideo', 'PSA', 'Orina', 'Hepatitis']
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1
      // Cambiar a ordenar por relevancia cuando hay búsqueda
      if (this.searchQuery && this.sortBy !== 'relevance') {
        this.sortBy = 'relevance'
      } else if (!this.searchQuery && this.sortBy === 'relevance') {
        this.sortBy = 'name-asc'
      }
    },
    selectedCategory() {
      this.currentPage = 1
    },
    sortBy() {
      this.currentPage = 1
    }
  },
  computed: {
    // Normalizar texto (quitar acentos)
    normalizeText() {
      return (text) => {
        if (!text) return ''
        return text.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim()
      }
    },
    
    // Verificar si hay filtros activos
    hasActiveFilters() {
      return this.searchQuery !== '' || this.selectedCategory !== 'all'
    },
    
    // Categorías con conteo de análisis
    categoriesWithCount() {
      return this.categories.map(cat => {
        let count
        if (cat.id === 'all') {
          count = this.analyses.length
        } else {
          count = this.analyses.filter(a => a.categoria === cat.id).length
        }
        return { ...cat, count }
      })
    },
    
    filteredAnalyses() {
      let result = [...this.analyses]
      const normalize = this.normalizeText

      // Filtrar por búsqueda
      if (this.searchQuery.trim()) {
        const query = normalize(this.searchQuery)
        const queryWords = query.split(/\s+/).filter(w => w.length > 1)
        
        result = result.map(a => {
          const nombre = normalize(a.nombre)
          const incluye = normalize(a.incluye)
          const categoria = normalize(a.categoria)
          const preparacion = normalize(a.preparacion)
          const observaciones = normalize(a.observaciones)
          
          // Calcular puntuación de relevancia
          let score = 0
          
          // Coincidencia exacta en nombre tiene mayor peso
          if (nombre.includes(query)) {
            score += 100
          }
          
          // Coincidencia al inicio del nombre
          if (nombre.startsWith(query)) {
            score += 50
          }
          
          // Coincidencia en otros campos
          if (incluye.includes(query)) score += 30
          if (categoria.includes(query)) score += 20
          if (preparacion.includes(query)) score += 10
          if (observaciones.includes(query)) score += 10
          
          // Búsqueda por palabras individuales
          queryWords.forEach(word => {
            if (nombre.includes(word)) score += 15
            if (incluye.includes(word)) score += 8
            if (categoria.includes(word)) score += 5
          })
          
          return { ...a, relevanceScore: score }
        }).filter(a => a.relevanceScore > 0)
      }

      // Filtrar por categoría
      if (this.selectedCategory !== 'all') {
        result = result.filter(a => a.categoria === this.selectedCategory)
      }

      // Ordenar
      result.sort((a, b) => {
        switch (this.sortBy) {
          case 'relevance':
            return (b.relevanceScore || 0) - (a.relevanceScore || 0)
          case 'name-asc':
            return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
          case 'name-desc':
            return b.nombre.localeCompare(a.nombre, 'es', { sensitivity: 'base' })
          case 'price-asc':
            return a.precioBase - b.precioBase
          case 'price-desc':
            return b.precioBase - a.precioBase
          default:
            return 0
        }
      })

      return result
    },
    
    // Paginación
    totalPages() {
      return Math.ceil(this.filteredAnalyses.length / this.itemsPerPage)
    },
    
    paginatedAnalyses() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredAnalyses.slice(start, end)
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = ''
      this.selectedCategory = 'all'
      this.sortBy = 'name-asc'
      this.currentPage = 1
    },
    clearSearch() {
      this.searchQuery = ''
    },
    getCategoryName(categoryId) {
      const cat = this.categories.find(c => c.id === categoryId)
      return cat ? cat.name : categoryId
    },
    focusResults() {
      if (this.$refs.resultsGrid) {
        this.$refs.resultsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    searchSimilar() {
      // Buscar términos similares o relacionados
      const query = this.searchQuery.toLowerCase()
      const similarTerms = {
        'sangre': 'hemograma',
        'colesterol': 'perfil lipídico',
        'azucar': 'glucosa',
        'tiroides': 'perfil tiroideo',
        'prostata': 'PSA',
        'embarazo': 'beta HCG',
        'infeccion': 'urocultivo',
        'hepatico': 'perfil hepático',
        'renal': 'perfil renal',
        'vih': 'HIV',
        'sida': 'HIV'
      }
      
      for (const [key, value] of Object.entries(similarTerms)) {
        if (query.includes(key)) {
          this.searchQuery = value
          return
        }
      }
      
      // Si no hay término similar, limpiar y mostrar todo
      this.resetFilters()
    }
  }
}
</script>

<style scoped>
.catalog {
  background: var(--bg-light);
}

.catalog__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding: 24px;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.catalog__search {
  flex: 1;
  min-width: 280px;
  position: relative;
}

.catalog__search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--text-light);
}

.catalog__search-input {
  width: 100%;
  padding: 12px 40px 12px 44px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.catalog__search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.catalog__search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-light);
  transition: all 0.2s ease;
}

.catalog__search-clear:hover {
  background: var(--bg-light);
  color: var(--text-dark);
}

.catalog__search-clear svg {
  width: 16px;
  height: 16px;
}

.catalog__filters {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.catalog__filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.catalog__filter-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.catalog__select {
  padding: 10px 36px 10px 14px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.95rem;
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") no-repeat right 10px center;
  background-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.catalog__select:focus {
  outline: none;
  border-color: var(--primary);
}

.catalog__results-count {
  font-size: 0.9rem;
  color: var(--text-gray);
  margin-bottom: 20px;
}

/* Sugerencias de búsqueda */
.catalog__suggestions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  padding: 16px 20px;
  background: white;
  border-radius: var(--radius);
  border: 1px dashed var(--border);
}

.catalog__suggestions-label {
  font-size: 0.85rem;
  color: var(--text-gray);
  font-weight: 500;
}

.catalog__suggestion-tag {
  padding: 6px 14px;
  font-size: 0.85rem;
  color: var(--primary);
  background: rgba(8, 145, 178, 0.1);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.catalog__suggestion-tag:hover {
  background: var(--primary);
  color: white;
}

/* Header de resultados */
.catalog__results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

.catalog__results-query,
.catalog__results-category {
  color: var(--text-gray);
}

.catalog__clear-filters {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  color: var(--text-gray);
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
}

.catalog__clear-filters:hover {
  background: white;
  border-color: var(--primary);
  color: var(--primary);
}

/* Paginación */
.catalog__pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.catalog__page-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-gray);
  cursor: pointer;
  transition: all 0.2s ease;
}

.catalog__page-btn:hover:not(:disabled) {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(8, 145, 178, 0.05);
}

.catalog__page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.catalog__page-info {
  font-size: 0.9rem;
  color: var(--text-gray);
  font-weight: 500;
}

/* Estado vacío mejorado */
.catalog__empty-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.catalog__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.catalog__empty {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: var(--radius-lg);
}

.catalog__empty svg {
  width: 80px;
  height: 80px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.catalog__empty h3 {
  font-size: 1.25rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.catalog__empty p {
  color: var(--text-gray);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .catalog__controls {
    flex-direction: column;
  }

  .catalog__search {
    min-width: 100%;
  }

  .catalog__filters {
    width: 100%;
  }

  .catalog__filter-group {
    flex: 1;
    min-width: 140px;
  }

  .catalog__grid {
    grid-template-columns: 1fr;
  }
}
</style>
