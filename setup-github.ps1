# Script para configurar Git y preparar para GitHub
# Este script prepara tu repositorio local para ser subido a GitHub

Write-Host "================================================" -ForegroundColor Green
Write-Host "Configurando Williams Food para GitHub" -ForegroundColor Green
Write-Host "Usuario: Aprendiz3276" -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Green

# Paso 1: Configurar usuario de Git
Write-Host "`n[1/4] Configurando usuario Git..." -ForegroundColor Cyan
git config --global user.name "Aprendiz3276"
git config --global user.email "tu-email@gmail.com"
Write-Host "✓ Usuario configurado" -ForegroundColor Green

# Paso 2: Verificar status
Write-Host "`n[2/4] Agregando archivos..." -ForegroundColor Cyan
git add .
Write-Host "✓ Archivos agregados" -ForegroundColor Green

# Paso 3: Hacer commit
Write-Host "`n[3/4] Haciendo commit inicial..." -ForegroundColor Cyan
git commit -m "Initial commit - Williams Food - williamsfood.online"
Write-Host "✓ Commit realizado" -ForegroundColor Green

# Paso 4: Renombrar rama a main
Write-Host "`n[4/4] Configurando rama principal..." -ForegroundColor Cyan
git branch -M main
Write-Host "✓ Rama renombrada a main" -ForegroundColor Green

# Verificar
Write-Host "`n================================================" -ForegroundColor Green
Write-Host "Estado del repositorio:" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
git log --oneline
git status
Write-Host "`n✓ Repositorio local listo!" -ForegroundColor Green
Write-Host "`nAhora debes:" -ForegroundColor Yellow
Write-Host "1. Crear repositorio en GitHub (github.com/new)" -ForegroundColor White
Write-Host "2. Nombre: williams-food" -ForegroundColor White
Write-Host "3. Ejecutar el comando de push que se te mostrará" -ForegroundColor White
Write-Host "================================================" -ForegroundColor Green
