# 📝 INSTRUCCIONES EXACTAS - Paso a Paso

## PARTE 1: PREPARAR REPOSITORIO LOCAL

### Abre PowerShell y ejecuta ESTOS COMANDOS EN ORDEN:

```powershell
# 1. Ir a la carpeta del proyecto
cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"

# 2. Configurar nombre de usuario
git config --global user.name "Aprendiz3276"

# 3. Configurar email
git config --global user.email "tu-email@gmail.com"

# 4. Agregar todos los archivos
git add .

# 5. Hacer el commit inicial
git commit -m "Initial commit - Williams Food"

# 6. Renombrar rama a main
git branch -M main

# 7. Verificar estado
git log --oneline
```

**Resultado esperado:**
- Verás un commit que dice "Initial commit - Williams Food"

---

## PARTE 2: CREAR REPOSITORIO EN GITHUB

### Opción A: Usar GitHub CLI (Si está instalado)

```powershell
# 1. Iniciar sesion en GitHub (se abrirá navegador)
gh auth login --web

# Cuando se abra el navegador:
# - Elige HTTPS
# - Confirma con Y (yes)
# - Selecciona "Login with a web browser"
# - Inicia sesion con tu cuenta Aprendiz3276
# - Autoriza el acceso
# - Vuelve a PowerShell

# 2. Crear el repositorio en GitHub
gh repo create williams-food `
  --public `
  --source=. `
  --remote=origin `
  --push `
  --description "Williams Food - Digital Menu & Link Bio"

# LISTO! Los archivos se subirán automáticamente
```

### Opción B: Crear manualmente en GitHub (Sin GitHub CLI)

1. **Abre** https://github.com/new

2. **Inicia sesión** con tu cuenta **Aprendiz3276**

3. **Completa el formulario:**
   - Repository name: `williams-food`
   - Description: `Williams Food - Digital Menu & Link Bio`
   - Public (selecciona esta opción)
   - **NO marques** "Initialize with README"
   - Click **"Create repository"**

4. **Verás una pantalla con instrucciones.** En PowerShell copia y ejecuta:

```powershell
git remote add origin https://github.com/Aprendiz3276/williams-food.git
git push -u origin main
```

---

## PARTE 3: VERIFICAR QUE TODO FUNCIONÓ

### En PowerShell:
```powershell
git remote -v
git status
```

**Deberías ver:**
```
origin  https://github.com/Aprendiz3276/williams-food.git (fetch)
origin  https://github.com/Aprendiz3276/williams-food.git (push)
```

### En GitHub:
1. Abre https://github.com/Aprendiz3276/williams-food
2. Verifica que aparecen todos los archivos:
   - src/
   - package.json
   - vite.config.ts
   - .gitignore
   - README.md
   - Y más...

---

## ⚠️ SI ALGO FALLA

### Error: "Repository already exists"
```powershell
# Significa que ya existe. Actualiza el push:
git push -u origin main --force
```

### Error: "Not authenticated"
```powershell
# Necesitas iniciar sesión:
gh auth login --web
```

### Error: "Authentication failed"
```powershell
# Usa un token en lugar de contraseña:
# 1. Ve a https://github.com/settings/tokens
# 2. Crea un token personal
# 3. Cópialo
# 4. Pega cuando te pida contraseña
```

---

## ✅ CUANDO TERMINES:

1. Confirma que el repositorio está en GitHub
2. URL: https://github.com/Aprendiz3276/williams-food
3. Avísame que está listo
4. Pasamos al siguiente paso: **Vercel**

---

**¿Necesitas ayuda? Lee las instrucciones cuidadosamente y sigue cada paso en orden.**
