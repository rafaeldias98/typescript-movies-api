FROM node:14.8.0-alpine

RUN mkdir -p /app

WORKDIR /app

# Ensure timezone is correct
RUN apk --update add curl tzdata \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
    && echo "America/Sao_Paulo" | tee /etc/TZ /etc/timezone \
    && apk del tzdata

RUN rm -rf /var/cache/apk/*

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
