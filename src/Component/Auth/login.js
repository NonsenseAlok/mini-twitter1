import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users/register', userData);
  } catch (error) {
    // Handle registration error, e.g., show error message
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users/login', userData);
    // Handle success, e.g., save the JWT token to local storage
    // Dispatch an action to set the authenticated state in Redux
  } catch (error) {
    // Handle login error, e.g., show error message
  }
};
