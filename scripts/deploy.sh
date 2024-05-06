#!/usr/bin/env bash

# Log para cada comando
set -x

# Primer error
set -e

if [[ "$CI" ]]; then
  echo "Existe una configuración para despliegue continuo..."
else
  echo "🚧 No existe una configuración para despliegue continuo... 🚧"
  BRANCH_NAME=$(git branch --show-current)

  if [[ "$BRANCH_NAME" = "main" ]]; then
    npx --no-install lerna run deploy
    git commit -m "chore(deploy): publish importmap" --allow-empty
    echo "✅ Publicado de forma correcta."
    # git push
  else
    echo "Debe estar en la rama main para desplegar la aplicación."
  fi
fi