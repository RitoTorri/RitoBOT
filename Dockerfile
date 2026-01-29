FROM node:22-alpine

# Instalar dependencias para Chromium
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

# Indicar a Puppeteer que use el Chromium de Alpine en lugar de intentar bajar uno
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR  /app

COPY package*.json ./
RUN npm install

COPY . .

# ... después del COPY . . y antes del USER node
RUN mkdir -p /app/.wwebjs_auth && chown -R node:node /app
USER node

EXPOSE 3000

CMD ["npm", "start"]