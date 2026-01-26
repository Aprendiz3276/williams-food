# Personalización de Imágenes del Menú Digital

## 📋 Ubicación de las Imágenes

Las imágenes del menú se encuentran en:
```
williams-food-main/public/
├── menu-1.svg  (Salchipapas para 2)
├── menu-2.svg  (Salchipapas para 3 ó 4)
├── menu-3.svg  (Súper William's y Tostadas)
└── menu-4.svg  (Adicionales & Bebidas)
```

## 🖼️ Cómo Reemplazar las Imágenes

### Opción 1: Usar Imágenes Reales (Recomendado)

Si tienes fotos reales de los platos:

1. **Prepara las imágenes**
   - Formato: JPG o PNG
   - Proporción recomendada: 16:9 o 4:3
   - Tamaño: Mínimo 400x300px, máximo 1200x900px
   - Peso: Menos de 500KB cada una

2. **Coloca las imágenes en `public/`**
   ```
   public/
   ├── menu-1.jpg  (o .png)
   ├── menu-2.jpg
   ├── menu-3.jpg
   └── menu-4.jpg
   ```

3. **Actualiza las rutas en `DigitalMenuView.tsx`**
   
   Abre el archivo `src/app/components/DigitalMenuView.tsx` y busca:
   ```tsx
   const menuItems: MenuItem[] = [
     {
       src: '/menu-1.svg',  // Cambia a '/menu-1.jpg'
       ...
     },
   ```

### Opción 2: Crear SVGs Personalizados

Si prefieres mantener el formato SVG pero con contenido personalizado:

1. **Usa un editor online**
   - Figma (figma.com)
   - Canva (canva.com)
   - Adobe XD (adobe.com)

2. **Diseña la imagen basada en el template actual**
   - Mantén los colores: `#FF3C00` (naranja) y `#FFD700` (dorado)
   - Incluye nombre del plato y precios
   - Usa fuentes: Poppins (títulos) e Inter (textos)

3. **Exporta como SVG**
   - Reemplaza los archivos en `public/`

### Opción 3: Agregar Más Imágenes

Si quieres agregar más secciones al menú:

1. **Crea la imagen**
   - Sigue el mismo formato de las existentes
   - Colócala en `public/` (ej: `menu-5.svg`)

2. **Actualiza `DigitalMenuView.tsx`**
   ```tsx
   const menuItems: MenuItem[] = [
     // ... items existentes
     {
       src: '/menu-5.svg',
       title: 'Nuevo plato',
       subtitle: 'CATEGORÍA',
       description: 'Descripción del plato'
     },
   ];
   ```

## 🎨 Recomendaciones de Diseño

### Para Imágenes Reales:
- Foto del plato centrado
- Fondo limpio (preferiblemente plato o tabla de madera)
- Buena iluminación
- Sin elementos distractores

### Para SVGs:
- Mantén la paleta de colores consistente
- Usa tipografía clara y legible
- Estructura de 2-3 niveles de información
- Alto contraste (texto claro sobre fondos oscuros)

## 📸 Dimensiones Recomendadas

```
Formato: Rectángulo (Vertical preferido)
Ancho: 600px - 1200px
Alto: 800px - 1600px

Relación de aspecto ideal: 3:4 (como un móvil vertical)
```

## 🔄 Cambiar Títulos y Descripciones

Sin cambiar las imágenes, puedes actualizar los textos:

Abre `src/app/components/DigitalMenuView.tsx` y modifica:

```tsx
const menuItems: MenuItem[] = [
  {
    src: '/menu-1.svg',
    title: 'Salchipapas para 2',           // Cambia esto
    subtitle: 'PARA 2 PERSONAS',           // O esto
    description: 'Deliciosas combinaciones...' // O esto
  },
  // ... resto de items
];
```

## 🚀 Ejemplo: Cambiar Menu 1

### Archivo Original:
```tsx
{
  src: '/menu-1.svg',
  title: 'Salchipapas para 2',
  subtitle: 'PARA 2 PERSONAS',
  description: 'Deliciosas combinaciones de salchipapas para compartir'
}
```

### Cambio a Imagen Real:
```tsx
{
  src: '/menu-1.jpg',  // Extensión cambiada
  title: 'Salchipapas para 2',
  subtitle: 'PARA 2 PERSONAS',
  description: 'Deliciosas combinaciones de salchipapas para compartir'
}
```

### Cambio de Título:
```tsx
{
  src: '/menu-1.svg',
  title: 'Nuestras Salchipapas Especiales',  // Nuevo título
  subtitle: 'COMBO 2 PERSONAS',              // Nuevo subtítulo
  description: 'Nuestras mejores combinaciones de papas y salchicha'
}
```

## 📝 Notas Importantes

- Las imágenes SVG no requieren servidor web
- Las imágenes JPG/PNG sí deben estar en la carpeta `public/`
- Si cambias el nombre de archivos, actualiza las rutas en el código
- Prueba en diferentes dispositivos después de cambios
- Mantén copias de seguridad de los archivos originales

## 🆘 Solución de Problemas

### Las imágenes no se cargan
1. Verifica que el archivo existe en `public/`
2. Comprueba la ruta en `DigitalMenuView.tsx`
3. Revisa la consola del navegador (F12 → Console)

### Las imágenes se ven mal en móvil
1. Ajusta el tamaño (no muy grandes)
2. Verifica la proporción de aspecto
3. Usa formatos optimizados (JPG para fotos)

### El SVG no se muestra
1. Valida el XML del SVG
2. Comprueba que los elementos estén bien cerrados
3. Usa un validador online: svgvalidator.com

---

**Última actualización**: 26 de enero de 2026
