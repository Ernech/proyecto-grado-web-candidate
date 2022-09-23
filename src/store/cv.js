import { defineStore } from 'pinia'
import { getUserId } from '../helpers/get-token-info'
import  router  from '../routes/router'
export const useCVStore = defineStore('cv', {
    state: () => ({
        personalData: {
            firstLastName: '',
            secondLastName: '',
            name: '',
            marriedLastName: '',
            personalIdNumber: '',
            issued: '',
            idType: '',
            gender: '',
            civilStatus: '',
            birthDate: '',
            placeOfBirth: '',
            nationality: '',
            address: '',
            zone: '',
            afp: '',
            cuaNumber: '',
            homePhone: '',
            cellPhone: '',
            email: '',
            personalIdFile: 'CI.pdf',
            professionalStartYear: new Date().getFullYear(),
        },
        currentProfessionalInfo: {
            dataType: 'CURRENT_PROFESSIONAL_INFO',
            institution: '',
            position: '',
            phone: '',
            address: '',
            dataDate: '',
        },
        teachingYears: {
            dataType: 'TEACHING_YEARS',
            techingStartYear: new Date().getFullYear(),
            teachingUCBStartYear: new Date().getFullYear(),

        },
        cvDataArray: [],
    }),
    getters: {
        getAcademicTrainings(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'ACADEMIC_TRAINING');
        },
        getLanguages(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'LANGUAGE');
        },
        getJobExperiences(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'PROFESSIONAL_EXPERIENCE');
        },
        getTeachingExperiences(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'TEACHING_EXPERIENCE');
        },
        getCoursesAndSeminars(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'COURSES_AND_SEMINARS');
        },
        getPublications(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'PUBLICATIONS');
        },
        getConsultingAndResearch(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'CONSULTING_AND_RESEARCH');
        },
        getAwards(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'AWARDS');
        },
        getAffiliations(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'AFFILIATIONS');
        },
        getJobReferences(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'JOB_REFERENCES');
        },
        getFamilyReferences(state) {
            return state.cvDataArray.filter(obj => obj.dataType === 'FAMILY_REFERENCES');
        }
    },
    actions: {
        async createCV() {
          
            this.cvDataArray.push(this.currentProfessionalInfo)
            this.cvDataArray.push(this.teachingYears)
            const createCVBody = {
                personalData: this.personalData,
                cvData: this.cvDataArray
            }
            try {
                const candidateId = getUserId()
                const resp = await fetch(`http://localhost:3000/cv/${candidateId}/candidate`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json",
                    'Authorization': localStorage.getItem('token') },
                    body: JSON.stringify(createCVBody)
                });
                console.log(resp.status);
                router.push('/opened-job-calls')
            } catch (error) {
                console.log(error);
            }

        }
    }
})