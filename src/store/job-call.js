import { defineStore } from 'pinia'

export const useJobCall = defineStore('job-call', {

    state: () => ({
        jobCalls: []
    }),
    actions: {
        async getSavedJobCalls() {
            try {
                const resp = await fetch('http://localhost:3000/job-call/saved', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const dataDb = await resp.json()
                this.jobCalls = dataDb
            } catch (error) {
                console.log(error);
            }
        },
    }
})