<template>
    <div class="title-container">
        <h3 class="title">Convocatorias abiertas</h3>
        <div class="grid-input-container">
            <div class="form-input-container">
                <label for="job-call-name" class="form-label">Buscar convocatoria</label>
                <input class="form-input" type="text" id="job-call-name" maxlength="100">
            </div>
            <div class="form-input-container">
                <label class="form-label">Cargo</label>
                <select class="form-input" v-model="jobCallType">
                    <option>Administrativo</option>
                    <option>Docente</option>
                </select>
            </div>
        </div>
    </div>
    <div v-if="jobCallType=== 'Administrativo'" class="job-calls-container">
        <JobCallCard v-for="item in jobCalls" :key="item.id" :jobCallName="item.jobCallName"
            :openingDate="item.closingDate" :jobCallNumber="item.jobCallNumber" @click="toJobCallInfo(item)" />
    </div>
    <div v-else class="job-calls-container">
        <div v-for="item in teacherJobCalls" :key="item.id" class="job_call_section">
            <JobCallCard v-for="teacherJobCall in item.teacherJobCalls" :key="teacherJobCall.id" 
            :jobCallName="` ${teacherJobCall.collegeClass.code} ${teacherJobCall.collegeClass.name}`"
            :openingDate="item.closingDate" :jobCallNumber="teacherJobCall.jobCallCode" @click="toTeacherJobCallInfo(teacherJobCall.id)" />
        </div>
       
    </div>
</template>
<script>
import JobCallCard from '../components/job-call/jobCallCard.vue';
import router from '../routes/router'
import { useJobCallStore } from '../store/job-call';
import { ref, onBeforeMount } from 'vue'
export default {
    components: { JobCallCard },
    setup(props) {
        const jobCallStore = useJobCallStore()
        const jobCalls = ref([])
        const teacherJobCalls = ref([])
        const jobCallType = ref('Administrativo')
        onBeforeMount(async () => {
            await jobCallStore.getOpenedJobCalls();
            jobCalls.value = jobCallStore.jobCalls;
            await jobCallStore.getOpenedTeacherJobCalls();
            teacherJobCalls.value = jobCallStore.teacherJobCalls
        })
        const toJobCallInfo = (item) => {
            router.push({ name: 'job-call-info', params: { id: item.id } })
            jobCallStore.selectedJobCall = item
        }
        const toTeacherJobCallInfo = (id) => {
            router.push({ name: 'teacher-job-call-info', params: { id } })
        }
        return { toJobCallInfo,toTeacherJobCallInfo , jobCalls, teacherJobCalls, jobCallType }
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
.job_call_section{
    width: 100%;
    display: flex;
    flex-direction: column;
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
.grid-input-container{
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2,80%);
    column-gap: 25px;
}
</style>