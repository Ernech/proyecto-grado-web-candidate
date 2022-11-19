import { defineStore } from 'pinia'
import { getUserId } from '../helpers/get-token-info'
import router from '../routes/router'
export const useJobCallStore = defineStore('job-call', {

    state: () => ({
        jobCalls: [],
        teacherJobCalls: [],
        selectedJobCall: {},
        selectedTeacherJobCall: {},
        jobCallApplies: [],
        teacherJobCallApplies: [],
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
                const resp = await fetch('http://localhost:3000/job-call/opened/teacher/jc', {
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
                const applyBody = { candidateId, jobCallId }
                const resp = await fetch('http://localhost:3000/job-apply', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                    body: JSON.stringify(applyBody)
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
                const applyBody = { candidateId, jobCallId }
                const resp = await fetch('http://localhost:3000/job-apply/teacher', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                    body: JSON.stringify(applyBody)
                })
                // console.log(resp.status);
                //router.push('/opened-job-calls')
                return resp.status
            } catch (error) {
                console.log(error);
            }
        },
        async getAppliesToADMJobCalls() {
            try {
                const candidateId = getUserId()
                const resp = await fetch(`http://localhost:3000/job-apply/candidate/${candidateId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                })
                const dataDB = await resp.json()
                this.jobCallApplies = dataDB
            } catch (error) {
                console.log(error);
            }
        },
        async getAppliesToTeahcerJobCalls() {
            try {
                const candidateId = getUserId()
                const resp = await fetch(`http://localhost:3000/job-apply/teacher/candidate/${candidateId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem('token')
                    },
                })
                const dataDB = await resp.json()
                this.teacherJobCallApplies = dataDB
            } catch (error) {
                console.log(error);
            }
        },
        getPagedList(page, pageItems) {
            const pageData = [];
            let init = (page * pageItems) - pageItems
            let end = (page * pageItems)
            for (let i = init; i < end; i++) {
                if (this.jobCalls[i]) {
                    pageData.push(this.jobCalls[i])
                } else {
                    break
                }

            }
            return pageData;
        },
        getAppliesPagedList(page, pageItems) {
            const pageData = [];
            let init = (page * pageItems) - pageItems
            let end = (page * pageItems)
            for (let i = init; i < end; i++) {
                if (this.jobCallApplies[i]) {
                    pageData.push(this.jobCallApplies[i])
                } else {
                    break
                }

            }
            return pageData;
        },
        getTeacherPagedList(page, pageItems) {
            const pageData = [];
            const jobCalls = this.teacherJobCalls.map(obj => obj.teacherJobCalls)
            let init = (page * pageItems) - pageItems
            let end = (page * pageItems)
            for (let i = init; i < end; i++) {
                if (jobCalls[i]) {
                    pageData.push(jobCalls[i])
                } else {
                    break
                }

            }
            return pageData;
        },
        getTeacherAppliesPAgedList(page, pageItems) {
            const pageData = [];
            let init = (page * pageItems) - pageItems
            let end = (page * pageItems)
            for (let i = init; i < end; i++) {
                if (this.teacherJobCallApplies[i]) {
                    pageData.push(this.teacherJobCallApplies[i])
                } else {
                    break
                }

            }
            return pageData;
        }
    }
})