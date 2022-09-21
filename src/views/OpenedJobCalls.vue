<template>
    <div class="title-container">
        <h3 class="title">Convocatorias abiertas</h3>
        <div class="form-input-container">
            <label for="job-call-name" class="form-label">Buscar convocatoria</label>
            <input class="form-input" type="text" id="job-call-name" maxlength="100" >
        </div>
    </div>
    <div class="job-calls-container">
        <JobCallCard :jobCallName="'ASISTENTE TÉCNICO DE MARKETING Y COMUNICACIÓN'" :openingDate="'12-05-2022'"
            :jobCallNumber="'06/2022'" @click="toJobCallInfo" />
        <JobCallCard :jobCallName="'ASISTENTE TÉCNICO DE MARKETING Y COMUNICACIÓN'" :openingDate="'12-05-2022'"
            :jobCallNumber="'06/2022'" />
        <JobCallCard :jobCallName="'ASISTENTE TÉCNICO DE MARKETING Y COMUNICACIÓN'" :openingDate="'12-05-2022'"
            :jobCallNumber="'06/2022'" />
        <JobCallCard :jobCallName="'ASISTENTE TÉCNICO DE MARKETING Y COMUNICACIÓN'" :openingDate="'12-05-2022'"
            :jobCallNumber="'06/2022'" />
    </div>
</template>
<script>
import JobCallCard from '../components/job-call/jobCallCard.vue';
import router from '../routes/router'
export default {
    components: { JobCallCard },
    setup(props) {
        const toJobCallInfo = () => {
            router.push('/job-call-info')
        }
        return { toJobCallInfo }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/labels.scss';
@import '../styles/inputs.scss';

.job-calls-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
}

.title-container {
    padding: 15px 50px;
    align-self: flex-start;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>