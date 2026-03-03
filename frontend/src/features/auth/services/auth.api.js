import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api/auth/",
    withCredentials:true
})

export async function login({email, password }) {
   const res= await api.post('/login',{email,password})
   return res.data
}