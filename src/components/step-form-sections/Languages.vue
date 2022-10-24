<template>
    <div class="main">
        <h3 class="title">Lenguajes</h3>
        <div class="grid-container">
            <div class="form-input-container">
                <label for="first_last_name" class="form-label">Idioma</label>
                <input class="form-input" type="text" id="first_last_name" v-model.trim="language">
            </div>
            <div class="form-input-container">
                <label class="form-label">Nivel de lectura</label>
                <select class="form-input" v-model.trim="reading">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Nivel de escritura</label>
                <select class="form-input" v-model.trim="writing">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="name" class="form-label">Nivel de habla</label>
                <select class="form-input" v-model.trim="speacking">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
        </div>
        <div class="add-button-container">
            <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Agregar</button>
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Modificar</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="language-column">Idioma</th>
                    <th class="writing-column">Escritura</th>
                    <th class="reading-column">Lectura</th>
                    <th class="listening-column">Habla</th>
                    
                    <th class="actions-column">Acciones</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getLanguages" :key="index">
                    <td>{{item.language}}</td>
                    <td>{{item.writing}}</td>
                    <td>{{item.reading}}</td>
                    <td>{{item.speacking}}</td>
                    <td class="actions-cell">
                        <fa class="edit-icon" icon="fa-solid fa-pen" @click="getCVData(item)"/>
                        <fa class="delete-icon" icon="fa-solid fa-trash" @click="deleteCVData(item)"/>
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
</template>
<script setup>
 import { ref,computed } from 'vue';
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('LANGUAGE')
const language = ref('')
const writing = ref('Elija una opción...')
const reading = ref('Elija una opción...')
const speacking = ref('Elija una opción...')
const editCVDataIndex = ref(-1)
const editData = ref(false)
const addCVData = () => {
    const newCVData = {
        dataType:dataType.value,
        language: language.value,
        writing: writing.value,
        reading: reading.value, 
        speacking: speacking.value,
    }
    cvStore.cvDataArray.push(newCVData)
    resetValues()
  
}
const getCVData = (currentLanguage) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentLanguage)
    language.value = currentLanguage.language
    writing.value = currentLanguage.writing
    reading.value = currentLanguage.reading
    speacking.value = currentLanguage.speacking
    editData.value = true
}
const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].language = language.value
        cvStore.cvDataArray[editCVDataIndex.value].writing = writing.value
        cvStore.cvDataArray[editCVDataIndex.value].reading = reading.value
        cvStore.cvDataArray[editCVDataIndex.value].speacking = speacking.value
        editData.value = false;
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}
const resetValues = () => {
    language.value = ''
    writing.value = 'Elija una opción...'
    reading.value = 'Elija una opción...'
    speacking.value = 'Elija una opción...'
    editData.value = false;
    editCVDataIndex.value = -1
}
const isDisabled = computed(()=>{
    if(!language.value || language.value==='' || writing.value==='Elija una opción...' || reading.value==='Elija una opción...' 
    ||  speacking.value==='Elija una opción...' ){
            return true
    }
    return false
})
</script>
<style lang="scss" scoped>
@import "../../styles/labels.scss";
@import "../../styles/inputs.scss";
@import "../../styles/table.scss";
@import "../../styles/icons.scss";
@import "../../styles/stepper.scss";
.main {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

}
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
}
</style>