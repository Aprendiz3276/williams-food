#!/bin/bash
# Script simple para crear repositorio GitHub

cd "c:\Users\crist\OneDrive\Escritorio\Link Bio Williams Food"

echo "=========================================="
echo "CREAR REPOSITORIO EN GITHUB - Aprendiz3276"
echo "=========================================="
echo ""

echo "[1/6] Configurando Git..."
git config --global user.name "Aprendiz3276"
git config --global user.email "tu-email@gmail.com"
echo "✓ Completado"
echo ""

echo "[2/6] Agregando archivos..."
git add .
echo "✓ Completado"
echo ""

echo "[3/6] Haciendo commit..."
git commit -m "Initial commit - Williams Food"
echo "✓ Completado"
echo ""

echo "[4/6] Configurando rama..."
git branch -M main
echo "✓ Completado"
echo ""

echo "[5/6] Autenticándose en GitHub (se abrirá navegador)..."
gh auth login --web
echo "✓ Completado"
echo ""

echo "[6/6] Creando repositorio..."
gh repo create williams-food \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Williams Food - Digital Menu & Link Bio"
echo "✓ Completado"
echo ""

echo "=========================================="
echo "✅ REPOSITORIO CREADO"
echo "=========================================="
echo ""
echo "Tu repositorio está en:"
echo "https://github.com/Aprendiz3276/williams-food"
echo ""
echo "Verifica que todos los archivos se subieron correctamente."
echo "Luego ve a Vercel y crea un nuevo proyecto."
echo ""
