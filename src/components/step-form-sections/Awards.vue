<template>
    <div class="main">
        <h3 class="title">Premios y distinciones</h3>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Tipo de insitutción</label>
                <select class="form-input">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Clase de insitutción</label>
                <select class="form-input">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Institución que la otorgó</label>
                <input class="form-input" type="text" id="institution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="place" class="form-label">Lugar</label>
                <input class="form-input" type="text" id="place">
            </div>
            <div class="form-input-container">
                <label for="date" class="form-label">Fecha</label>
                <input class="form-input" type="date" id="date">
            </div>
        </div>
        <button class="add-button">Agregar</button>
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
                <tr>

                    <td>Ingléss</td>
                    <td>Básico</td>
                    <td>Medio</td>
                    <td>Avanzado</td>
                    <td>12/12/2021</td>
                    <td class="actions-cell">
                        <fa class="edit-icon" icon="fa-solid fa-pen" />
                        <fa class="delete-icon" icon="fa-solid fa-trash" />
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
</template>
<script>

export default {

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