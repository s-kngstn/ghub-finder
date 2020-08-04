class GitHub {
  constructor() {
    this.client_id = '8b01f06b6e25d5ffa551';
    this.client_secret = '1954aebd7eff7ee561478b6fa1fff2c93ca2406b';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
