
import create from 'zustand'
import { supabase } from '../config/sbaseConfig'
import * as SecureStore from 'expo-secure-store';




export const useUserStore = create((set, get) => ({
    switchAuth: false,
    avatar_url: '',
    username: '',
    session: null,

    lLoading: false,
    rLoading: false,

}))