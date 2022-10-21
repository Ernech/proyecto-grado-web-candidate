<template>
    <div class="main">

        <div class="job-call-container">
            <div class="job-call-container__title">
                <h3>{{code}} {{name}}</h3>
            </div>

            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Formación</h3>
                </div>
                <div class="job-call-container__card-body">
                    <ul v-for="item in getAcademicTraining">
                        <li>{{item.description}}</li>
                    </ul>

                </div>

            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Conocimientos Específicos</h3>

                </div>
                <div class="job-call-container__card-body">
                    <b>Se valorarán conocimientos en:</b>
                    <ul v-for="item in getRequiredKnowledge">
                        <li>{{item.description}}</li>

                    </ul>
                </div>

            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Experiencia laboral</h3>
                </div>
                <div class="job-call-container__card-body">
                    <ul v-for="item in getProfessionalExperience">
                        <li>{{item.description}} de al menos {{item.yearsOfExperience}} años.</li>

                    </ul>
                </div>

            </div>
        </div>
        <div v-if="userStore.accessToken" class="job-call-info">
            <h3>Convocatoria N° {{selectedJobCall.jobCallCode}}</h3>
            <div class="job-call-info-date">
                <b>Fecha límite de presentación:</b>
                <span>6 de abril de 2022</span>
            </div>
            <button class="apply-button" @click="applyJobCall($route.params.id)">Postularme ahora</button>
        </div>
        <div v-else class="job-call-info">
            <h3>Convocatoria N° {{selectedJobCall.jobCallCode}}</h3>
            <div class="job-call-info-date">
                <b>Fecha límite de presentación:</b>
                <span>6 de abril de 2022</span>
            </div>
            <span>Debe iniciar sesión para postularse.</span>
        </div>
    </div>
    <FeetbackModal v-show="showModal" @close-modal="showModal=false" :title="'Currículum vacío'" :message="'Debe completar su currículum vitae'" />
</template>
<script setup>
import { useJobCallStore } from '../store/job-call';
import { useUserStore } from '../store/user';
import {useCVStore} from '../store/cv'
import { onBeforeMount, computed, ref } from 'vue'
import {useRoute} from "vue-router";
import FeetbackModal from '../components/modals/FeetbackModal.vue'
const router = useRoute()
const jobCallStore = useJobCallStore()
const userStore = useUserStore()
const cvStore = useCVStore()
const selectedJobCall = ref({})
const code = ref('')
const name = ref('')
const requirements = ref([])
const showModal = ref(false)
onBeforeMount(async () => {
    await jobCallStore.getTeacherJobCallInfo(router.params.id)
    selectedJobCall.value = jobCallStore.selectedTeacherJobCall
    name.value = selectedJobCall.value.collegeClass.name
    code.value = selectedJobCall.value.collegeClass.code
    requirements.value = selectedJobCall.value.requirements
    if(userStore.accessToken){
        await cvStore.getCandidateCV()
    }
})
const applyJobCall = async (jobCallId)=>{
    if(!cvStore.personalData || cvStore.cvDataArray.length<1){
        showModal.value=true
        return
    }

    await jobCallStore.applyToTeacherJobCall(jobCallId)
}
const getAcademicTraining = computed(() => {
    return requirements.value.filter(obj => obj.requirementType === 'ACADEMIC_TRAINING')
})

const getRequiredKnowledge = computed(() => {
    return requirements.value.filter(obj => obj.requirementType === 'REQUIRED_KNOWLEDGE')
})

const getProfessionalExperience = computed(() => {
    return requirements.value.filter(obj => obj.requirementType === 'PROFESSIONAL_EXPERIENCE')
})
</script>
<style scoped lang="scss">
.main {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    padding-top: 25px;
    padding-left: 50px;
    row-gap: 10px;
    width: 90%;
    height: auto;
    margin: 0;
    margin-bottom: 50px;


}

h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    margin-left: 15px;
}

p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 15px;
}

ul {
    width: 100%;
}

ul li {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    margin: 0px;
    padding: 0;
}

.job-call-container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;


    &__title {
        width: 95%;
        height: 45px;
        left: 47px;
        top: 191px;
        background: #171553;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    &__card {
        display: flex;
        flex-direction: column;

        &-header {
            width: 95%;
            height: 45px;
            left: 47px;
            top: 191px;
            background: #171553;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        &-body {
            width: 94.75%;
            background: #F3F3E7;
            border: 1px solid #000000;
        }

        &-body b {
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 17px;
            margin-left: 10px;
        }
    }
}

.job-call-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-right: 25px;

    width: 90%;
    height: 250px;
    left: 1037px;
    top: 182px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-date {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

    }

    &-date b,
    span {
        font-family: 'Inter';
        font-style: normal;
        font-size: 15px;
        line-height: 24px;
        text-align: center;

    }

}

.job-call-info h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;

    color: #000000;
}

.apply-button {
    background: #0094FF;
    border: 1px solid #0094FF;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 10px 15px;
    align-self: center;
    width: 150px;
    margin: 10px 0px;
}
</style>