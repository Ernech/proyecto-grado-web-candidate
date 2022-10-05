import { defineStore } from 'pinia'
import router from '../routes/router'
export const useUserStore = defineStore('user', {
    state: () => ({
        registerUserData: {},
        isLoading: false,
        accessToken: localStorage.getItem('token')
    }),
    getters:{
        getAccessToken(state){
            return state.accessToken
        }
    },
    actions: {
        async loginUser(email,password){
            this.isLoading=true;
            this.loginData={email,password}
            try {
                const resp = await fetch('http://localhost:3000/user/candidate/token',{
                    method:'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(this.loginData)
                })
                const {token} =await resp.json()
this.accessToken=token
                localStorage.setItem('token',`bearer ${token}`)  
               router.push('/opened-job-calls')
            } catch (error) {
               console.log(error);
            }finally{
                this.loginData=null;
                this.isLoading=false;
            }
        },
        async registerUser(name, lastName, email, password) {
            this.isLoading = true;
            this.registerUserData = { name, lastName, email, password }
            try {
                const resp = await fetch('http://localhost:3000/user/candidate', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.registerUserData)
                })
                const { token } = await resp.json()
                this.accessToken=token
                localStorage.setItem('token', `bearer ${token}`)
                router.push('/opened-job-calls')
            } catch (error) {
                console.log(error);
            } finally {
                this.registerUserData = null;
                this.isLoading = false;
            }
        }, logoutUser(){
            try {
                this.accessToken=null
                localStorage.removeItem('token')
                router.push('/opened-job-calls')
            } catch (error) {
                console.log(error);
            }
        }


    },

})