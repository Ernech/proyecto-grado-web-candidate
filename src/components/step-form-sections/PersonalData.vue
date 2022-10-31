<template>
    <div class="main">
        <h3 class="title">Datos Personales</h3>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="first_last_name" class="form-label">Apellido Paterno</label>
                <input class="form-input" type="text" id="first_last_name"
                    v-model.trim="cvStore.personalData.firstLastName">
            </div>
            <div class="form-input-container">
                <label for="second_last_name" class="form-label">Apellido Materno</label>
                <input class="form-input" type="text" id="second_last_name"
                    v-model.trim="cvStore.personalData.secondLastName">
            </div>
            <div class="form-input-container">
                <label for="married_last_name" class="form-label">Apellido de casada</label>
                <input class="form-input" type="text" id="married_last_name"
                    v-model.trim="cvStore.personalData.marriedLastName">
            </div>
            <div class="form-input-container">
                <label for="name" class="form-label">Nombres</label>
                <input class="form-input" type="text" id="name" v-model.trim="cvStore.personalData.name">
            </div>
            <div class="form-input-container">
                <label for="ci" class="form-label">Número de cédula de identidad</label>
                <input class="form-input" type="text" id="ci" v-model.trim="cvStore.personalData.personalIdNumber"
                    maxlength="10">
            </div>
            <div class="form-input-container">
                <label for="ci_city" class="form-label">Expedido en</label>
                <select class="form-input" v-model.trim="cvStore.personalData.issued">
                    <option disabled>Elija una opción...</option>
                    <option>La Paz</option>
                    <option>Oruro</option>
                    <option>Potosí</option>
                    <option>Chuquisaca</option>
                    <option>Cochabamba</option>
                    <option>Tarija</option>
                    <option>Pando</option>
                    <option>Beni</option>
                    <option>Santa Cruz</option>
                </select>
            </div>
        </div>
        <div class="radio-container">
            <div class="radio-container__options">
                <span>Tipo de documento:</span>
                <input type="radio" value="CI" id="ci_option" v-model.trim="cvStore.personalData.idType">
                <label for="ci_option" class="radio-option">CI</label>
                <input type="radio" value="CI Extranjero" id="foreign_ci" v-model.trim="cvStore.personalData.idType">
                <label for="foreign_ci" class="radio-option">CI Extranjero</label>
                <input type="radio" value="RUN" id="run_option" v-model.trim="cvStore.personalData.idType">
                <label for="run_option" class="radio-option">RUN</label>
                <input type="radio" value="Pasaporte" id="passport_option" v-model.trim="cvStore.personalData.idType">
                <label for="passport_option" class="radio-option">Pasaporte</label>
            </div>

            <div class="radio-container__options">
                <span>Género:</span>
                <input type="radio" value="Masculino" id="man_option" v-model.trim="cvStore.personalData.gender">
                <label for="man_option" class="radio-option">Masculino</label>
                <input type="radio" value="Femenino" id="woman_option" v-model.trim="cvStore.personalData.gender">
                <label for="woman_option" class="radio-option">Femenino</label>
            </div>


        </div>
        <div class="radio-container">
            <div class="radio-container__options">
                <span>Estado Civil:</span>
                <input type="radio" value="Soltero" id="single" v-model.trim="cvStore.personalData.civilStatus">
                <label for="ci_option" class="radio-option">Soltero(a)</label>
                <input type="radio" value="Casado" id="married" v-model.trim="cvStore.personalData.civilStatus">
                <label for="foreign_ci" class="radio-option">Casado(a)</label>
                <input type="radio" value="Divorciado" id="divorced" v-model.trim="cvStore.personalData.civilStatus">
                <label for="run_option" class="radio-option">Divorciado(a)</label>
                <input type="radio" value="Viudo" id="widow" v-model.trim="cvStore.personalData.civilStatus">
                <label for="passport_option" class="radio-option">Viudo(a)</label>
            </div>

        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="birthday" class="form-label">Fecha de nacimiento</label>
                <input class="form-input" type="date" id="birthday" v-model.trim="cvStore.personalData.birthDate">
            </div>
            <div class="form-input-container">
                <label for="place_of_birth" class="form-label">Lugar de nacimiento</label>
                <input class="form-input" type="text" id="place_of_birth"
                    v-model.trim="cvStore.personalData.placeOfBirth">
            </div>
            <div class="form-input-container">
                <label for="nationality" class="form-label">Nacionalidad</label>
                <input class="form-input" type="text" id="nationality" v-model.trim="cvStore.personalData.nationality">
            </div>
        </div>
        <div class="grid-container-3">
            <div class="form-input-container">
                <label for="address" class="form-label">Dirección domicilio</label>
                <input class="form-input" type="text" id="address" v-model.trim="cvStore.personalData.address">
            </div>
            <div class="form-input-container">
                <label for="address-zone" class="form-label">Zona</label>
                <input class="form-input" type="text" id="address-zone" v-model.trim="cvStore.personalData.zone">
            </div>
        </div>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="AFP" class="form-label">AFP</label>
                <input class="form-input" type="text" id="AFP" v-model.trim="cvStore.personalData.afp">
            </div>
            <div class="form-input-container">
                <label for="cua" class="form-label">Número de registro CUA</label>
                <input class="form-input" type="text" id="cua" v-model.trim="cvStore.personalData.cuaNumber">
            </div>

            <div class="form-input-container">
                <label for="ci_file" class="form-label">Fotocopia cédula de identidad (PDF)</label>
                <input type="file" class="upload-input" id="ci_file" ref="file" accept=".pdf" @change="selectFile">
            </div>
            <div class="form-input-container">
                <label for="home-phone" class="form-label">Teléfono domicilio</label>
                <input class="form-input" type="text" id="home-phone" v-model.trim="cvStore.personalData.homePhone"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                    maxlength="8">
            </div>
            <div class="form-input-container">
                <label for="cellphone" class="form-label">Teléfono celular</label>
                <input class="form-input" type="text" id="cellphone" v-model.trim="cvStore.personalData.cellPhone"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                    maxlength="9">
            </div>
            <div class="form-input-container">
                <label for="email" class="form-label">Correo electrónico</label>
                <input class="form-input" type="text" id="email" v-model.trim="cvStore.personalData.email">
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useCVStore } from '../../store/cv'
const file = ref(null)
const cvStore = useCVStore()
const selectFile = () => {
    cvStore.personalData.personalIdFile= file.value.files[0];
    
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
    margin: 8px 0;
    gap: 40px;

}

.radio-container__options {
    display: flex;
    flex-direction: row;
    gap: 3px;
}

.radio-container span {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
}

.radio-option {
    font-family: 'Inter', sans-serif;
}
</style>