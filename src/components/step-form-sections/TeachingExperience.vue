<template>
    <div class="main">
        <h3 class="title">Experiencia docente</h3>
        <!-- <div class="form-input-container-year">
                <label for="start-teaching-year" class="form-label">Año en el que empezó a dar clases(en
                    general):</label>
                <input class="form-input-year" type="number" min="1950" :max="currentYear" step="1"
                    v-model="cvStore.personalData.teachingStartYear" id="start-teaching-year">
            </div>
            <div class="form-input-container-year">
                <label for="start-ucb-year" class="form-label">Año en el que empezó a dar clases en la UCB:</label>
                <input class="form-input-year" type="number" min="1950" :max="currentYear" step="1"
                    v-model="cvStore.personalData.teachingUCBStartYear" id="start-ucb-year">
            </div>  -->

        <div class="grid-container-teaching-title">
            <div class="form-input-container">
                <label for="teaching-institution" class="form-label">Diplomado en educación superior
                    (Universidad)</label>
                <input class="form-input" type="text" id="teaching-institution"
                    v-model.trim="cvStore.personalData.teachingTitleFileInstitution">
            </div>
            <AcademicTitleNameVue
                v-if="!editTeachingTitleFile && cvStore.personalData.teachingTitleFile && cvStore.personalData.teachingTitleFileName !== '--'"
                @edit="editTeachingTitleFile = true" :dataType="'Fotocopia del diplomado en educación superior'"
                :dataInfo="cvStore.personalData.teachingTitleFileName" />
            <div v-else class="form-input-container">
                <label for="teaching-title-file" class="form-label">Fotocopia del diplomado en educación
                    superior</label>
                <input class="upload-input" type="file" id="teaching-title-file" accept=".pdf" @change="selectFile"
                    ref="file">
            </div>
            <AcademicTitleNameVue
                v-if="!editTeachingPlanFile && cvStore.personalData.teachingPlanFile && cvStore.personalData.teachingPlanFileName !== '--'"
                @edit="editTeachingTitleFile = true"
                :dataType="'Plande asignatura'"
                :dataInfo="cvStore.personalData.teachingPlanFileName" />
            <div v-else class="form-input-container">
                <label for="teaching-plan-file" class="form-label">Plande asignatura</label>
                <input class="upload-input" type="file" id="teaching-plan-file" accept=".pdf" @change="selectFile2"
                    ref="file2">
            </div>
        </div>
        <div class="grid-container-years">
            <div class="form-input-container-year">
                <label for="start-teaching-year" class="form-label">Año en el que empezó a dar clases(en
                    general):</label>
                <input class="form-input-year" type="number" min="1950" :max="currentYear" step="1"
                    v-model="cvStore.personalData.teachingStartYear" id="start-teaching-year">
            </div>
            <div class="form-input-container-year">
                <label for="start-ucb-year" class="form-label">Año en el que empezó a dar clases en la UCB:</label>
                <input class="form-input-year" type="number" min="1950" :max="currentYear" step="1"
                    v-model="cvStore.personalData.teachingUCBStartYear" id="start-ucb-year">
            </div>
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
            <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled"
                :class="{ disabled: isDisabled }">Agregar</button>
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled"
                :class="{ disabled: isDisabled }">Modificar</button>
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
                    <td>{{ item.title }}</td>
                    <td>{{ item.institution }}</td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.finishDate }}</td>
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
import AcademicTitleNameVue from './step-form-components/AcademicTitleName.vue';
const currentYear = ref(new Date().getFullYear())
const cvStore = useCVStore()
const dataType = ref('TEACHING_EXPERIENCE')
const title = ref('')
const institution = ref('')
const startDate = ref('')
const finishDate = ref('')
const editData = ref(false)
const editTeachingTitleFile = ref(false)
const editTeachingPlanFile = ref(false)
const editCVDataIndex = ref(-1)
const file = ref(null)
const file2 = ref(null)
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
const selectFile = () => {
    cvStore.personalData.teachingTitleFile = file.value.files[0];
    cvStore.personalData.teachingTitleFileName = file.value.files[0].name

}
const selectFile2 = () => {
    cvStore.personalData.teachingPlanFile = file2.value.files[0];
    cvStore.personalData.teachingPlanFileName = file2.value.files[0].name
}
const isDisabled = computed(() => {
    if (!title.value || title.value === '' || !institution.value || institution.value === ''
        || !startDate.value || startDate.value === '' || !finishDate.value || finishDate.value === '') {
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

.grid-container-teaching-title {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    width: 90%;
    column-gap: 30px;
    row-gap: 12px;
    margin-bottom: 5px;
}

.grid-container-years {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 5px;
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