FROM node:18-alpine

ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
EXPOSE 8081
WORKDIR /app
COPY web .
RUN npm install --omit=dev
RUN npm remove @shopify/app @shopify/cli
RUN npm run buil
# RUN cd frontend && npm install && npm run build
RUN rm -f prisma/dev.sqlite

CMD ["npm", "run", "docker-start"]
