# 🎨 Vista Previa - Nuevo Menú Digital

## 📱 Versión Móvil (< 640px)

```
┌────────────────────────────────┐
│                            ╳    │
│     MENÚ DIGITAL                │
│     Williams Food               │
├────────────────────────────────┤
│                                │
│                                │
│        [      IMAGEN           │
│         DEL PLATO      ]        │
│                                │
│                                │
│  ┌────────────────────────────┐│
│  │  Salchipapas para 2       ││
│  │                            ││
│  │  Deliciosas combinaciones  ││
│  │                            ││
│  │  [1/4]  [CATEGORÍA]        ││
│  └────────────────────────────┘│
├────────────────────────────────┤
│  ◄ Button      1/4      Button ►│
├────────────────────────────────┤
│   [Hacer Pedido]  [Cerrar]     │
└────────────────────────────────┘
```

## 💻 Versión Desktop (> 1024px)

```
┌────────────────────────────────────────────────────────────────────────┐
│ MENÚ DIGITAL                                                      ╳    │
│ Williams Food - Disfruta nuestras especialidades                       │
├────────────────────────────────────────────────────────────────────────┤
│                                          │                            │
│  ◄                                       │  □ Salchipapas            │
│        [          IMAGEN          ]      │    para 2                 │
│              DEL PLATO                   │    PARA 2 PERSONAS        │
│                             ►             │                            │
│                                          │  □ Salchipapas            │
│  ┌────────────────────────────────────┐ │    para 3-4               │
│  │  Salchipapas para 2                │ │    PARA 3 Ó 4 PERSONAS    │
│  │  Deliciosas combinaciones...       │ │                            │
│  │                                    │ │  □ Súper William's        │
│  │  [1/4]  [PARA 2 PERSONAS]         │ │    y Tostadas             │
│  └────────────────────────────────────┘ │    PLATOS PRINCIPALES     │
│                                          │                            │
│                                          │  □ Adicionales            │
│                                          │    & Bebidas              │
│                                          │    COMPLEMENTOS           │
│                                          │                            │
│                                          │  ┌──────────────────────┐ │
│                                          │  │  Hacer Pedido        │ │
│                                          │  │  WhatsApp            │ │
│                                          │  │                      │ │
│                                          │  │  Cerrar              │ │
│                                          │  └──────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

## 🎨 Paleta de Colores

### Header
```
┌────────────────────────────────────────┐
│ NARANJA ────────────── DORADO         │
│ #FF3C00               #FFD700          │
│ Gradiente de izq a der                │
└────────────────────────────────────────┘
```

### Elementos Principales
```
🟠 Botones de acción: #FF3C00 (Naranja)
🟡 Bordes destacados: #FFD700 (Dorado)
⬛ Fondos: #0D0D0D, #1a1a1a (Negro)
⚪ Texto: Blanco con opacidades
```

## 🎬 Animaciones y Transiciones

### Abrir Modal
```
Entrada:
  [Fade in] + [Scale in]
  Duración: 300ms
  Easing: ease-out
```

### Cambiar Menú
```
Salida de imagen:
  [Fade out] + [Scale down]
  Duración: 300ms

Entrada de nueva imagen:
  [Fade in] + [Scale up]
  Duración: 300ms
```

### Hover en Botones
```
Normal:
  Fondo: rgba(255, 255, 255, 0.1)

Al pasar ratón:
  Fondo: rgba(255, 255, 255, 0.2)
  Transition: 150ms
```

### Hover en Miniaturas
```
Normal:
  Border: rgba(255, 255, 255, 0.1)
  Background: rgba(255, 255, 255, 0.05)

Seleccionada:
  Border: #FFD700
  Background: rgba(255, 255, 255, 0.1)
  Shadow: 0 0 20px rgba(255, 217, 0, 0.3)
  Ring: 2px rgba(255, 60, 0, 0.5)
