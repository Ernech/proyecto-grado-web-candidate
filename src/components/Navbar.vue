<template>
    <header>
        <img src="../assets/cropped-logo-UCB.png">
        <h3>Convocatorias</h3>
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
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(11, 2, 115, 0.5), rgba(11, 2, 115, 0.5)), url('../assets/navbar-img.jpg');
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

}



img {
    width: 80px;
    height: 80px;
    margin: 5px 10px;
}

h3 {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 59px;
    text-align: right;
    color: #fff;
    margin-left: 0px;
    cursor: pointer;
}



.buttons-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    margin-left: 65%;
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