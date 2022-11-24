<template>
    <div class="main-cv-container">
        <div class="stepper-container">

            <div class="stepper">
                <div class="stepper-progress">
                    <div class="stepper-progress-bar" :style="'width:'+stepperProgress">

                    </div>
                </div>
                <div class="stepper-item" v-for="item in 13" :key="item"
                    :class="{'current':step===item }, {'success': step>item}">
                    <div class="stepper-item-counter">

                    </div>
                </div>
            </div>

            <div class="form-container">
                <PersonalData v-if="step===1" />
                <AcademicTraining v-if="step===2" />
                <Languages v-if="step===3" />
                <CurrentProfessionalData v-if="step===4" />
                <JobExperience v-if="step===5" />
                <TeachingExperience v-if="step===6" />
                <CoursesAndSeminars v-if="step===7" />
                <Publications v-if="step===8" />
                <ConsultingsAndResearchs v-if="step===9" />
                <Awards v-if="step===10" />
                <Affiliations v-if="step===11" />
                <JobReferences v-if="step===12" />
                <FamilyReferences v-if="step===13" />
            </div>
            <div v-if="step<13" class="controls">
                <button class="back-button" @click="decrement">Anterior</button>
                <button class="next-button" @click="increment" :disabled="nextButtonDisabled"
                    :class="{'disabled':nextButtonDisabled}">Siguiente</button>
            </div>
            <div v-else class="controls">
                <button class="back-button" @click="decrement">Anterior</button>
                <button class="next-button" @click="saveCV" 
                    :class="{'disabled':nextButtonDisabled}">Guardar</button>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref, computed,onBeforeMount } from 'vue'
import { useCVStore } from '../store/cv'
import PersonalData from '../components/step-form-sections/PersonalData.vue'
import AcademicTraining from '../components/step-form-sections/AcademicTraining.vue'
import Languages from '../components/step-form-sections/Languages.vue'
import CurrentProfessionalData from '../components/step-form-sections/CurrentProfessionalData.vue'
import JobExperience from '../components/step-form-sections/JobExperience.vue'
import TeachingExperience from '../components/step-form-sections/TeachingExperience.vue'
import CoursesAndSeminars from '../components/step-form-sections/CoursesAndSeminars.vue'
import Publications from '../components/step-form-sections/Publications.vue'
import ConsultingsAndResearchs from '../components/step-form-sections/ConsultingsAndResearchs.vue'
import Awards from '../components/step-form-sections/Awards.vue'
import Affiliations from '../components/step-form-sections/Affiliations.vue'
import FamilyReferences from '../components/step-form-sections/FamilyReferences.vue'
import JobReferences from '../components/step-form-sections/JobReferences.vue'
import router from '../routes/router';
const step = ref(1)
const cvStore = useCVStore()
onBeforeMount(async()=>{
    await cvStore.getCandidateCV()
})
const decrement = () => {
    if(step.value===1){
        router.push('/opened-job-calls')
        return
    }
    step.value--
}
const increment = () => {
    step.value++
}
const saveCV = async() => {
    if(!cvStore.personalData || cvStore.cvDataArray.length<1){
        await cvStore.createCV()
    }
    else{
        await cvStore.editCV()
    }
}


const stepperProgress = computed(() => {
    return (100 / 12) * (step.value - 1) + '%'
})

const nextButtonDisabled = computed(()=>{
    // switch(step.value){
    //     case 1: return validatePersonalData()
    //     case 2: return validateAcademicTraining()
    //     case 5: return validateJobExperience()
    //     case 6: return validateTeachingExperience()
    // }
})

const validatePersonalData = ()=>{
    if(cvStore.personalData.name && cvStore.personalData.name!=='' &&
     cvStore.personalData.firstLastName && cvStore.personalData.firstLastName!=='' &&
     cvStore.personalData.secondLastName && cvStore.personalData.secondLastName!=='' &&
     cvStore.personalData.personalIdNumber && cvStore.personalData.personalIdNumber!=='' && 
     cvStore.personalData.personalIdFile!==null && cvStore.personalData.gender!==''
     && cvStore.personalData.idType!=='' && cvStore.personalData.issued!=='Elija una opción...'
     && cvStore.personalData.civilStatus!=='' && cvStore.personalData.email!==''
     && cvStore.personalData.homePhone!=='' && cvStore.personalData.cellPhone!==''
     && cvStore.personalData.cuaNumber!=='' && cvStore.personalData.afp!==''
     && cvStore.personalData.birthDate && cvStore.personalData.birthDate!==''
     && cvStore.personalData.address && cvStore.personalData.address!==''
     && cvStore.personalData.nationality && cvStore.personalData.nationality!==''
     && cvStore.personalData.zone && cvStore.personalData.zone!==''
    ){
        if(new Date(cvStore.personalData.birthDate)<new Date()){
            return false
        }
    }
    return true
}

const validateAcademicTraining =()=>{
    if(cvStore.getAcademicTrainings.length<1){
        return true
    }
    return false
}
const validateJobExperience =()=>{
    if(cvStore.getJobExperiences.length<1){
        return true
    }
    return false
}
const validateTeachingExperience =()=>{
    if(cvStore.getTeachingExperiences.length<1){
        return true
    }
    return false
}
const isCurrent = (item) => {
    return step.value === item
}
const isSuccess = (item) => {
    return step.value > item
}

</script>
<style lang="scss" scoped>
@import "../styles/stepper.scss";
</style>