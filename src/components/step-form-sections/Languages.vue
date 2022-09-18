<template>
    <div class="main">
        <h3 class="title">Lenguajes</h3>
        <div class="grid-container">
            <div class="form-input-container">
                <label for="first_last_name" class="form-label">Idioma</label>
                <input class="form-input" type="text" id="first_last_name">
            </div>
            <div class="form-input-container">
                <label class="form-label">Nivel de lectura</label>
                <select class="form-input">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Nivel de escritura</label>
                <select class="form-input">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
            <div class="form-input-container">
                <label for="name" class="form-label">Nivel de habla</label>
                <select class="form-input">
                    <option disabled>Elija una opción...</option>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                </select>
            </div>
        </div>
        <button class="add-button">Agregar</button>
        <table>
            <thead>
                <tr>

                    <th>Idioma</th>
                    <th>Escritura</th>
                    <th>Lectura</th>
                    <th>Habla</th>
                    
                    <th class="actions-column">Acciones</th>
                </tr>

            </thead>
            <tbody>
                <tr>

                    <td>Ingléss</td>
                    <td>Básico</td>
                    <td>Medio</td>
                    <td>Avanzado</td>
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
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>