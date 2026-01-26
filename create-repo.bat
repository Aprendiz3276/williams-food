@echo off
REM Script para crear repositorio en GitHub automáticamente

echo ========================================
echo Iniciando sesion en GitHub...
echo ========================================

REM Iniciar sesión con navegador web
gh auth login --web

if errorlevel 1 (
    echo Error al iniciar sesion
    pause
    exit /b 1
)

echo.
echo ========================================
echo Creando repositorio en GitHub...
echo ========================================

cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"

REM Crear repositorio publico
gh repo create williams-food ^
    --public ^
    --source=. ^
    --remote=origin ^
    --push ^
    --description "Williams Food - Digital Menu & Link Bio - williamsfood.online"

if errorlevel 1 (
    echo Error al crear el repositorio
    pause
    exit /b 1
)

echo.
echo ========================================
echo Repositorio creado exitosamente!
echo ========================================
echo.
echo Tu repositorio está en:
echo https://github.com/Aprendiz3276/williams-food
echo.
pause
