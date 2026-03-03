import { useContext } from "react";
import { login } from "../services/auth.api";
import { context } from "../context/AuthContext";

export function useAuth() {
    const { loading, setLoading, user, setUser } = useContext(context)
    async function userLogin({ email, password }) {
        try {
            setLoading(true)
            const data = await login({ email, password })
            setUser(data.user)
            setLoading(false)
            return data.user
        } catch (err) {
            throw err
        }
    }
    return {userLogin}

}