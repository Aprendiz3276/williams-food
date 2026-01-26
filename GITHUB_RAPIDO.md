# 🚀 GUÍA RÁPIDA: Subir a GitHub

## Eres 2 pasos de subir tu proyecto a GitHub

---

## 📋 INFORMACIÓN IMPORTANTE

**Usuario GitHub**: Aprendiz3276  
**Proyecto**: Williams Food  
**Estado**: ✅ Git preparado y listo

---

## ⚡ OPCIÓN 1: Script Automático (RECOMENDADO)

### Paso 1: Abre PowerShell
```powershell
# Haz clic derecho en tu escritorio
# Selecciona "Abrir PowerShell aquí"
```

### Paso 2: Ejecuta el script
```powershell
powershell "c:\Users\crist\OneDrive\Escritorio\Williams food Link Bio\williams-food-main\push-to-github.ps1"
```

### Paso 3: Sigue las instrucciones
El script te pedirá:
1. ¿Creaste el repositorio en GitHub? (S/N)
2. ¿Nombre del repositorio? (ej: williams-food)
3. Luego hace todo automáticamente

**¡Listo! Tu proyecto está en GitHub** 🎉

---

## ⚡ OPCIÓN 2: Comandos Manuales

### Paso 1: Crea repositorio en GitHub

1. Ve a: **https://github.com/new**
2. Inicia sesión con: **Aprendiz3276**
3. Nombre del repositorio: **williams-food**
4. Clic en **"Create repository"**
5. **NO marques** README, LICENSE ni .gitignore

### Paso 2: Abre PowerShell

```powershell
# Opción A: Desde el menú Inicio
Windows → PowerShell

# Opción B: Tecla Windows + X → PowerShell

# Opción C: Click derecho en escritorio → Abrir PowerShell aquí
```

### Paso 3: Ve al directorio del proyecto

```powershell
cd "c:\Users\crist\OneDrive\Escritorio\Williams food Link Bio\williams-food-main"
```

### Paso 4: Ejecuta los comandos

```powershell
# Agregar URL remota
git remote add origin https://github.com/Aprendiz3276/williams-food.git

# Cambiar rama a main
git branch -M main

# Hacer push
git push -u origin main
```

### Paso 5: Autenticación
- Si pide usuario: **Aprendiz3276**
- Si pide contraseña: **Token de GitHub** (ver abajo)

---

## 🔑 Si pide Token de GitHub

### 1. Genera un Token
1. Ve a: https://github.com/settings/tokens
2. Clic en **"Generate new token"**
3. Selecciona **"Generate new token (classic)"**
4. Nombre: **"Williams Food Upload"**
5. Marca: **repo** ✓
6. Clic en **"Generate token"**
7. **COPIA** el token (aparece una sola vez)

### 2. Usa el Token
- Cuando Git pida contraseña
- PEGA el token (no tu contraseña)
- Presiona Enter

---

## ✅ Verificación

Después de hacer push:

```powershell
git remote -v
```

Deberías ver:
```
origin  https://github.com/Aprendiz3276/williams-food.git (fetch)
origin  https://github.com/Aprendiz3276/williams-food.git (push)
```

Tu repositorio estará en:
```
https://github.com/Aprendiz3276/williams-food
```

---

## 🎯 ¿Qué nombre dar al repositorio?

Opciones recomendadas:
- `williams-food` ⭐ (simple y claro)
- `williams-food-menu`
- `williams-digital-menu`
- `wf-menu`

**Elige uno y úsalo en los comandos**

---

## 🐛 Solución de Problemas

### Error: "fatal: not a git repository"
- ✅ No hay problema, ya está inicializado
- Asegúrate de estar en el directorio correcto

### Error: "remote already exists"
- Significa que ya está configurado
- Puedes continuar directamente al `git push`

### Error de autenticación
- Necesitas un token personal de GitHub
- Ver sección "Si pide Token de GitHub"

### Push rechazado
- Asegúrate de:
  1. Haber creado el repositorio en GitHub
  2. Haber usado la URL correcta
  3. Tener el token válido

---

## 📊 Lo que se sube

- ✨ Nuevo componente DigitalMenuView.tsx (233 líneas)
- ✨ 4 imágenes SVG del menú
- 📝 9 archivos de documentación
- 🔄 2 archivos modificados
- 📁 Toda la estructura del proyecto
- **Total: 123 archivos, 17,018 líneas**

---

## 🎊 ¡Listo!

### Resumen de pasos:

1. ✅ Git inicializado
2. ✅ Commit creado
3. ⏭️ Crear repositorio en GitHub
4. ⏭️ Ejecutar comandos/script
5. ✨ ¡Proyecto en GitHub!

---

## 💡 Tips

- Puedes cambiar el nombre después en GitHub
- El repositorio puede ser privado o público
- Otros pueden colaborar si lo permites
- Siempre tendrás un backup en GitHub

---

## 🚀 ¡Comienza Ahora!

**Elige tu opción:**

### Opción 1 (Fácil):
```powershell
powershell "c:\Users\crist\OneDrive\Escritorio\Williams food Link Bio\williams-food-main\push-to-github.ps1"
```

### Opción 2 (Manual):
Sigue los pasos de comandos arriba

**¡Tu proyecto estará en GitHub en menos de 5 minutos!** 🎉

---

**Última actualización**: 26 de enero de 2026
