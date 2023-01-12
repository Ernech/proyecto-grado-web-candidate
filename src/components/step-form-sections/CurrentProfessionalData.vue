<template>
    <div class="main">
        <h3 class="title">Datos profesionales actuales</h3>
        <div class="grid-container-1">
            <div class="form-input-container">
                <label for="currrent_job_institution" class="form-label">Nombre de la entidad donde trabaja</label>
                <input class="form-input" type="text" id="currrent_job_institution" v-model.trim="cvStore.currentProfessionalInfo.institution">
            </div>
            <div class="form-input-container">
                <label for="charge" class="form-label">Ocupación/cargo</label>
                <input class="form-input" type="text" id="charge" v-model.trim="cvStore.currentProfessionalInfo.position">
            </div>
        </div>
        <div class="grid-container-2">
            <div class="form-input-container">
                <label for="phone-office" class="form-label">Teléfono oficina</label>
                <input class="form-input" type="text" id="phone-office" v-model.trim="cvStore.currentProfessionalInfo.phone" 
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" maxlength="8">
            </div>
            <div class="form-input-container">
                <label for="current-job-adress" class="form-label">Dirección de trabajo</label>
                <input class="form-input" type="text" id="current-job-adress" v-model.trim="cvStore.currentProfessionalInfo.address">
            </div>
            <div class="form-input-container">
                <label for="start-date" class="form-label">Fecha de incorporación</label>
                <input class="form-input" type="date" id="start-date" v-model.trim="cvStore.currentProfessionalInfo.dataDate">
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCVStore } from '../../store/cv';
const cvStore= useCVStore()
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
    height: 100%;

}

.grid-container-1 {
    display: grid;
    grid-template-columns: 62.7% 30%;
    grid-template-rows: 1fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
    justify-self: center;
}
.grid-container-2 {
    display: grid;
    grid-template-columns: 30% 62.7%;
    grid-template-rows: 2fr;
    width: 85%;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
    justify-self: center;
}
</style>