<template>
    <div class="main">
        <h3 class="title">Referencias familiares</h3>
        <span>¿Tiene usted parientes, hasta el segundo grado de consanguinidad o primero de afinidad, según el cómputo
            establecido por la ley civil, que trabaje actualmente en la U.C.B /Regional La Paz?</span>
        <div class="radio-container">
            <input type="radio" value="Si" id="yes_option">
            <label for="yes_option" class="radio-option">Si</label>
            <input type="radio" value="No" id="no_option">
            <label for="no_option" class="radio-option">No</label>
        </div>
        <span>Si respondió “Si” complete los siguientes datos </span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="title" class="form-label">Nombre del pariente</label>
                <input class="form-input" type="text" id="title">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Cargo administrativo o académico</label>
                <input class="form-input" type="text" id="institution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="date" class="form-label">Año de ingreso a la ucb</label>
                <input class="form-input-year" type="number" min="1900" max="2099" step="1" :value="currentYear"
                    id="start-job-year">
            </div>
        </div>
        <div class="add-button-container">
            <button class="add-button">Agregar</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Nombre del pariente</th>
                    <th>Cargo administrativo o académico</th>
                    <th class="data_date">Año de ingreso a la ucb</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Assuresoft</td>
                    <td>Desarrollador</td>
                    <td>12/02/2022</td>
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
    grid-template-columns: 40% 40%;
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