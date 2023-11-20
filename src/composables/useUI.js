import asistenciaApi from "../api/asistenciaAPI";

const useUI = () => {
    const getUsers = async (info) => {
        try {
            const { data } = await asistenciaApi.post("/auth/signin", info)
            return data
        } catch (error) {
            if (error.response) {
                error.details = {
                    status: error.response.status,
                    data: error.response.data,
                };
            }
            throw error;
        }
    }

    const getUsersbyID = async (info, id) => {
        try {
            const { data } = await asistenciaApi.get(`/users/${id}`, info)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const postUsers = async (info) => {
        try {
            const { data } = await asistenciaApi.post("/users", info)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const ResetPassword = async (info) => {
        try {
            const { data } = await asistenciaApi.post("/auth/password/reset", info)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const getContent = async () => {
        try {
            const response = await asistenciaApi.get("/content")
            return response.data
        } catch (error) {
            console.error("Error al obtener la data: ", error);
            throw error;
        }
    }

    const userProfile = async () => {
        try {
            const response = await asistenciaApi.get("/users/profile/me")
            return response.data 
        } catch (error) {
            console.error("error al obtener data del usuario: ", error)
        }
    }



    return {
        getUsers,
        postUsers,
        getUsersbyID,
        ResetPassword,
        getContent,
        userProfile
    }
}
export default useUI