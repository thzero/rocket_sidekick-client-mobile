#!/bin/bash

npm run build2

copy capacitor.config.json.prod capacitor.config.json

npx cap sync