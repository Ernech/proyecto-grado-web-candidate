<template>
    <div class="main">
        <h3 class="title">Experiencia laboral</h3>
        <div class="form-input-container-year">
            <label for="start-job-year" class="form-label">Año en el que empezó a trabajar de su profesión:</label>
            <input class="form-input-year" type="number" min="1900" max="2099" step="1" id="start-job-year"
                v-model="cvStore.personalData.professionalStartYear">
        </div>
        <span>Empiece por su último trabajo</span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="currrent_job_institution" class="form-label">Lugar de trabajo</label>
                <input class="form-input" type="text" id="currrent_job_institution" v-model.trim="institution">
            </div>
            <div class="form-input-container">
                <label for="charge" class="form-label">Cargo</label>
                <input class="form-input" type="text" id="charge" v-model.trim="position">
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
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Modificarr</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Lugar de trabajo</th>
                    <th>Cargo</th>
                    <th class="start-date-column">Desde</th>
                    <th class="finish-date-column">Hasta</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getJobExperiences" :key="index">
                    <td>{{item.institution}}</td>
                    <td>{{item.position}}</td>
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
import { ref, computed } from 'vue';
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('PROFESSIONAL_EXPERIENCE')
const institution = ref('')
const position = ref('')
const startDate = ref('')
const finishDate = ref('')
const editData = ref(false)
const editCVDataIndex = ref(-1)
const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        institution: institution.value,
        position: position.value,
        startDate: startDate.value,
        finishDate: finishDate.value,
    }
    cvStore.cvDataArray.push(newCVData)
    resetValues()
}

const getCVData = (currentJobExperience) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentJobExperience)
    institution.value = currentJobExperience.institution
    position.value = currentJobExperience.position
    startDate.value = currentJobExperience.startDate
    finishDate.value = currentJobExperience.finishDate
    editData.value = true
}

const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].institution = institution.value
        cvStore.cvDataArray[editCVDataIndex.value].position = position.value
        cvStore.cvDataArray[editCVDataIndex.value].startDate = startDate.value
        cvStore.cvDataArray[editCVDataIndex.value].finishDate = finishDate.value
        editData.value = false;
        resetValues()
    }
}

const resetValues = () => {
    institution.value = ''
    position.value = ''
    startDate.value = ''
    finishDate.value = ''
    editData.value = false;
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}

const isDisabled = computed(()=>{
    if(!position.value || position.value==='' || !institution.value || institution.value===''  
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
    grid-template-columns: 62.7% 30%;
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