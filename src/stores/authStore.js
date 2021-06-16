
import create from 'zustand'
import { superbase } from '../config/superbase'



const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))
const clearLocalStorage = (key) => window.localStorage.removeItem(key)
export const useStore = create((set, get) => ({
    switchAuth: false,
    user: undefined,
    setUser: user => set(state => ({ user: user }))
    // setLocalStorage('user', user)
    ,
    login: async (email, password) => {
        try {
            const { error, user } = await superbase.auth.signIn({
                email: email,
                password: password
            })
            if (user) {
                //select from the public.users table 
                let { data: users, error } = await superbase
                    .from('users')
                    .select("*")
                    .eq('id', user.id)
                    .single()
                //save the authenticated user into localstorage
                setLocalStorage('user', users)
                get().setUser(users)

            }
            if (error) throw error

        } catch (error) {
            console.log(error || error.message)
        }
    },

    logout: async () => {
        try {
            const { error } = await superbase.auth.signOut()
            if (error) throw error
        } catch (error) {
            console.log(error)
        }
        clearLocalStorage('user')
        set({ user: undefined })
    },

    register: async (email, password, username) => {
        try {
            const { user, error } = await superbase.auth.signUp({
                email, password
            })
            if (error) throw error
            if (user) {
                const { id } = user
                try {
                    const { data, error } = await superbase
                        .from('users')
                        .eq('id', id)
                        .update({ username: username })
                        .single()


                    if (error) throw error
                    //save to  localstorage
                    setLocalStorage('user', data)
                    //  get().setUser(data)
                    set({ data })
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }



}))