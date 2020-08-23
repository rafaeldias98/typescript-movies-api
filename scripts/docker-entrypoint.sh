#!/bin/sh
/app/scripts/wait-for-it.sh storage:3306
if [ ! -d "./node_modules/" ]; then
  echo "Installing dependencies"
  npm install
fi
echo "Starting API"
npm run start:watch
