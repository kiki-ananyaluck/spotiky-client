import axios from 'axios'

export const login = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/login`);
        if (response.status === 200) {
            return response;
        } else {
            console.error(`CheckRoleID response status: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error("Error in CheckRoleID:", error);
        return null;
    }
};