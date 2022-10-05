<template>
  <div class="main">
    <h3 class="title">Referencias laborales</h3>
    <div class="grid-container-1">
      <div class="form-input-container">
        <label for="name" class="form-label">Nombre completo</label>
        <input class="form-input" type="text" id="name" v-model.trim="name">
      </div>
      <div class="form-input-container">
        <label for="position" class="form-label">Cargo</label>
        <input class="form-input" type="text" id="position" v-model.trim="position">
      </div>
      <div class="form-input-container">
        <label for="institution" class="form-label">Institución</label>
        <input class="form-input" type="text" id="institution" v-model.trim="institution">
      </div>
      <div class="form-input-container">
        <label for="job-relation" class="form-label">Relación laboral</label>
        <input class="form-input" type="text" id="job-relation" v-model.trim="employmentRelationship">
      </div>
      <div class="form-input-container">
        <label for="phone" class="form-label">Teléfono/celular</label>
        <input class="form-input" type="text" id="phone" v-model.trim="phone">
      </div>
      <div class="form-input-container">
        <label for="mail" class="form-label">Correo electrónico</label>
        <input class="form-input" type="mail" id="mail" v-model.trim="email">
      </div>
    </div>
    <div class="add-button-container">
      <button v-if="!editData" class="add-button" @click="addCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Agregar</button>
      <button v-else class="add-button" @click="editCVData" :disabled="isDisabled" :class="{disabled:isDisabled}">Modificar</button>
    </div>
    <table>
      <thead>
        <tr>

          <th>Nombre</th>
          <th>Cargo</th>
          <th>Institución</th>
          <th>Relación laboral</th>
          <th>Teléfono/celular</th>
          <th>Correo electrónico</th>

          <th class="actions-column">Acciones</th>
        </tr>

      </thead>
      <tbody>
        <tr v-for="(item, index) in cvStore.getJobReferences" :key="index">

          <td>{{item.name}}</td>
          <td>{{item.position}}</td>
          <td>{{item.institution}}</td>
          <td>{{item.employmentRelationship}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
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
import { ref, computed } from 'vue'
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('JOB_REFERENCES')
const name = ref('')
const position = ref('')
const institution = ref('')
const employmentRelationship = ref('')
const phone = ref('')
const email = ref('')
const editData = ref(false)
const editCVDataIndex = ref(-1)
const addCVData = () => {
  const newCVData = {
    dataType: dataType.value,
    name: name.value,
    position: position.value,
    institution: institution.value,
    employmentRelationship: employmentRelationship.value,
    phone: phone.value,
    email: email.value
  }
  cvStore.cvDataArray.push(newCVData)
  resetValues()
}

const getCVData = (currentJobReference) => {
    editCVDataIndex.value = cvStore.cvDataArray.indexOf(currentJobReference)
    name.value = currentJobReference.name
    position.value = currentJobReference.position
    institution.value = currentJobReference.institution
    employmentRelationship.value = currentJobReference.employmentRelationship
    phone.value = currentJobReference.phone
    email.value = currentJobReference.email
    editData.value = true
}

const editCVData = () => {
    if (editCVDataIndex.value > -1) {
        cvStore.cvDataArray[editCVDataIndex.value].name = name.value
        cvStore.cvDataArray[editCVDataIndex.value].position = position.value
        cvStore.cvDataArray[editCVDataIndex.value].institution = institution.value
        cvStore.cvDataArray[editCVDataIndex.value].employmentRelationship = employmentRelationship.value
        cvStore.cvDataArray[editCVDataIndex.value].phone = phone.value
        cvStore.cvDataArray[editCVDataIndex.value].email = email.value
        editData.value = false;
        resetValues()
    }
}
const deleteCVData = (item) => {
    cvStore.cvDataArray = cvStore.cvDataArray.filter(obj => obj !== item)
    resetValues()

}

const resetValues = ()=>{
  name.value = ''
  position.value = ''
  institution.value = ''
  employmentRelationship.value = ''
  phone.value = ''
  email.value = ''
  editData.value=false
  editCVDataIndex.value=-1
}

const isDisabled = computed(()=>{
  if(!name.value || name.value==='' || !position.value || position.value==='' || !institution.value || institution.value===''
  || ! employmentRelationship.value ||  employmentRelationship.value==='' || !phone.value || phone.value===''
  || !email.value || email.value==='' ){
    return true
  }
  return false
})

</script>
<style lang="scss" scoped>
@import "../../styles/labels.scss";
@import "../../styles/inputs.scss";
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

.grid-container-1 {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(2, 1fr);
  width: 85%;
  column-gap: 30px;
  row-gap: 20px;
}
</style>