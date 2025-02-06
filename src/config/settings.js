const AMBIT = 'development';

const settings = {
    development: {
        API_URL: 'http://localhost:8000',
    },
    production: {
        API_URL: 'http://localhost:8000',
    },
};

export default settings[AMBIT];