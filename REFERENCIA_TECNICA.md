# 👨‍💻 Referencia Técnica para Desarrolladores

## 📚 Información Técnica Completa

### Componente Principal: DigitalMenuView.tsx

#### Localización
```
src/app/components/DigitalMenuView.tsx
```

#### Interfaces
```typescript
interface MenuItem {
  src: string;           // Ruta de la imagen
  title: string;         // Título del menú
  description: string;   // Descripción
  subtitle?: string;     // Subtítulo opcional
}

interface DigitalMenuViewProps {
  isOpen: boolean;       // Estado del modal
  onClose: () => void;   // Callback para cerrar
}
```

#### Estados
```typescript
const [activeIndex, setActiveIndex] = useState(0);      // Índice actual (0-3)
const [isAnimating, setIsAnimating] = useState(false);  // Bandera de animación
```

#### Métodos Principales
```typescript
nextSlide()  // Siguiente página (con validación de animación)
prevSlide()  // Página anterior (con validación de animación)
```

#### Hooks Utilizados
```typescript
useState()     // Estado del componente
useEffect()    // Manejo de teclas y efectos
```

---

### Estructura de Datos

#### Array menuItems
```typescript
const menuItems: MenuItem[] = [
  {
    src: '/menu-1.svg',
    title: 'Salchipapas para 2',
    subtitle: 'PARA 2 PERSONAS',
    description: 'Deliciosas combinaciones de salchipapas para compartir'
  },
  {
    src: '/menu-2.svg',
    title: 'Salchipapas para 3 ó 4',
    subtitle: 'PARA 3 Ó 4 PERSONAS',
    description: 'Nuestras especialidades de la casa'
  },
  {
    src: '/menu-3.svg',
    title: 'Súper William\'s y Tostadas',
    subtitle: 'PLATOS PRINCIPALES',
    description: 'Nuestros platos más populares'
  },
  {
    src: '/menu-4.svg',
    title: 'Adicionales & Bebidas',
    subtitle: 'COMPLEMENTOS',
    description: 'Personaliza tu pedido con nuestros complementos'
  },
];
```

---

### Integración en App.tsx

#### Importación
```typescript
import { DigitalMenuView } from './components/DigitalMenuView';
```

#### Uso
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);

