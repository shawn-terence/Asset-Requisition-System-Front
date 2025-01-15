import axios from "axios";
import { API_BASE_URL } from "./user";
import { axiosInstance } from "./user";


export const requestsService={
        getRequests: async () => {
            try {
                const response= await axiosInstance.get('requests/');
                return response.data;
            }
            catch (error) {
                if(axios.isAxiosError(error)){
                    const message = error.response?.data?.message || error.message;
                    throw new Error(message)
                }
                throw new Error('An unexpected error occurred while fetching requests')
            }
        },
        employeeRequests: async () => {
            try {
                const response= await axiosInstance.get('requests/user/');
                return response.data;
            }
            catch (error) {
                if(axios.isAxiosError(error)){
                    const message = error.response?.data?.message || error.message;
                    throw new Error(message)
                }
                throw new Error('An unexpected error occurred while fetching requests')
            }
        },
        requestAction:async(id,data)=>{
            try {
                const response= await axiosInstance.patch(`requests/${id}/`,data);
                return response.data;
            }
            catch (error) {
                if(axios.isAxiosError(error)){
                    const message = error.response?.data?.message || error.message;
                    throw new Error(message)
                }
                throw new Error('An unexpected error occurred while updating the requests')
            }
        },
        deleteRequest:async(id)=>{
            try {
                const response= await axiosInstance.delete(`requests/${id}/delete/`);
                return response.data;
            }
            catch (error) {
                if(axios.isAxiosError(error)){
                    const message = error.response?.data?.message || error.message;
                    throw new Error(message)
                }
                throw new Error('An unexpected error occurred while deleting the requests')

            }
        }
    
}