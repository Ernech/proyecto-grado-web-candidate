<template>
    <div class="title-container">
        <h3 class="title">Convocatorias abiertas</h3>
        <div class="form-input-container">
            <label for="job-call-name" class="form-label">Buscar convocatoria</label>
            <input class="form-input" type="text" id="job-call-name" maxlength="100">
        </div>
    </div>
    <div class="job-calls-container">
        <JobCallCard v-for="item in jobCalls" :key="item.id" :jobCallName="item.jobCallName" :openingDate="item.closingDate"
            :jobCallNumber="item.jobCallNumber" @click="toJobCallInfo(item)" />
    </div>
</template>
<script>
import JobCallCard from '../components/job-call/jobCallCard.vue';
import router from '../routes/router'
import { useJobCallStore } from '../store/job-call';
import {ref,onBeforeMount} from 'vue'
export default {
    components: { JobCallCard },
    setup(props) {
        const jobCallStore = useJobCallStore()
        const jobCalls = ref([])
        onBeforeMount(async () => {
            await jobCallStore.getOpenedJobCalls();
            jobCalls.value = jobCallStore.jobCalls;

        })
        const toJobCallInfo = (item) => {
            router.push({name:'job-call-info',params:{id:item.id}})
            jobCallStore.selectedJobCall=item
        }
        return { toJobCallInfo,jobCalls }
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