# 📤 Instrucciones para Subir a GitHub

## Paso 1: Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Inicia sesión con tu usuario **Aprendiz3276**
3. Crea un nuevo repositorio:
   - **Nombre del repositorio**: `williams-food` (o el que prefieras)
   - **Descripción**: "Williams Food - Digital Menu & Link Bio"
   - **Privado/Público**: Elige según prefieras
   - **NO inicialices con README** (ya tenemos contenido)
4. Haz click en "Create repository"

## Paso 2: Agregar la URL Remota

Reemplaza `USERNAME` y `REPOSITORY_NAME` en el comando:

```bash
cd "c:\Users\crist\OneDrive\Escritorio\Williams food Link Bio\williams-food-main"
git remote add origin https://github.com/Aprendiz3276/REPOSITORY_NAME.git
```

**Ejemplo** (si el repositorio se llama "williams-food"):
```bash
git remote add origin https://github.com/Aprendiz3276/williams-food.git
```

## Paso 3: Cambiar rama a main (si es necesario)

```bash
git branch -M main
```

## Paso 4: Hacer Push al Repositorio

```bash
git push -u origin main
```

**Nota**: Si te pide autenticación, usa:
- **Usuario**: Aprendiz3276
- **Token personal**: Crea uno en GitHub (Settings → Developer settings → Personal access tokens)

## ¿Necesitas un Token Personal de GitHub?

1. Ve a: https://github.com/settings/tokens
2. Haz click en "Generate new token" → "Generate new token (classic)"
3. Dale un nombre: "Williams Food Upload"
4. Selecciona permisos: `repo` (completo)
5. Genera el token y cópialo
6. Úsalo como contraseña en Git

## Verificar que se subió correctamente

```bash
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/Aprendiz3276/williams-food.git (fetch)
origin  https://github.com/Aprendiz3276/williams-food.git (push)
```

---

## 📋 Resumen Rápido de Comandos

```bash
# 1. Configurar remoto
git remote add origin https://github.com/Aprendiz3276/williams-food.git

# 2. Cambiar a main (si es necesario)
git branch -M main

# 3. Hacer push
git push -u origin main

# 4. Verificar
git remote -v
```

---

¿Cuál será el nombre de tu repositorio en GitHub?

Una vez que me lo indiques, te daré los comandos exactos para ejecutar.
