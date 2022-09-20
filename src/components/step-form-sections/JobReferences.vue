<template>
  <div class="main">
    <h3 class="title">Referencias laborales</h3>
    <div class="grid-container-1">
      <div class="form-input-container">
        <label for="name" class="form-label">Nombre completo</label>
        <input class="form-input" type="text" id="name">
      </div>
      <div class="form-input-container">
        <label for="position" class="form-label">Cargo</label>
        <input class="form-input" type="text" id="position">
      </div>
      <div class="form-input-container">
        <label for="institution" class="form-label">Institución</label>
        <input class="form-input" type="text" id="institution">
      </div>
      <div class="form-input-container">
        <label for="job-relation" class="form-label">Relación laboral</label>
        <input class="form-input" type="text" id="job-relation">
      </div>
      <div class="form-input-container">
        <label for="phone" class="form-label">Teléfono/celular</label>
        <input class="form-input" type="text" id="phone">
      </div>
      <div class="form-input-container">
        <label for="mail" class="form-label">Correo electrónico</label>
        <input class="form-input" type="mail" id="mail">
      </div>
    </div>
    <div class="add-button-container">
      <button class="add-button">Agregar</button>
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
                <tr>

                    <td>Nombre</td>
                    <td>Cargo</td>
                    <td>Institución</td>
                    <td>Relación laboral</td>
                    <td>Teléfono/celular</td>
                    <td>Correo electrónico</td>
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