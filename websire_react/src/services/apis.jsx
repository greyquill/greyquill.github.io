const API_URL = process.env.COMPANY_BACKEND_URL;

export const api = {
  async registerUser(userData) {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return response.json();
  },


  async login(identifier, password) {
    console.log('API_URL:', API_URL);

    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: identifier,
        password
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login response:', errorData);
      throw new Error(errorData.message || 'Login failed');
    }

    return response.json();
  }
};
