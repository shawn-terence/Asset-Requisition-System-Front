
import axios from "axios";
import { API_BASE_URL } from "./user";
import { axiosInstance } from "./user";


export const assetService={
    addAsset:async(data)=>{
        try {
            const response=await axiosInstance.post('assets/add/',data);
            return response.data;
        }
        catch (error) {
            if(axios.isAxiosError(error)){
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('An unexpected error occurred while adding the asset')
        }
    },
    getAssets:async()=>{
        try {
            const response=await axiosInstance.get('assets/allassets/');
            return response.data;
        }
        catch (error) {
            if(axios.isAxiosError(error)){
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('An unexpected error occurred while fetching the assets')
        }
    },
    assetRequest:async(id)=>{
        try {
            const response=await axiosInstance.post(`assets/${id}/request/`);
            return response.data;
        }
        catch (error) {
            if(axios.isAxiosError(error)){
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('An unexpected error occurred while requesting the asset')
        }
    },
    deleteAsset:async(id)=>{
        try {
            const response=await axiosInstance.delete(`assets/${id}/delete/`);
            return response.data;
        }
        catch (error) {
            if(axios.isAxiosError(error)){
                const message = error.response?.data?.message || error.message;
                throw new Error(message)
            }
            throw new Error('An unexpected error occurred while deleting the asset')
        }
    }
}