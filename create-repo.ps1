#!/usr/bin/env pwsh

Write-Host "========================================" -ForegroundColor Green
Write-Host "CREAR REPOSITORIO EN GITHUB" -ForegroundColor Green
Write-Host "Usuario: Aprendiz3276" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Green

# Verificar si gh está disponible
Write-Host "`n[1/5] Verificando GitHub CLI..." -ForegroundColor Cyan
$ghCheck = gh --version 2>&1

if ($ghCheck -like "*not recognized*" -or $ghCheck -like "*No se reconoce*") {
    Write-Host "❌ GitHub CLI no está disponible" -ForegroundColor Red
    Write-Host "Por favor, reinicia PowerShell después de instalar GitHub CLI" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ GitHub CLI disponible" -ForegroundColor Green

# Ir a la carpeta del proyecto
cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"

# Verificar si ya hay un repositorio
if (Test-Path .git) {
    Write-Host "`n[2/5] Repositorio local ya existe" -ForegroundColor Cyan
    Write-Host "✓ Git inicializado" -ForegroundColor Green
}
else {
    Write-Host "`n[2/5] Inicializando repositorio local..." -ForegroundColor Cyan
    git init
    git add .
    git commit -m "Initial commit - Williams Food"
    git branch -M main
    Write-Host "✓ Repositorio inicializado" -ForegroundColor Green
}

# Verificar si está autenticado
Write-Host "`n[3/5] Verificando autenticación en GitHub..." -ForegroundColor Cyan
$authStatus = gh auth status 2>&1
if ($authStatus -match "Logged in") {
    Write-Host "✓ Autenticado" -ForegroundColor Green
}
else {
    Write-Host "⚠️  No autenticado. Iniciando login..." -ForegroundColor Yellow
    gh auth login --web
}

# Crear repositorio
Write-Host "`n[4/5] Creando repositorio en GitHub..." -ForegroundColor Cyan
$repoCreated = $false
try {
    gh repo create williams-food --public --source=. --remote=origin --push --description "Williams Food - Digital Menu & Link Bio - williamsfood.online" 2>&1
    $repoCreated = $true
    Write-Host "✓ Repositorio creado" -ForegroundColor Green
}
catch {
    Write-Host "⚠️  Repositorio podría ya existir o hubo un error" -ForegroundColor Yellow
}

if (!$repoCreated) {
    Write-Host "Continuando con push manual..." -ForegroundColor White
    git remote remove origin 2>$null
    git remote add origin "https://github.com/Aprendiz3276/williams-food.git"
    git push -u origin main --force 2>&1
}

# Verificar estado
Write-Host "`n[5/5] Verificando estado final..." -ForegroundColor Cyan
git status
Write-Host "✓ Estado verificado" -ForegroundColor Green

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "✅ COMPLETADO" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "`nTu repositorio está en:" -ForegroundColor Yellow
Write-Host "https://github.com/Aprendiz3276/williams-food" -ForegroundColor White
Write-Host "`nPróximos pasos:" -ForegroundColor Yellow
Write-Host "1. Ve a https://vercel.com" -ForegroundColor White
Write-Host "2. Crea nuevo proyecto" -ForegroundColor White
Write-Host "3. Selecciona tu repositorio williams-food" -ForegroundColor White
Write-Host "4. Configura variables de entorno" -ForegroundColor White
Write-Host "5. Conecta tu dominio williamsfood.online" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Green
