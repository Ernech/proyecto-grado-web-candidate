<template>
    <header>
        <div class="header-info">
            <img src="../assets/cropped-logo-UCB.png">
            <h3>Convocatorias</h3>
        </div>
        
        <div class="buttons-container">
            <a href="/register">Registrarme</a>
            <a href="/login">Iniciar sesión</a>
        </div>

    </header>

</template>
<script >
export default {

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