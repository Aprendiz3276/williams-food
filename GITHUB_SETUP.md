# 🚀 GUÍA MANUAL: CREAR REPOSITORIO EN GITHUB

## **OPCIÓN 1: Usar GitHub CLI (Recomendado)**

### Paso 1: Abre PowerShell en la carpeta del proyecto

```powershell
cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"
```

### Paso 2: Ejecuta estos comandos EN ORDEN:

```powershell
# Configurar Git
git config --global user.name "Aprendiz3276"
git config --global user.email "tu-email@gmail.com"

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit - Williams Food"

# Renombrar rama a main
git branch -M main

# Iniciar sesion en GitHub (se abrirá navegador)
gh auth login --web
```

### Paso 3: Cuando se abra el navegador:
1. Selecciona **HTTPS**
2. Confirma con **Y** (yes)
3. Selecciona **Login with a web browser**
4. Se abrirá GitHub en tu navegador
5. Autoriza el acceso
6. Vuelve a PowerShell

### Paso 4: Crear el repositorio:

```powershell
gh repo create williams-food --public --source=. --remote=origin --push --description "Williams Food - Digital Menu & Link Bio - williamsfood.online"
```

---

## **OPCIÓN 2: Crear repositorio manualmente en GitHub (Si GitHub CLI no funciona)**

### Paso 1: Copia estos comandos en PowerShell:

```powershell
cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"
git config --global user.name "Aprendiz3276"
git config --global user.email "tu-email@gmail.com"
git add .
git commit -m "Initial commit - Williams Food"
git branch -M main
```

### Paso 2: Ve a https://github.com/new
1. Inicia sesión con **Aprendiz3276**
2. **Repository name:** `williams-food`
3. **Description:** `Williams Food - Digital Menu & Link Bio`
4. Selecciona **Public**
5. **NO marques** "Initialize with README" (ya tenemos uno)
6. Click **"Create repository"**

### Paso 3: GitHub mostrará instrucciones. Copia este comando en PowerShell:

```powershell
git remote add origin https://github.com/Aprendiz3276/williams-food.git
git push -u origin main
```

---

## **✅ VERIFICAR QUE FUNCIONÓ**

Después de ejecutar los comandos:

1. Abre https://github.com/Aprendiz3276/williams-food
2. Verifica que ves todos los archivos:
   - ✅ src/
   - ✅ package.json
   - ✅ vite.config.ts
   - ✅ .gitignore
   - ✅ README.md
   - ✅ Y más...

---

## **SI TODO FUNCIONÓ, VERÁS:**

```
✓ Repositorio creado
✓ Archivos subidos
✓ En GitHub aparecerán todos los archivos
```

---

## **SIGUIENTE PASO: VERCEL**

Una vez confirmado que el repositorio está en GitHub:

1. Ve a https://vercel.com
2. Click en **"New Project"**
3. Click en **"Import Git Repository"**
4. Selecciona **williams-food**
5. Deploy automático
6. Agrega variables de entorno
7. Configura dominio williamsfood.online

¡Avísame cuando termines el Paso 1!
