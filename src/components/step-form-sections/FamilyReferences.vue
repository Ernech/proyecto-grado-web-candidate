<template>
    <div class="main">
        <h3 class="title">Referencias familiares</h3>
        <span>¿Tiene usted parientes, hasta el segundo grado de consanguinidad o primero de afinidad, según el cómputo
            establecido por la ley civil, que trabaje actualmente en la U.C.B /Regional La Paz?</span>
        <div class="radio-container">
            <input type="radio" value="Si" id="yes_option" v-model.trim="hasFamily">
            <label for="yes_option" class="radio-option">Si</label>
            <input type="radio" value="No" id="no_option" v-model.trim="hasFamily">
            <label for="no_option" class="radio-option">No</label>
        </div>
        <span>Si respondió “Si” complete los siguientes datos </span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="title" class="form-label">Nombre del pariente</label>
                <input class="form-input" type="text" id="title" v-model.trim="name" :disabled="isInputDisabled">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Cargo administrativo o académico</label>
                <input class="form-input" type="text" id="institution" v-model.trim="position" :disabled="isInputDisabled">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="date" class="form-label">Año de ingreso a la ucb</label>
                <input class="form-input-year" type="number" min="1956" :max="currentYear" step="1"
                    v-model="teachingUCBStartYear" id="start-job-year" :disabled="isInputDisabled">
            </div>
        </div>
        <div class="add-button-container">
            <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled"
                :class="{disabled:isDisabled}">Agregar</button>
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled"
                :class="{disabled:isDisabled}">Modificar</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nombre del pariente</th>
                    <th>Cargo administrativo o académico</th>
                    <th class="data_date">Año de ingreso a la UCB</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getFamilyReferences" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.position}}</td>
                    <td>{{item.teachingUCBStartYear}}</td>
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
const cvStore = useCVStore()
const dataType = ref('FAMILY_REFERENCES')
const currentYear = new Date().getFullYear()
const name = ref('')
const position = ref('')
const teachingUCBStartYear = ref(currentYear)
const hasFamily = ref('No')
const editData = ref(false)
const editCVDataIndex = ref(-1)
const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        name: name.value,
        position: position.value,
        teachingUCBStartYear: teachingUCBStartYear.value
    }
    console.log(currentYear.value);
    cvStore.cvDataArray.push(newCVData)
    resetValues()
}
const getCVData = (currentFamilyReference) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentFamilyReference)
    name.value = currentFamilyReference.name
    position.value = currentFamilyReference.position
    teachingUCBStartYear.value = currentFamilyReference.teachingUCBStartYear
    editData.value = true
}

const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].name = name.value
        cvStore.cvDataArray[editCVDataIndex.value].position = position.value
        cvStore.cvDataArray[editCVDataIndex.value].teachingUCBStartYear = teachingUCBStartYear.value
        editData.value = false;
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}
const resetValues = () => {
    name.value = ''
    position.value = ''
    teachingUCBStartYear.value = currentYear
    editData.value = false
    editCVDataIndex.value = -1
}

const isDisabled = computed(() => {
    if (!name.value || name.value === '' || !position.value || position.value === '' 
    || teachingUCBStartYear.value > currentYear) {
        return true
    }
    return false
})

const isInputDisabled = computed(()=>{
    if(!hasFamily.value || hasFamily.value ==='' || hasFamily.value==='No'){
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

.radio-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin: 15px 0;
    gap: 5px;

}

.radio-option {
    font-family: 'Inter', sans-serif;
}

.grid-container-1 {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(1, 15%);
    grid-template-rows: 2fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>