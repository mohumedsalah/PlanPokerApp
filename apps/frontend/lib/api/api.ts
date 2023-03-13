import ky from 'ky';

const api = ky.extend({
	prefixUrl: '/api',
	timeout: 30000,
});

export default api;
