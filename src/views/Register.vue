<template >
    <div class="main">
        <div class="grid-item-1">

            <img src="../assets/cropped-logo-UCB.png">

            <h3 class="grid-item-1__text">Departamento de recursos humanos</h3>

        </div>
        <div class="grid-item-2">
            <div class="card-container">
                <h3 class="card-container__text">Registro</h3>
                <div class="form">
                    <form @submit.prevent="handleSubmit">
                        <div class="form-input-container">
                            <label for="name" class="form-label">Nombres</label>
                            <input class="form-input" type="text" placeholder="Ingrese sus nombres" id="name"
                                v-model.trim="names">
                        </div>
                        <div class="form-input-container">
                            <label for="first_last_name" class="form-label">Apellido Paterno</label>
                            <input class="form-input" type="text" placeholder="Ingrese su apellido paterno"
                                id="first_last_name" v-model.trim="firstLastName">
                        </div>
                        <div class="form-input-container">
                            <label for="second_last_name" class="form-label">Apellido Materno</label>
                            <input class="form-input" type="text" placeholder="Ingrese su capellido materno"
                                id="second_last_name" v-model.trim="secondLastName">
                        </div>
                        <div class="form-input-container">
                            <label for="email" class="form-label">Correo</label>
                            <input class="form-input" type="email" placeholder="Ingrese su correo electrónico"
                                id="email" v-model.trim="email">
                        </div>
                        <div class="form-input-container">
                            <label for="password" class="form-label">Contraseña</label>
                            <input class="form-input" type="password" placeholder="Ingrese una contraseña" id="password"
                                v-model.trim="password">
                        </div>
                        <div class="form-input-container">
                            <label for="repeat-password" class="form-label">Repetir Contraseña</label>
                            <input class="form-input" type="password" placeholder="Repita su contraseña"
                                id="repeat-password" v-model.trim="repeatPassword">
                        </div>
                        <div class="form-input-container">
                            <button type="submit" class="register-button" :disabled="isDisabled"
                                :class="{disabled:isDisabled}">Registrarme</button>
                        </div>
                    </form>

                </div>
                <a href="/login">¿Ya tienes una cuenta? Inicia sesión</a>

            </div>
        </div>

    </div>


</template>
<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../store/user'
const userStore = useUserStore();
const names = ref('')
const firstLastName = ref('')
const secondLastName = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const handleSubmit = async () => {
    await userStore.registerUser(names.value, `${firstLastName.value} ${secondLastName.value}`, email.value, password.value)
}

const isDisabled = computed(() => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (names.value !== '' && firstLastName.value !== '' && secondLastName.value !== '' && pattern.test(email.value) && password.value.length >= 8 && repeatPassword.value === password.value) {
        return false
    }
    return true
})

</script>
<style lang="css" scoped>
.main {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    padding: 0;
}

.grid-item-1 {
    background-color: #0B0273;
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 2;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    grid-row: 1;
    width: 100%;
    height: 100%;

}

.grid-item-1 img {
    width: 456px;
    height: 452px;
    order: 5;
}

.grid-item-2 {
    background-color: #D3D7DC;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.card-container {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 92%;
    background: #FFFFFF;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    align-items: center;
    justify-content: flex-start;

}

.card-container__text {
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-size: 40px;
    color: #064D90;
    margin: 20px;

}

.form {
    width: 90%;
    height: 78%;


}

.card-container a {
    align-self: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 150;
    font-size: 15px;
}

.form-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px;
    width: 95%;


}

.form-input-container label {
    font-family: 'Inter', sans-serif;
    align-self: flex-start;
    font-size: 13px;

}

.form-input {
    width: 95%;
    height: 25px;
    border-radius: 10px;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
}

.register-button {
    background-color: #0094FF;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 10px;
    border-color: #0094FF;
    width: 90%;
    font-family: 'Nunito', sans-serif;
    align-self: center;

}

.register-button.disabled {
    background-color: #b7b8b9;
    border-color: #b7b8b9;
}

.grid-item-1__text {
    color: #FFFFFF;
    font-size: 30px;
    order: 10;
    font-family: 'Oswald', sans-serif;
}
</style>