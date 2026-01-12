@echo off
REM Script para crear repositorio GitHub con usuario Aprendiz3276

setlocal enabledelayedexpansion

cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"

echo ========================================
echo CREAR REPOSITORIO EN GITHUB
echo Usuario: Aprendiz3276
echo ========================================
echo.

REM Paso 1: Configurar Git
echo [1/4] Configurando Git...
git config --global user.name "Aprendiz3276"
git config --global user.email "tu-email@gmail.com"
git add .
git commit -m "Initial commit - Williams Food"
git branch -M main
echo ✓ Git configurado
echo.

REM Paso 2: Iniciar sesion en GitHub CLI
echo [2/4] Autenticándose en GitHub...
gh auth login --web
echo ✓ Autenticado
echo.

REM Paso 3: Crear repositorio
echo [3/4] Creando repositorio en GitHub...
gh repo create williams-food ^
  --public ^
  --source=. ^
  --remote=origin ^
  --push ^
  --description "Williams Food - Digital Menu & Link Bio - williamsfood.online"
echo ✓ Repositorio creado
echo.

REM Paso 4: Verificar
echo [4/4] Verificando estado...
git remote -v
git status
echo ✓ Completado
echo.

echo ========================================
echo ÉXITO!
echo ========================================
echo.
echo Tu repositorio está en:
echo https://github.com/Aprendiz3276/williams-food
echo.
echo Próximos pasos:
echo 1. Ve a https://vercel.com
echo 2. Conecta tu repositorio williams-food
echo 3. Configura variables de entorno
echo 4. Actualiza DNS en GoDaddy
echo.
pause
