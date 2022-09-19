<template>
    <div class="main">
        <h3 class="title">Formación académica</h3>
        <div class="grid-container">
            <div class="form-input-container">
                <label for="academic_title" class="form-label">Título</label>
                <input class="form-input" type="text" id="academic_title">
            </div>
            <div class="form-input-container">
                <label for="institution" class="form-label">Universidad/Centro/Instituto</label>
                <input class="form-input" type="text" id="institution">
            </div>
            <div class="form-input-container">
                <label for="academic-degree" class="form-label">Grado</label>
                <input class="form-input" type="text" id="academic-degree">
            </div>
            <div class="form-input-container">
                <label for="degree-date" class="form-label">Fecha de titulación</label>
                <input class="form-input" type="text" id="degree-date">
            </div>
            <div class="form-input-container">
                <label for="tittle-file" class="form-label">Título profecional (PDF)</label>
                <input type="file" class="upload-input" id="tittle-file" ref="file" accept=".pdf">
            </div>
            <div class="form-input-container">
                <label for="national-title-file" class="form-label">Título provición nacional (PDF)</label>
                <input type="file" class="upload-input" id="national-title-file" ref="file" accept=".pdf">
            </div>
        </div>
        <button class="add-button">Agregar</button>
        <table>
            <thead>
                <tr>

                    <th>Título</th>
                    <th>Universidad/centro/instituto</th>
                    <th>Grado</th>
                    <th>Fecha de titulación</th>
                    
                    <th class="actions-column">Acciones</th>
                </tr>

            </thead>
            <tbody>
                <tr>

                    <td>Ingeniería de sistemas</td>
                    <td>Universidad católica boliviana San Pablo</td>
                    <td>Pregrado</td>
                    <td>12/03/2023</td>
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

.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: repeat(3, 1fr);
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
</style>