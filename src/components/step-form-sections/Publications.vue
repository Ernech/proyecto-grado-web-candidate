<template>
    <div class="main">
        <h3 class="title">Publicaciones</h3>
        <span>Llenar por orden de importancia</span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="title" class="form-label">Título del libro o publicación</label>
                <input class="form-input" type="text" id="title" v-model.trim="title">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Lugar de publicación</label>
                <input class="form-input" type="text" id="institution" v-model.trim="location">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="country" class="form-label">Tipo de publicación</label>
                <select class="form-input" v-model.trim="dataClass">
                    <option disabled>Elija una opción...</option>
                    <option>Libro</option>
                    <option>Artículo arbitrado</option>
                    <option>Texto de materia</option>
                    <option>Guía de materia</option>
                    <option>Artículo</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="date" class="form-label">Fecha de publicación</label>
                <input class="form-input" type="date" id="date" v-model.trim="dataDate">
            </div>

        </div>
        <div class="add-button-container">
            <button class="add-button" @click="addCVData">Agregar</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Título del libro o publicación</th>
                    <th>Lugar de publicación</th>
                    <th>Tipo</th>
                    <th class="data_date">Fecha</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cvStore.getPublications" :key="index">
                    <td>{{item.title}}</td>
                    <td>{{item.location}}</td>
                    <td>{{item.dataClass}}</td>
                    <td>{{item.dataDate}}</td>
                    <td class="actions-cell">
                        <fa class="edit-icon" icon="fa-solid fa-pen" />
                        <fa class="delete-icon" icon="fa-solid fa-trash" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCVStore } from '../../store/cv';
const cvStore = useCVStore()
const dataType = ref('PUBLICATIONS')
const title = ref('')
const location = ref('')
const dataClass = ref('Elija una opción...')
const dataDate = ref('')

const addCVData = () => {
    const newCVData = {
        dataType: dataType.value,
        title: title.value,
        location: location.value,
        dataClass: dataClass.value,
        dataDate: dataDate.value,
    }
    cvStore.cvDataArray.push(newCVData)
    title.value = ''
    location.value = ''
    dataClass.value = 'Elija una opción...'
    dataDate.value = ''
}
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
    grid-template-columns: 45% 45%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(2, 20%);
    grid-template-rows: 2fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>