const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const POSTS_URL = `${API_BASE_URL}/api/v1/posts`;
export default API_BASE_URL;