// En el JSX:
<DigitalMenuView isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
```

---

### Estilos Tailwind CSS

#### Clases Principales
```
Modal: fixed inset-0 z-50 bg-black/95 backdrop-blur-sm
Header: bg-gradient-to-r from-[#FF3C00] to-[#FFD700]
Contenedor: max-w-6xl max-h-[90vh]
Imagen: max-w-full max-h-[85vh] object-contain
Botones: rounded-full w-12 h-12 bg-white/10 hover:bg-white/20
Miniaturas: w-full rounded-lg border transition-all
```

#### Animaciones
```
fade-in duration-300        // Fade in al abrir
scale-in-95 fade-in         // Scale + fade al abrir
opacity-50 scale-95         // Durante transición
transition-all duration-300 // Transiciones suaves
```

---

### Eventos Soportados

#### Teclado
```typescript
ArrowRight  → Siguiente página
ArrowLeft   → Página anterior
Escape      → Cerrar modal (en MenuModal original)
```

#### Mouse/Touch
```
onClick (botones)      → Navegación
onClick (miniaturas)   → Cambiar página
onClick (X)            → Cerrar
onClick (fuera)        → Cerrar
```

---

### Puntos de Personalización

#### 1. Cambiar Datos del Menú
**Archivo**: `src/app/components/DigitalMenuView.tsx`
**Líneas**: 19-44

```typescript
// Modifica el array menuItems
const menuItems: MenuItem[] = [
  {
    src: '/tu-imagen.jpg',
    title: 'Tu título',
    subtitle: 'Tu categoría',
    description: 'Tu descripción'
  },
];
```

#### 2. Cambiar Colores
**Busca en el archivo**:
- `#FF3C00` → Naranja (Ctrl+H para reemplazar)
- `#FFD700` → Dorado (Ctrl+H para reemplazar)
- `#0D0D0D` → Negro (Ctrl+H para reemplazar)

#### 3. Cambiar Link de WhatsApp
**Línea**: ~199
```html
href="https://wa.me/573167226947"
<!-- Cambia el número de teléfono -->
```

#### 4. Cambiar Fuentes
**Busca**: `fontFamily: 'Poppins, sans-serif'` o `'Inter, sans-serif'`

#### 5. Cambiar Tamaños
**Clases Tailwind**:
- `max-w-6xl` → Ancho máximo
- `max-h-[90vh]` → Alto máximo
- `max-h-[85vh]` → Alto de imagen

---

### Ciclo de Vida

#### 1. Montaje
```
Component monta
  ↓
Estado inicial: activeIndex = 0, isAnimating = false
  ↓
Si isOpen = true, renderiza el modal
```

#### 2. Navegación
```
Usuario hace click en botón/miniatura/teclado
  ↓
setIsAnimating(true)
  ↓
setActiveIndex(newIndex)
  ↓
Image muestra opacidad 50% y scale 95%
  ↓
Después de 300ms: setIsAnimating(false)
  ↓
Image vuelve a opacidad 100% y scale 100%
```

#### 3. Cierre
```
Usuario hace click en X / fuera / ESC
  ↓
onClose() callback
  ↓
isOpen = false
  ↓
Componente devuelve null (no renderiza)
```

---

### Optimizaciones Implementadas

1. **Animación Controlada**
   - Flag `isAnimating` previene navegación rápida
   - Timeout de 300ms entre cambios

2. **Renderizado Condicional**
   - Retorna `null` cuando `isOpen = false`
   - No renderiza DOM innecesario

3. **Listeners de Teclado**
   - Se agregan y quitan en useEffect
   - Solo activo cuando modal está abierto

4. **Estilos Inline Mínimos**
   - Mayoría de estilos en Tailwind
   - Solo fontFamily inline (compatible)

---

### Performance

#### Tamaño del Archivo
- `DigitalMenuView.tsx`: ~8KB (no minificado)
- `menu-*.svg`: ~2KB cada uno (optimizado)

#### Carga Inicial
- SVG se cargan en paralelo
- Sin imágenes externas pesadas
- Muy rápido en conexiones lentas

#### Renderizado
- Solo re-renderiza al cambiar `activeIndex`
- Animaciones en CSS (aceleradas por GPU)
- Transiciones suaves sin jank

---

### Debugging

#### Ver Estado Actual
```javascript
// En la consola:
console.log('Active Index:', activeIndex);
console.log('Is Animating:', isAnimating);
console.log('Is Open:', isOpen);
```

#### Verificar Props
```typescript
// Agregar console.log en componente:
console.log('Props recibidos:', { isOpen, onClose });
```

#### Probar Navegación
```javascript
// En consola, simular click:
document.querySelector('[aria-label="Siguiente"]')?.click();
```

---

### Testing

#### Test Manual
```
1. Abre modal
2. Navega con botones
3. Navega con teclado
4. Navega con miniaturas
5. Cierra con X
6. Cierra con click fuera
7. Verifica en móvil
8. Verifica en tablet
9. Verifica en desktop
```

#### Test de Accesibilidad
```
1. Presiona Tab para navegar
2. Presiona Enter en botones
3. Verifica aria-label en botones
4. Verifica role="dialog" en modal
```

---

### Extensiones Futuras

#### Agregar Swipe (Móvil)
```typescript
// Usar react-use-gesture o similar
onSwipe={(direction) => {
  if (direction === 'left') nextSlide();
  if (direction === 'right') prevSlide();
}}
```

#### Agregar Búsqueda
```typescript
const [searchTerm, setSearchTerm] = useState('');
const filtered = menuItems.filter(item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

#### Agregar Carrito
```typescript
const [cart, setCart] = useState([]);
const addToCart = (item) => {
  setCart([...cart, item]);
};
```

#### Agregar Galería Expandida
```typescript
// Crear vista full-screen para cada menú
// Con descripción detallada
// Ingredientes
// Información nutricional
```

---

### Compatibilidad

#### Navegadores Soportados
- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Móvil (iOS Safari, Chrome Mobile)

#### TypeScript
- ✅ Target: ES2020+
- ✅ Strict mode: habilitado
- ✅ Types: React 18+

#### React
- ✅ Hooks: Soportados
- ✅ FC: Soportado
- ✅ JSX: Soportado

---

### Problemas Comunes y Soluciones

#### Problema: Imágenes no se cargan
**Solución**: 
1. Verifica que estén en `public/`
2. Verifica las rutas en el código
3. Revisa la consola (F12)

#### Problema: Animaciones lentas
**Solución**:
1. Disminuye duración: `duration-300` → `duration-200`
2. Desactiva algunos efectos
3. Prueba en otra máquina

#### Problema: Estilos mal aplicados
**Solución**:
1. Limpia cache: Ctrl+Shift+Delete
2. Recarga página: F5
3. Abre en incógnito

#### Problema: Navegación no funciona
**Solución**:
1. Verifica que `isOpen = true`
2. Revisa la consola por errores
3. Prueba sin otros componentes

---

### Referencias Rápidas

#### Documentación Oficial
- React: https://react.dev
- TypeScript: https://typescriptlang.org
- Tailwind: https://tailwindcss.com
- Lucide: https://lucide.dev

#### Comandos Útiles
```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Type check
npm run type-check
```

---

### Notas Finales

1. **Mantenibilidad**: Código limpio, fácil de entender
2. **Escalabilidad**: Fácil agregar más menús
3. **Performance**: Optimizado para web
4. **Accesibilidad**: WCAG compliant
5. **Responsive**: Mobile-first design

---

**Última actualización**: 26 de enero de 2026  
**Versión**: 1.0  
**Autor**: Williams Food Development Team
