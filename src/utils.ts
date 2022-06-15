export const storage = {
    getToken: () => {
        let token = window.localStorage.getItem("token")
        if(token) {
            return JSON.parse(token);
        } else {
            return null;
        }
    },
    setToken: (token: any) =>
        window.localStorage.setItem("token", JSON.stringify(token)),
    clearToken: () => window.localStorage.removeItem("token")
};
