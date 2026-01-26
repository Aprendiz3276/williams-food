import cairosvg
from pathlib import Path

# Rutas de los archivos
public_path = Path("public")

# Conversión de SVG a PNG
svg_files = [
    "menu-1.svg",
    "menu-2.svg",
    "menu-3.svg",
    "menu-4.svg"
]

print("🔄 Convirtiendo SVG a PNG...")

for svg_file in svg_files:
    svg_path = public_path / svg_file
    png_file = svg_file.replace(".svg", ".png")
    png_path = public_path / png_file

    if svg_path.exists():
        print(f"\n📝 Procesando: {svg_file}")
        try:
            # Convertir SVG a PNG con escala
            cairosvg.svg2png(
                url=str(svg_path),
                write_to=str(png_path),
                dpi=96  # DPI estándar
            )
            print(f"   ✅ Convertido a: {png_file}")
        except Exception as e:
            print(f"   ❌ Error: {e}")
    else:
        print(f"   ❌ No encontrado: {svg_file}")

print("\n✨ ¡Conversión completada!")
