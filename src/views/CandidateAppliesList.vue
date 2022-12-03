<template>
    <div class="title-container">
        <h3 class="title">Convocatorias postuladas</h3>
        <div class="grid-input-container">
            <div class="form-input-container">
                <label for="job-call-name" class="form-label">Buscar convocatoria</label>
                <input v-if="jobCallType === 'Administrativo'" class="form-input" type="text" id="job-call-name"
                    maxlength="100" @input="filterJobCalls" v-model.trim="searchJobCall">
                <input v-else class="form-input" type="text" id="job-call-name" maxlength="100"
                    @input="filterTeacherJobCalls" v-model.trim="searchTeacherJobCall">
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
    <div v-if="jobCallType === 'Administrativo'" :style="'width:100%'">

        <div class="job-calls-container" v-if="jobCalls.length > 0">
            <JobCallCard v-for="item in pagedData" :key="item.id" :jobCallName="item.jobCallName"
                :openingDate="item.closingDate" :jobCallNumber="item.jobCallNumber" 
                :applyStatus="`${item.apply[0].applyStatus}`"
                @click="toJobCallInfo(item)" />

            <vue-awesome-paginate v-if="jobCallStore.jobCalls.length > 0" :total-items="jobCallStore.jobCalls.length"
                :items-per-page="4" :max-pages-shown="10" v-model="currentPage" :on-click="onClickHandler"
                back-button-class="back-btn"
                next-button-class="next-btn" />
        </div>
        <div v-else class="job-calls-container">
            <p>No existen convocatorias abiertas</p>
        </div>
    </div>
    <div v-else :style="'width:100%'">
        <div class="job-calls-container" v-if="teacherJobCalls.length > 0">
                <JobCallCard v-for="teacherJobCall in teacherPagedData" :key="teacherJobCall.id"
                    :jobCallName="`${teacherJobCall.collegeClass.code} ${teacherJobCall.collegeClass.name}`"
                    :openingDate="`${teacherJobCall.teacherApply[0].applyDate}`" :jobCallNumber="teacherJobCall.jobCallCode"
                    :applyStatus="`${teacherJobCall.teacherApply[0].applyStatus}`"
                    @click="toTeacherJobCallInfo(teacherJobCall.id)" />
            <vue-awesome-paginate v-if="jobCallStore.teacherJobCalls.length > 0"
                :total-items="jobCallStore.teacherJobCalls.length" :items-per-page="4" :max-pages-shown="10"
                v-model="currentPage" :on-click="onClickHandlerTeacher"
                back-button-class="back-btn"
                next-button-class="next-btn" />
        </div>
        <div class="job-calls-container" v-else>
            <p>No existen convocatorias abiertas</p>
        </div>
    </div>
</template>
<script>
import JobCallCard from '../components/job-call/ApplyJobCallCard.vue';
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
        const currentPage = ref(1)
        const searchJobCall = ref('')
        const searchTeacherJobCall = ref('')
        onBeforeMount(async () => {
            await jobCallStore.getAppliesToADMJobCalls();
            jobCalls.value = jobCallStore.jobCallApplies;
            await jobCallStore.getAppliesToTeahcerJobCalls();
            teacherJobCalls.value = jobCallStore.teacherJobCallApplies
          
            onClickHandler(1)
            onClickHandlerTeacher(1)
        })
        const filterJobCalls = () => {
            jobCallStore.jobCallApplies = jobCalls.value
            if (searchJobCall.value !== null && searchJobCall.value !== '') {
                jobCallStore.jobCallApplies = jobCalls.value.filter(obj => obj.jobCallName.search(searchJobCall.value.toUpperCase()) > -1)
            }
            onClickHandler(1)
        }
        const filterTeacherJobCalls = async() => {
            await jobCallStore.getAppliesToTeahcerJobCalls()
            if (searchTeacherJobCall.value !== null && searchTeacherJobCall.value !== '') {
                jobCallStore.teacherJobCallApplies = teacherJobCalls.value.filter(obj => obj.collegeClass.name.search(searchTeacherJobCall.value.toUpperCase()) > -1)
            }
            
            onClickHandlerTeacher(1)
        }

        
        const toJobCallInfo = (item) => {
            router.push({ name: 'job-call-info', params: { id: item.id } })
            jobCallStore.selectedJobCall = item
        }
        const toTeacherJobCallInfo = (id) => {
            router.push({ name: 'teacher-job-call-info', params: { id } })
        }
        const pageItems = ref(4)
        const pagedData = ref([]);
        const teacherPagedData = ref([])
        const onClickHandler = (page) => {
            pagedData.value = jobCallStore.getAppliesPagedList(page, pageItems.value)

        }
        const onClickHandlerTeacher = (page) => {
            teacherPagedData.value = jobCallStore.getTeacherAppliesPAgedList(page, pageItems.value)
        }
        return {
            toJobCallInfo, toTeacherJobCallInfo, jobCalls, teacherJobCalls, jobCallType, jobCallStore,
            onClickHandler, onClickHandlerTeacher, currentPage, pagedData, teacherPagedData,
            filterJobCalls, searchJobCall, filterTeacherJobCalls, searchTeacherJobCall
        }
    }
}
</script>
<style lang="scss">
@import '../styles/labels.scss';
@import '../styles/inputs.scss';

.job-calls-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 15px;
}

.job_call_section {
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

.grid-input-container {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 80%);
    column-gap: 25px;
    align-self: flex-start;
}

.job-calls-container p {
    font-size: 25px;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    color: #000;
}

.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}
.back-btn {
    border: 1px solid #BABABA;
    border-radius: 10px;
    color: #000;
    padding: 10px 20px;
    background-color: #fff;
}
.next-btn {
    border: 1px solid #BABABA;
    border-radius: 10px;
    color: #000;
    padding: 10px 20px;
    background-color: #fff;
}
#job-call-name{
    text-transform: uppercase;
}
</style>