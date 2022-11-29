<template>
    <div>
        <div class="modal-overlay">
            <div class="modal">
                <h3 class="title">Declaración jurada de incompatibilidades</h3>
                <div class="radio-container">
                    <input type="checkbox"  true-value="yes" false-value="no" id="yes_option" v-model.trim="cvValidated">
                    <label for="yes_option" class="radio-option"><p>Declaro que los datos registrados en mi formulario de hoja de vida son veraces.</p></label>
                    
                </div>
                <div class="button-container">
                    <button class="add_button" :disabled="isDisabled" :class="{disabled:isDisabled}" @click="$emit('apply')">Postularme</button>
                    <button class="back-button" @click="$emit('close-modal')">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref,computed} from 'vue'

const cvValidated=ref('')

const isDisabled=computed(()=>{
    if(cvValidated.value==='no' || cvValidated.value===''){
        return true
    }
    return false
})


</script>
<style lang="scss" scoped>
@import '../../styles/buttons.scss';

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000da;

}

.modal {
    margin: 0px;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 40%;
    width: 40%;
    padding: 30px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.modal p {
    font-family: 'Inter', sans-serif;
    font-size: 15px;

}
label p {
    font-family: 'Inter', sans-serif;
    font-size: 15px;

}
.title {
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-size: 30px;
    color: #064D90;
    margin: 0px;
    justify-self: center;
    align-self: center;
}

.radio-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin: 15px 0;
    gap: 5px;
    justify-content: center;

}

.radio-option {
    font-family: 'Inter', sans-serif;
}
.button-container{
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 100%;
    justify-content: center;
}
</style>