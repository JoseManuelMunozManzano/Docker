# Dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps
# cd app
WORKDIR /app
# Dest /app
COPY package.json ./
RUN npm install



# Test y Build
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
# Copiamos del stage deps los node_modules al stage builder en la carpeta ./node_modules
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test
# Aquí haríamos para construir la app optimizada para producción:
# RUN npm run build
# Pero no hace falta porque en nuestra app no tenemos ese script.



# Dependencias de producción
FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod



# Ejecutar la app
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
# Copiar los fuentes que necesito.
# Si tuviese una carpeta dist con los fuentes ya optimizados, copiaría solo ese directorio.
COPY app.js ./
COPY tasks ./tasks
# Ejecutar comandos cuando se inicia un contenedor
CMD [ "node", "app.js" ]
