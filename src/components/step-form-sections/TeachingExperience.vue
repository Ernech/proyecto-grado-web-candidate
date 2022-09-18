<template>
    <div class="main">
        <h3 class="title">Teaching experience</h3>
        <div class="form-input-container-year">
            <label for="start-teaching-year" class="form-label">Año en el que empezó a dar clases(en general):</label>
            <input class="form-input-year" type="number" min="1900" max="2099" step="1" :value="currentYear"
                id="start-teaching-year">
        </div>
        <div class="form-input-container-year">
            <label for="start-ucb-year" class="form-label">Año en el que empezó a dar clases en la UCB:</label>
            <input class="form-input-year" type="number" min="1900" max="2099" step="1" :value="currentYear"
                id="start-ucb-year">
        </div>
        <span>Llenar las materias dictadas en orden cronológico (Empezando por la última)</span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="currrent_job_institution" class="form-label">Materia</label>
                <input class="form-input" type="text" id="currrent_job_institution">
            </div>
            <div class="form-input-container">
                <label for="insitution" class="form-label">Universidad</label>
                <input class="form-input" type="text" id="insitution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="start-date" class="form-label">Desde</label>
                <input class="form-input" type="month" id="start-date">
            </div>
            <div class="form-input-container">
                <label for="finish-date" class="form-label">Hasta</label>
                <input class="form-input" type="month" id="finish-date">
            </div>

        </div>
        <button class="add-button">Agregar</button>

        <table>
            <thead>
                <tr>
                    <th>Materia</th>
                    <th>Universidad</th>
                    <th>Desde</th>
                    <th>Hasta</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Programación I</td>
                    <td>Universidad católica boliviana</td>
                    <td>12/2021</td>
                    <td>02/2022</td>
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
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
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