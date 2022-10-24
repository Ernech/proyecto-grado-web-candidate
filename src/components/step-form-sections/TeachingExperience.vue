<template>
    <div class="main">
        <h3 class="title">Experiencia docente</h3>
        <div class="form-input-container-year">
            <label for="start-teaching-year" class="form-label">Año en el que empezó a dar clases(en general):</label>
            <input class="form-input-year" type="number" min="1900" :max="currentYear" step="1" v-model="cvStore.personalData.techingStartYear"
                id="start-teaching-year">
        </div>
        <div class="form-input-container-year">
            <label for="start-ucb-year" class="form-label">Año en el que empezó a dar clases en la UCB:</label>
            <input class="form-input-year" type="number" min="1900" :max="currentYear" step="1" v-model="cvStore.personalData.teachingUCBStartYear"
                id="start-ucb-year">
        </div>
        <span>Llenar las materias dictadas en orden cronológico (Empezando por la última)</span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="currrent_job_institution" class="form-label">Materia</label>
                <input class="form-input" type="text" id="currrent_job_institution" v-model.trim="title">
            </div>
            <div class="form-input-container">
                <label for="insitution" class="form-label">Universidad</label>
                <input class="form-input" type="text" id="insitution" v-model.trim="institution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="start-date" class="form-label">Desde</label>
                <input class="form-input" type="month" id="start-date" v-model.trim="startDate">
            </div>
            <div class="form-input-container">
                <label for="finish-date" class="form-label">Hasta</label>
                <input class="form-input" type="month" id="finish-date" v-model.trim="finishDate">
            </div>

        </div>
        <div class="add-button-container">
            <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Agregar</button>
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Modificar</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Materia</th>
                    <th>Universidad</th>
                    <th class="start-date-column">Desde</th>
                    <th class="finish-date-column">Hasta</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getTeachingExperiences" :key="index">
                    <td>{{item.title}}</td>
                    <td>{{item.institution}}</td>
                    <td>{{item.startDate}}</td>
                    <td>{{item.finishDate}}</td>
                    <td class="actions-cell">
                        <fa class="edit-icon" icon="fa-solid fa-pen" @click="getCVData(item)" />
                        <fa class="delete-icon" icon="fa-solid fa-trash" @click="deleteCVData(item)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCVStore } from '../../store/cv';
const currentYear = ref(new Date().getFullYear())
const cvStore = useCVStore()
const dataType = ref('TEACHING_EXPERIENCE')
const title = ref('')
const institution = ref('')
const startDate = ref('')
const finishDate = ref('')
const editData = ref(false)
const editCVDataIndex = ref(-1)
const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        title: title.value,
        institution: institution.value,
        startDate: startDate.value,
        finishDate: finishDate.value,
    }
    cvStore.cvDataArray.push(newCVData)
    resetValues()
}

const getCVData = (currentTeachingExperience) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentTeachingExperience)
    title.value = currentTeachingExperience.title
    institution.value = currentTeachingExperience.institution
    startDate.value = currentTeachingExperience.startDate
    finishDate.value = currentTeachingExperience.finishDate
    editData.value = true
}

const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].title = title.value
        cvStore.cvDataArray[editCVDataIndex.value].institution = institution.value
        cvStore.cvDataArray[editCVDataIndex.value].startDate = startDate.value
        cvStore.cvDataArray[editCVDataIndex.value].finishDate = finishDate.value
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}
const resetValues = () => {
    institution.value = ''
    title.value = ''
    startDate.value = ''
    finishDate.value = ''
    editData.value = false;
}

const isDisabled = computed(()=>{
    if(!title.value || title.value==='' || !institution.value || institution.value===''  
    || !startDate.value || startDate.value==='' || !finishDate.value || finishDate.value===''){
            return true
    }
    return false
})
</script>
<style lang="scss" scoped>
@import "../../styles/labels.scss";
@import "../../styles/inputs.scss";
@import "../../styles/stepper.scss";
@import "../../styles/table.scss";
@import "../../styles/icons.scss";

.main {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

}

.main span {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #7F7C8A;
    align-self: flex-start;
}

.grid-container-1 {
    display: grid;
    grid-template-columns: 40% 55%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(2, 15%);
    grid-template-rows: 2fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>