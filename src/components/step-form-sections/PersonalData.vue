<template>
    <div class="main">
        <h3 class="title">Datos Personales</h3>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="first_last_name" class="form-label">Apellido Paterno</label>
                <input class="form-input" type="text" id="first_last_name">
            </div>
            <div class="form-input-container">
                <label for="second_last_name" class="form-label">Apellido Materno</label>
                <input class="form-input" type="text" id="second_last_name">
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Apellido de casada</label>
                <input class="form-input" type="text" id="married_last_name">
            </div>
            <div class="form-input-container">
                <label for="name" class="form-label">Nombres</label>
                <input class="form-input" type="text" id="name">
            </div>
            <div class="form-input-container">
                <label for="ci" class="form-label">Número de cédula de identidad</label>
                <input class="form-input" type="text" id="ci">
            </div>
            <div class="form-input-container">
                <label for="ci_city" class="form-label">Expedido en</label>
                <input class="form-input" type="text" id="ci_city">
            </div>
        </div>
        <div class="radio-container">
            <div class="radio-container__options">
                <span>Tipo de documento:</span>
                <input type="radio" value="CI" id="ci_option">
                <label for="ci_option" class="radio-option">CI</label>
                <input type="radio" value="CI Extranjero" id="foreign_ci">
                <label for="foreign_ci" class="radio-option">CI Extranjero</label>
                <input type="radio" value="RUN" id="run_option">
                <label for="run_option" class="radio-option">RUN</label>
                <input type="radio" value="Pasaporte" id="passport_option">
                <label for="passport_option" class="radio-option">Pasaporte</label>
            </div>

            <div class="radio-container__options">
                <span>Género:</span>
                <input type="radio" value="CI" id="man_option">
                <label for="man_option" class="radio-option">Masculino</label>
                <input type="radio" value="CI Extranjero" id="woman_option">
                <label for="woman_option" class="radio-option">Femenino</label>
            </div>


        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="birthday" class="form-label">Fecha de nacimiento</label>
                <input class="form-input" type="text" id="birthday">
            </div>
            <div class="form-input-container">
                <label for="place_of_birth" class="form-label">Lugar de nacimiento</label>
                <input class="form-input" type="text" id="place_of_birth">
            </div>
            <div class="form-input-container">
                <label for="nationality" class="form-label">Nacionalidad</label>
                <input class="form-input" type="text" id="nationality">
            </div>
        </div>
        <div class="grid-container-3">
            <div class="form-input-container">
                <label for="address" class="form-label">Dirección domicilio</label>
                <input class="form-input" type="text" id="address">
            </div>
            <div class="form-input-container">
                <label for="address-zone" class="form-label">Zona</label>
                <input class="form-input" type="text" id="address-zone">
            </div>
        </div>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="AFP" class="form-label">AFP</label>
                <input class="form-input" type="text" id="AFP">
            </div>
            <div class="form-input-container">
                <label for="cua" class="form-label">Número de registro CUA</label>
                <input class="form-input" type="text" id="cua">
            </div>
           
            <div class="form-input-container">
                <label for="ci_file" class="form-label">Fotocopia cédula de identidad (PDF)</label>
                <input type="file" class="upload-input" id="ci_file" ref="file" accept=".pdf">
            </div>
            <div class="form-input-container">
                <label for="home-phone" class="form-label">Teléfono domicilio</label>
                <input class="form-input" type="text" id="home-phone">
            </div>
            <div class="form-input-container">
                <label for="cellphone" class="form-label">Teléfono celular</label>
                <input class="form-input" type="text" id="cellphone">
            </div>
            <div class="form-input-container">
                <label for="email" class="form-label">Correo electrónico</label>
                <input class="form-input" type="text" id="email">
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "../../styles/labels.scss";
@import "../../styles/inputs.scss";

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

.grid-container-2 {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
.grid-container-3 {
    display: grid;
    grid-template-columns: 62.7% 30%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
}
.radio-container {
    display: flex;
    flex-direction: row;
    width: 85%;
    margin: 15px 0;
    gap: 40px;

}

.radio-container__options {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.radio-container span {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
}

.radio-option {
    font-family: 'Inter', sans-serif;
}
</style>