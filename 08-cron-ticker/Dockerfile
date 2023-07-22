# Forzar plataforma concreta
# FROM --platform=linux/amd64 node:19.2-alpine3.16

# Con arquitecturas pasadas por parámetro en comando buildx build
# y que soporte mi builder
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# Con mi arquitectura
# Pero también, si se usa el comando buildx build, se le pueden pasar plataformas
# que admita mi builder.
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar la depedencias
# Se ejecuta al construir la imagen
RUN npm install

# Dest /app
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en PRO
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencias de producción
RUN npm install --prod

# Ejecutar comandos cuando se inicia un contenedor
CMD [ "node", "app.js" ]
