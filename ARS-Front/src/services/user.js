import axios from "axios";

export const API_BASE_URL = 'http://127.0.0.1:8000/';

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});


const setAuthToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};


const storedToken = localStorage.getItem('authToken');
if (storedToken) {
    setAuthToken(storedToken);
}

export const userService = {
    // User Registration
    userRegister: async (user) => {
        try {
            const response = await axiosInstance.post('user/register', user);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(`Registration failed: ${message}`);
            }
            throw new Error('An unexpected error occurred while registering the user.');
        }
    },

    // User Login
    userLogin: async (credentials) => {
        try {
            const response = await axiosInstance.post('user/login', credentials);
            const token = response.data.token;

            if (token) {
                setAuthToken(token); 
                localStorage.setItem('authToken', token);
            }

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(`Login failed: ${message}`);
            }
            throw new Error('An unexpected error occurred while logging the user in.');
        }
    },

    // Fetch All Users
    allUsers: async () => {
        try {
            const response = await axiosInstance.get('user/all/');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(`Failed to fetch users: ${message}`);
            }
            throw new Error('An unexpected error occurred while fetching users.');
        }
    },
    updatePassword:async(data)=>{
        try {
            const response = await axiosInstance.put('user/updatepassword',data);
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('Failed to update password');
        }
    },
    userDetails:async()=>{
        try {
            const response = await axiosInstance.get('user/userdetails');
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('Failed to get user details');
        }
    },
    changeRole:async(data)=>{
        try {
            const response = await axiosInstance.post('user/changerole',data);
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('Failed to change role');
        }
    },
    userDelete:async(id)=>{
        try {
            const response = await axiosInstance.delete(`user/${id}/delete/`);
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('Failed to delete user');
        }
    },
    userAssets:async()=>{
        try {
            const response = await axiosInstance.get('user/assets');
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('Failed to get user assets');
        }
    }
};
