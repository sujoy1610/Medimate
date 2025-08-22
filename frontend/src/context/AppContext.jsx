import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    console.log("Backend URL ->", backendUrl);
    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)




    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            }
        } catch (error) {
            console.log(error);

        }
    }

    const value = {
        doctors, token, setToken, backendUrl
    }
    useEffect(() => {
        getDoctorsData()
    }, [])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider