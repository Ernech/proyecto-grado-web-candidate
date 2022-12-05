<template>
    <div class="main">
        <h3 class="title">Lenguajes</h3>
        <div class="grid-container">
            <div class="form-input-container">
                <label for="first_last_name" class="form-label">Idioma</label>
                <input class="form-input" type="text" id="first_last_name" v-model.trim="searchLanguage"
                @input="filterLanguages"  @focus="suggestionList=true">
                <div class="class-code-list" v-if="filterLanguages.length>0 && suggestionList">
                <ul>
                    <li v-for="item in filterLanguages" @click="setLanguage(item)">
                        {{item.language}}
                    </li>
                </ul>
            </div>

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
import Languages from "../../assets/Languages.json"
const cvStore = useCVStore()
const dataType = ref('LANGUAGE')
const searchLanguage=ref('')
const language = ref('')
const writing = ref('Elija una opción...')
const reading = ref('Elija una opción...')
const speacking = ref('Elija una opción...')
const editCVDataIndex = ref(-1)
const editData = ref(false)
const suggestionList = ref(false)
const languagesList = ref(Languages)
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

const setLanguage=(item)=>{
    language.value=item.language
    suggestionList.value=false
}

const filterLanguages = computed(() => {

if (language.value === '') {
    return languagesList.value
}
return languagesList.value.filter(obj => obj.language.toUpperCase().startsWith(searchLanguage.value.toUpperCase()))
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


.class-code-list {
    width: 105%;
    z-index: 10;
    margin: 0px;
    
}

.class-code-list ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style-type: none;
    margin: 0px 5px;
    gap: 3px;
    z-index: 100;
    background-color: #fff;
    border: 0.5px solid #a7a7a7;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding-left: 5px;
    width: 34.3%;
    
}

.class-code-list ul li {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    width: 100%;
}

.class-code-list ul li:hover {
    background: #ececec;

}
</style>