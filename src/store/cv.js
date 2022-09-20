import {defineStore} from 'pinia'

export const useCVStore = defineStore('cv',{
    state:()=>({
        personalData:{
            firstLastName:'',
            secondLastName:'',
            name:'',
            marriedLastName:'',
            personalIdNumber:'',
            issued:'',
            idType:'',
            gender:'',
            civilStatus:'',
            birthDate:'',
            placeOfBirth:'',
            nationality:'',
            address:'',
            zone:'',
            afp:'',
            cuaNumber:'',
            homePhone:'',
            cellPhone:'',
            email:'',
            personalIdFile:'CI.pdf',
            professionalStartYear:new Date().getFullYear(),
        },
            cvDataArray:[],       
    }),
    getters:{
        getAcademicTrainings(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='ACADEMIC_TRAINING');
        },
        getLanguages(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='LANGUAGE');
        },
        getJobExperiences(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='PROFESSIONAL_EXPERIENCE');
        },
        getTeachingExperiences(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='TEACHING_EXPERIENCE');
        },
        getCoursesAndSeminars(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='COURSES_AND_SEMINARS');
        },
        getPublications(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='PUBLICATIONS');
        },
        getConsultingAndResearch(state){
            return state.cvDataArray.filter(obj=>obj.dataType==='CONSULTING_AND_RESEARCH');
        }
    }
})