```

## 📊 Interactividad

### Estados del Componente

#### Estado: Modal Cerrado
```
isOpen = false
Componente: No renderiza (return null)
```

#### Estado: Modal Abierto - Página 1/4
```
isOpen = true
activeIndex = 0
Muestra: Salchipapas para 2
Botones disponibles: ◄ (deshabilitado) ► (habilitado)
```

#### Estado: Modal Abierto - Página 4/4
```
isOpen = true
activeIndex = 3
Muestra: Adicionales & Bebidas
Botones disponibles: ◄ (habilitado) ► (deshabilitado)
```

## 🔄 Flujo de Navegación

```
[INICIO]
    │
    └──▶ Click en "Menú Digital"
              │
              ├──▶ [Modal Abre] (Fade In)
              │       │
              │       ├──▶ Muestra página 1/4
              │       │       ├──▶ Botón ◄ ►
              │       │       ├──▶ Miniaturas
              │       │       └──▶ Info Box
              │       │
              │       ├──▶ Usuario navega (◄ ► / click / teclado)
              │       │       │
              │       │       └──▶ Cambio de página
              │       │           (1/4, 2/4, 3/4, 4/4)
              │       │
              │       ├──▶ Click en "Hacer Pedido"
              │       │       └──▶ Abre WhatsApp
              │       │
              │       └──▶ Click en X / Fuera del modal / ESC
              │               │
              │               └──▶ [Modal Cierra] (Fade Out)
              │                   └──▶ [CIERRE]
```

## 📐 Dimensiones

### Modal
```
Desktop:
  Ancho máximo: 1536px (max-w-6xl)
  Alto máximo: 90vh
  Redondeado: 1.5rem

Mobile:
  Ancho: 100% - 32px padding
  Alto: 90vh
```

### Imágenes
```
Proporción recomendada: 16:9 o 4:3
Objeto fit: contain (sin cortes)
Max altura: 85vh
```

### Miniaturas
```
Ancho: 100% (panel lateral)
Alto de miniatura: 80px
Redondeado: 0.5rem
```

## 🎯 Puntos Focales

### Desktop
```
Centro: Imagen del plato
Lado derecho: Panel de navegación
Arriba: Header con título
Abajo: Caja informativa
```

### Móvil
```
Centro: Imagen del plato
Arriba: Header con cerrar
Abajo: Controles de navegación
```

## 🌈 Gradientes Utilizados

### Header
```
De: #FF3C00 (Naranja)
A: #FFD700 (Dorado)
Dirección: De izquierda a derecha
```

### Fondo Principal
```
De: #000000 (Negro puro)
Vía: #1a1a1a (Gris muy oscuro)
A: #0D0D0D (Negro muy oscuro)
Dirección: Diagonal (arriba-izq a abajo-der)
```

## 📱 Ejemplos de Respuesta

### En Móvil
- Header: Compacto
- Imagen: 100% del ancho disponible
- Miniaturas: No visibles
- Controles: Barra inferior con ◄ Número ►

### En Tablet
- Header: Normal
- Imagen: Ocupa 2/3 del ancho
- Miniaturas: Barra lateral visible
- Controles: Botones + miniaturas

### En Desktop
- Header: Expansivo
- Imagen: Ocupa 2/3 del ancho
- Miniaturas: Panel derecho completo
- Controles: Todos disponibles

## 🎪 Casos de Uso

### Usuario: Móvil
1. Abre app en celular
2. Tap en "Menú digital"
3. Ve menú a pantalla completa
4. Usa botones ◄ ► para navegar
5. Tap en "Hacer Pedido" → WhatsApp

### Usuario: Desktop
1. Abre en computadora
2. Click en "Menú digital"
3. Ve imagen grande + miniaturas
4. Click en miniatura para cambiar
5. O usa ◄ ► / teclas flecha
6. Click en "Hacer Pedido"

### Usuario: Tablet
1. Abre en tablet
2. Toca "Menú digital"
3. Ve diseño intermedio
4. Toca botones o miniaturas
5. Toca "Hacer Pedido"

---

Esta es la nueva interfaz visual de tu menú digital. 
**¡Moderna, profesional y totalmente funcional!** 🚀
