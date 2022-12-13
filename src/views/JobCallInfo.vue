<template>
    <div class="main">
        <div class="job-call-container">
            <div class="job-call-container__title">
                <h3>{{ selectedJobCall.jobCallName }}</h3>
            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Objetivo del cargo</h3>
                </div>
                <div class="job-call-container__card-body">
                    <p>{{ selectedJobCall.jobCallObj }}</p>
                </div>
            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Principales funciones</h3>
                </div>
                <div class="job-call-container__card-body">
                    <ul v-for="item in selectedJobCall.jobFunctions">
                        <li>{{ item.jobFunction }}</li>

                    </ul>
                </div>

            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Requisitos del perfil</h3>
                </div>
                <div class="job-call-container__card-body">
                    <b>Formación</b>
                    <ul v-for="item in selectedJobCall.academicTrainings">
                        <li>{{ item.training }}</li>
                    </ul>
                    <b>Experiencia laboral</b>
                    <ul v-for="item in selectedJobCall.experiences">
                        <li>{{ item.description }} de al menos {{ item.yearsOfExperience }} años.</li>

                    </ul>
                    <b>Se valorarán</b>
                    <ul v-for="item in selectedJobCall.requiredKnowledge">
                        <li>{{ item.description }}</li>
                    </ul>
                    <b>Competencias de Gestión y Personales:</b>
                    <ul v-for="item in selectedJobCall.aptitudes">
                        <li>{{ item.aptitude }}</li>
                    </ul>
                </div>

            </div>
        </div>
        <div v-if="userStore.accessToken" class="job-call-info">
            <h3>Convocatoria N° {{ selectedJobCall.jobCallNumber }}</h3>
            <div class="job-call-info-date">
                <b>Fecha límite de presentación:</b>
                <span>{{ formatDate }}</span>
            </div>
            <button v-if="!jobCallApllied" @click="openCVValidationModal" class="apply-button">Postularme ahora</button>
            <span v-else>Ya se postuló a esta convocatoria.</span>
        </div>
        <div v-else class="job-call-info">
            <h3>Convocatoria N° {{ selectedJobCall.jobCallNumber }}</h3>
            <div class="job-call-info-date">
                <b>Fecha límite de presentación:</b>
                <span>{{ formatDate }}</span>
            </div>
            <span>Debe iniciar sesión para postularse.</span>
        </div>
    </div>
    <FeetbackModal v-show="showModal" @close-modal="showModal = false" :title="'Currículum vacío'"
        :message="'Debe completar su currículum vitae'" />
    <FeetbackModal v-show="showSuccessModal"
        @close-modal="showSuccessModal = false; candidateRouter.push('/opened-job-calls')" :title="'Postulación exitosa'"
        :message="'Se ha regitrado su postulación'" />
    <FeetbackModal v-show="showErrorModal" @close-modal="showErrorModal=false" :title="'Error'"
        :message="'Ocurrió un error al registrar su postulación'" />
    <CVValidationModalVue v-show="showCVValidationModal" @close-modal="showCVValidationModal=false" @apply="applyJobCall($route.params.id)" 
    />
</template>
<script setup>
import FeetbackModal from '../components/modals/FeetbackModal.vue'
import CVValidationModalVue from '../components/modals/CVValidationModal.vue';
import { useJobCallStore } from '../store/job-call';
import { useUserStore } from '../store/user';
import { useCVStore } from '../store/cv'
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router';
import candidateRouter from '../routes/router'
const jobCallStore = useJobCallStore()
const userStore = useUserStore()
const router = useRoute()
const cvStore = useCVStore()
const selectedJobCall = ref({})
const showModal = ref(false)
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const jobCallApllied = ref(false)
const showCVValidationModal = ref(false)
onBeforeMount(async () => {
    await jobCallStore.getJobCallInfo(router.params.id)
    selectedJobCall.value = jobCallStore.selectedJobCall
    if (userStore.accessToken) {
        await cvStore.getCandidateCV()
        await jobCallStore.getAppliesToADMJobCalls()
        if(jobCallStore.jobCallApplies.find(obj=>obj.id===router.params.id)){
            jobCallApllied.value=true
        }
    }
})

const openCVValidationModal=()=>{
    showCVValidationModal.value=true
}

const applyJobCall = async (jobCallId) => {
    showCVValidationModal.value=false
    if (!cvStore.cvExists) {
        showModal.value = true
        return
    }
    const resp = await jobCallStore.applyToJobCall(jobCallId)
    if (resp === 201) {
        showSuccessModal.value = true;
        return
    }
    showErrorModal.value = true;


}
const formatDate = computed(() => {
    const date = new Date(selectedJobCall.value.closingDate);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
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