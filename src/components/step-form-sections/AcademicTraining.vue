<template>
    <div class="main">
        <h3 class="title">Formación académica</h3>
        <div class="grid-container">
            <div class="form-input-container">
                <label for="academic_title" class="form-label">Título</label>
                <input class="form-input" type="text" id="academic_title" v-model.trim="title">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Universidad/Centro/Instituto</label>
                <input class="form-input" type="text" id="institution" v-model.trim="institution">
            </div>
            <div class="form-input-container">
                <label for="academic-degree" class="form-label">Grado</label>
                <select class="form-input" v-model.trim="degree">
                    <option disabled>Elija una opción...</option>
                    <option>Licenciatura</option>
                    <option>Postgrado</option>
                    <option>Maestría</option>
                    <option>Doctorado</option>
                    <option>Técnico superior</option>
                    <option>Técnico medio</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="degree-date" class="form-label">Fecha de titulación</label>
                <input class="form-input" type="month" id="degree-date" v-model.trim="degreeDate">
            </div>
            <div class="form-input-container">
                <label for="tittle-file" class="form-label">Título profesional (PDF)</label>
                <input type="file" class="upload-input" id="tittle-file" ref="file" accept=".pdf">
            </div>
            <div class="form-input-container">
                <label for="national-title-file" class="form-label">Título provición nacional (PDF)</label>
                <input type="file" class="upload-input" id="national-title-file" ref="file" accept=".pdf">
            </div>
        </div>
        <div class="add-button-container">
            <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Agregar</button>
            <button v-else class="add-button" @click="editCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Modificar</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Universidad/centro/instituto</th>
                    <th>Grado</th>
                    <th class="data_date">Fecha de titulación</th>

                    <th class="actions-column">Acciones</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getAcademicTrainings" :key="index">

                    <td>{{item.title}}</td>
                    <td>{{item.institution}}</td>
                    <td>{{item.degree}}</td>
                    <td>{{item.degreeDate}}</td>
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
import { ref,computed } from 'vue';
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('ACADEMIC_TRAINING')
const title = ref('')
const institution = ref('')
const degree = ref('Elija una opción...')
const degreeDate = ref('')
const professionalTitleFile = ref('Título.pdf')
const professionalNTitleFile = ref('Título provición nacional.pdf.pdf')
const editCVDataIndex = ref(-1)
const editData = ref(false)
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()===12 ? 1: new Date().getMonth()+1

const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        title: title.value,
        institution: institution.value,
        degree: degree.value,
        degreeDate: degreeDate.value,
        professionalTitleFile: professionalTitleFile.value,
        professionalNTitleFile: professionalNTitleFile.value
    }

    cvStore.cvDataArray.push(newCVData)
    resetValues()
}
const getCVData = (currentAcademicTraining) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentAcademicTraining)
    title.value = currentAcademicTraining.title
    institution.value = currentAcademicTraining.institution
    degree.value = currentAcademicTraining.degree
    degreeDate.value = currentAcademicTraining.degreeDate
    editData.value = true
}

const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].title = title.value
        cvStore.cvDataArray[editCVDataIndex.value].institution = institution.value
        cvStore.cvDataArray[editCVDataIndex.value].degree = degree.value
        cvStore.cvDataArray[editCVDataIndex.value].degreeDate = degreeDate.value
        editData.value = false;
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}
const resetValues = () => {
    title.value = ''
    institution.value = ''
    degree.value = 'Elija una opción...'
    degreeDate.value = ''
    editData.value = false;
    editCVDataIndex.value = -1
}
const isDisabled = computed(()=>{
    const degreeDateArray = degreeDate.value.split('-')
    if(!title.value || title.value==='' || !institution.value || institution.value==='' || degree.value==='Elija una opción...' 
    || !degreeDate.value || degree.value===''){
      return true
    }
    else{
        if(parseInt(degreeDateArray[0])>currentYear){
            return true

        }else{
            if(parseInt(degreeDateArray[1])>currentMonth){
                return true
            }
            return false
        }
    }
   
})
</script>
<style lang="scss" scoped>
@import "../../styles/labels.scss";
@import "../../styles/inputs.scss";
@import "../../styles/stepper.scss";
@import "../../styles/table.scss";
@import "../../styles/icons.scss";

.main {

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

}

.grid-container {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: repeat(3, 1fr);
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
}
</style>