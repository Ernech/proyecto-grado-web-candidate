<template>
    <header>
        <div class="header-info">
            <img src="../assets/cropped-logo-UCB.png">
            <h3>Convocatorias</h3>
        </div>
        
        <div v-if="!userStore.accessToken" class="buttons-container">
            <a href="/register">Registrarme</a>
            <a href="/login">Iniciar sesión</a>
        </div>
        <div v-else class="icons-container">
            <fa icon="fa-solid fa-user-large" class="header-icon" @click="toCV"/>
            <fa icon="fa-solid fa-arrow-right-from-bracket" class="header-icon" @click="logout"/>
        </div>

    </header>

</template>
<script setup>
import { useUserStore } from '../store/user';
import router from '../routes/router';
const userStore = useUserStore()
const toCV=()=>{
    router.push('/cv')
}

const logout=()=>{
    userStore.logoutUser()
}
</script>
<style scoped>
header {
    list-style-type: none;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(11, 2, 115, 0.5), rgba(11, 2, 115, 0.5)), url('../assets/navbar-img.jpg');
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

}
.header-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
}


img {
    width: 70px;
    height: 70px;
    margin: 20px 10px;
}

h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 59px;
    text-align: right;
    color: #fff;
    cursor: pointer;
    margin: 15px 0px;
}



.buttons-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-right: 50px;


}
.icons-container{
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-right: 50px;
}

.header-icon{
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.buttons-container a {
    display: block;
    color: white;
    text-align: center;
    padding: 8px;
    text-decoration: none;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    font-family: 'Nunito';
    font-size: 15px;

}

.buttons-container a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>