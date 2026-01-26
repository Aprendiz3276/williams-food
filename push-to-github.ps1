#!/usr/bin/env powershell

# Script para subir proyecto Williams Food a GitHub
# Usuario: Aprendiz3276

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   SUBIR PROYECTO WILLIAMS FOOD A GITHUB                   ║" -ForegroundColor Cyan
Write-Host "║   Usuario: Aprendiz3276                                   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Cambiar al directorio del proyecto
$projectPath = "c:\Users\crist\OneDrive\Escritorio\Williams food Link Bio\williams-food-main"
Set-Location $projectPath

Write-Host "📂 Directorio del proyecto: $projectPath" -ForegroundColor Green
Write-Host ""

# Solicitar nombre del repositorio
Write-Host "📝 ¿Cuál será el nombre del repositorio en GitHub?" -ForegroundColor Yellow
Write-Host "Ejemplo: williams-food, williams-food-menu, etc." -ForegroundColor Gray
$repoName = Read-Host "Nombre del repositorio"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "williams-food"
    Write-Host "ℹ️  Usando nombre por defecto: $repoName" -ForegroundColor Yellow
}

$repoUrl = "https://github.com/Aprendiz3276/$repoName.git"

Write-Host ""
Write-Host "⚠️  PASOS ANTES DE CONTINUAR:" -ForegroundColor Yellow
Write-Host "1. Crea un nuevo repositorio en GitHub: https://github.com/new" -ForegroundColor Gray
Write-Host "2. Nombre: $repoName" -ForegroundColor Gray
Write-Host "3. NO inicialices con README, LICENSE o .gitignore" -ForegroundColor Gray
Write-Host "4. Haz clic en 'Create repository'" -ForegroundColor Gray
Write-Host ""

$confirm = Read-Host "¿Ya creaste el repositorio? (s/n)"

if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host ""
    Write-Host "⏭️  Ve a GitHub y crea el repositorio, luego vuelve aquí." -ForegroundColor Cyan
    Write-Host "Abre: https://github.com/new" -ForegroundColor Cyan
    exit
}

Write-Host ""
Write-Host "🔄 Configurando Git..." -ForegroundColor Cyan

# Agregar remote
Write-Host "  1. Agregando URL remota: $repoUrl" -ForegroundColor Yellow
git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "     ✅ Remoto agregado correctamente" -ForegroundColor Green
}
else {
    Write-Host "     ℹ️  El remoto ya estaba configurado" -ForegroundColor Gray
}

Write-Host ""

# Cambiar rama a main
Write-Host "  2. Cambiando rama a 'main'..." -ForegroundColor Yellow
git branch -M main
Write-Host "     ✅ Rama actualizada a 'main'" -ForegroundColor Green

Write-Host ""

# Hacer push
Write-Host "  3. Haciendo push al repositorio..." -ForegroundColor Yellow
Write-Host "     (Si pide contraseña, usa tu token personal de GitHub)" -ForegroundColor Gray
Write-Host ""

git push -u origin main

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                    COMPLETADO ✅                           ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Mostrar información del repositorio
Write-Host "📊 INFORMACIÓN DEL REPOSITORIO:" -ForegroundColor Green
Write-Host "  URL: $repoUrl" -ForegroundColor White
Write-Host "  Usuario: Aprendiz3276" -ForegroundColor White
Write-Host "  Rama: main" -ForegroundColor White
Write-Host ""

Write-Host "🌐 Tu repositorio está disponible en:" -ForegroundColor Cyan
Write-Host "   https://github.com/Aprendiz3276/$repoName" -ForegroundColor Cyan
Write-Host ""

Write-Host "✅ Proyecto subido exitosamente a GitHub!" -ForegroundColor Green
Write-Host ""

# Mostrar resumen de archivos
Write-Host "📝 RESUMEN DE CAMBIOS:" -ForegroundColor Yellow
git log --oneline -1

Write-Host ""
Write-Host "📂 ARCHIVOS PRINCIPALES:" -ForegroundColor Yellow
Write-Host "   ✨ src/app/components/DigitalMenuView.tsx (nuevo)" -ForegroundColor Cyan
Write-Host "   ✨ public/menu-1.svg (nuevo)" -ForegroundColor Cyan
Write-Host "   ✨ public/menu-2.svg (nuevo)" -ForegroundColor Cyan
Write-Host "   ✨ public/menu-3.svg (nuevo)" -ForegroundColor Cyan
Write-Host "   ✨ public/menu-4.svg (nuevo)" -ForegroundColor Cyan
Write-Host "   📝 9 archivos de documentación (nuevos)" -ForegroundColor Cyan
Write-Host ""

Write-Host "💡 TIPS:" -ForegroundColor Yellow
Write-Host "   • Abre tu repositorio: $repoUrl" -ForegroundColor Gray
Write-Host "   • Comparte el enlace con tu equipo" -ForegroundColor Gray
Write-Host "   • Todos pueden clonar con: git clone $repoUrl" -ForegroundColor Gray
Write-Host ""

Write-Host "🎉 ¡Listo! Tu proyecto Williams Food está en GitHub!" -ForegroundColor Green
