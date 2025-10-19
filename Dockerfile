FROM mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app 
COPY package*.json./
RUN npm ci --silent

# Garantir navegaro/deps
RUN npx playwright insrtall --with deps chromium

COPY . . 
# Build da extensão
RUN npm run build

# Rodar os testes
CMD ["npm", "test"]

