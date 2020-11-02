const MONGO_USERNAME = 'vietlinhco';
const MONGO_PASSWORD = 'Ankedalinhco1';
const mongoUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ds235169.mlab.com:35169/match`;

const Url = {
  development: {
    mongoUrl,
  },
  testing: {
    mongoUrl,
  },
  production: {
    mongoUrl,
  }
}


export const URL = Url.development


