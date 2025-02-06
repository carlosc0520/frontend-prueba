// const AMBIT = 'development';
const AMBIT = 'production';

const settings = {
    development: {
        API_URL: 'http://localhost:8000',
    },
    production: {
        API_URL: 'https://backend-prueba-3.onrender.com',
    },
};

export default settings[AMBIT];