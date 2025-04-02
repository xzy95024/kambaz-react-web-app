import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api`;

export const fetchEnrolledUsers = async (courseId: string) => {
    const { data } = await axios.get(`${API}/courses/${courseId}/people`);
    return data;
};