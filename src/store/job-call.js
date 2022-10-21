import { defineStore } from 'pinia'
import { getUserId } from '../helpers/get-token-info'
import router from '../routes/router'
export const useJobCallStore = defineStore('job-call', {

    state: () => ({
        jobCalls: [],
        teacherJobCalls:[],
        selectedJobCall:{},
        selectedTeacherJobCall:{}
    }),
    actions: {
        async getOpenedJobCalls() {
            try {
                const resp = await fetch('http://localhost:3000/job-call/opened', {
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
        async getOpenedTeacherJobCalls() {
            try {
                const resp = await fetch('http://localhost:3000/job-call/opened/teacher', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const dataDb = await resp.json()
                this.teacherJobCalls = dataDb
            } catch (error) {
                console.log(error);
            }
        },
        async getJobCallInfo(id) {
            try {
                const resp = await fetch(`http://localhost:3000/job-call/opened/${id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const dataDb = await resp.json()
                this.selectedJobCall = dataDb
            } catch (error) {
                console.log(error);
            }
        },
        async getTeacherJobCallInfo(id) {
            try {
                const resp = await fetch(`http://localhost:3000/job-call/teacher/${id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const dataDb = await resp.json()
                this.selectedTeacherJobCall = dataDb
            } catch (error) {
                console.log(error);
            }
        },

        async applyToJobCall(jobCallId) {
            try {
                const candidateId = getUserId()
                const applyBody={candidateId,jobCallId}
                const resp = await fetch('http://localhost:3000/job-apply', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                    body:JSON.stringify(applyBody)
                })
                //router.push('/opened-job-calls')
                return resp.status 
            } catch (error) {
                console.log(error);
            }
        },
          async applyToTeacherJobCall(jobCallId) {
            try {
                const candidateId = getUserId()
                const applyBody={candidateId,jobCallId}
                const resp = await fetch('http://localhost:3000/job-apply/teacher', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                    body:JSON.stringify(applyBody)
                })
                console.log(resp.status);
                router.push('/opened-job-calls')
            } catch (error) {
                console.log(error);
            }
        },
    }
})