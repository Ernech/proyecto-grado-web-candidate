<template>
    <div class="main">
        <h3 class="title">Premios y distinciones</h3>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Tipo de distinción</label>
                <select class="form-input" v-model.trim="distinctionClass">
                    <option disabled>Elija una opción...</option>
                    <option>Institucional</option>
                    <option>Nacional</option>
                    <option>Internacional</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Clase de distinción</label>
                <select class="form-input" v-model.trim="dataClass">
                    <option disabled>Elija una opción...</option>
                    <option>Medalla</option>
                    <option>Diploma</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Institución que la otorgó</label>
                <input class="form-input" type="text" id="institution" v-model.trim="institution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="place" class="form-label">Lugar</label>
                <input class="form-input" type="text" id="place" v-model.trim="location">
            </div>
            <div class="form-input-container">
                <label for="date" class="form-label">Fecha</label>
                <input class="form-input" type="date" id="date" v-model.trim="dataDate">
            </div>
        </div>
        <div class="add-button-container">
            <button v-if="!editData" class="add-button" @click="addCVData">Agregar</button>
            <button v-else class="add-button" @click="editCVData">Modificar</button>
        </div>

        <table>
            <thead>
                <tr>

                    <th>Tipo de distinción</th>
                    <th>Clase de distinción</th>
                    <th>Institución que la otorgó</th>
                    <th>Lugar</th>
                    <th>Fecha</th>

                    <th class="actions-column">Acciones</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getAwards" :key="index">

                    <td>{{item.distinctionClass}}</td>
                    <td>{{item.dataClass}}</td>
                    <td>{{item.institution}}</td>
                    <td>{{item.location}}</td>
                    <td>{{item.dataDate}}</td>
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
import { ref } from 'vue'
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('AWARDS')
const distinctionClass = ref('Elija una opción...')
const dataClass = ref('Elija una opción...')
const institution = ref('')
const location = ref('')
const dataDate = ref('')
const editData = ref(false)
const editCVDataIndex = ref(-1)
const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        distinctionClass: distinctionClass.value,
        dataClass: dataClass.value,
        institution: institution.value,
        location: location.value,
        dataDate: dataDate.value
    }
    cvStore.cvDataArray.push(newCVData)
   resetValues()
}
const getCVData = (currentAward) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentAward)
    distinctionClass.value = currentAward.distinctionClass
    dataClass.value = currentAward.dataClass
    institution.value = currentAward.institution
    location.value = currentAward.location
    dataDate.value = currentAward.dataDate
    editData.value = true
}
const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].distinctionClass = distinctionClass.value
        cvStore.cvDataArray[editCVDataIndex.value].dataClass = dataClass.value
        cvStore.cvDataArray[editCVDataIndex.value].institution = institution.value
        cvStore.cvDataArray[editCVDataIndex.value].location = location.value
        cvStore.cvDataArray[editCVDataIndex.value].dataDate = dataDate.value
        editData.value = false;
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}
const resetValues = ()=>{
    distinctionClass.value = 'Elija una opción...'
    dataClass.value = 'Elija una opción...'
    institution.value = ''
    location.value = ''
    dataDate.value = ''
    editData.value=false
    editCVDataIndex.value=-1
}

</script>
<style lang="scss">
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

.grid-container-1 {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(1, 1fr);
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(2, 25%);
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>