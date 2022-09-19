<template>
    <div class="main">
        <h3 class="title">Publicaciones</h3>    
        <span>Llenar por orden de importancia</span>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="title" class="form-label">Título del libro o publicación</label>
                <input class="form-input" type="text" id="title">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Lugar de publicación</label>
                <input class="form-input" type="text" id="institution">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="country" class="form-label">Tipo de publicación</label>
                <select class="form-input">
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
                <input class="form-input" type="date" id="date">
            </div>

        </div>
        <button class="add-button">Agregar</button>

        <table>
            <thead>
                <tr>
                    <th>Título del libor o publicación</th>
                    <th>Lugar de publicación</th>
                    <th>Lugar/apís</th>
                    <th>Tipo</th>
                    <th class="actions-column">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Assuresoft</td>
                    <td>Desarrollador</td>
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
    grid-template-columns: 40% 40%;
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