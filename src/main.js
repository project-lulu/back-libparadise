class Paradise {
	constructor(config) {
		this.config = {
			protocol: config.protocol || 'http',
			host: config.host || 'localhost',
			port: config.port || '40000'
		}

		this.config.url = `${this.config.protocol}://${this.config.host}:${this.config.port}`

	}
	async createUser() {
		const res = await fetch(`${this.config.url}/users/new`, {
			method: 'POST'
		});
		const json = await res.json();

		return json.payload;
	}
	async fetchUser(id) {
		const res = await fetch(`${this.config.url}/users/${id}`);
		const json = await res.json();

		return json.payload;
	}
	async listUsers() {
		const res = await fetch(`${this.config.url}/users`);
		const json = await res.json();

		return json.payload.ids;
	}
	async setUserData(id, payload) {
		const res = await fetch(`${this.config.url}/users/${id}`)
		await res.text();
		return 1;
	}
}

module.exports = {
	Paradise
}
