<template>
    <footer absolute>
        <a href="https://www.facebook.com/UCB.BOLIVIA">
            <fa class="footer-icon" icon="fa-brands fa-square-facebook" />
        </a>

        <a href="https://www.ucb.edu.bo/">
            <fa class="footer-icon" icon="fa-solid fa-globe" />
        </a>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped>
footer {
    position: absolute;
    background: #B9B9B9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 10px;
    bottom: 0px;
}

.footer-icon {
    color: #fff;
    width: 35px;
    height: 35px;
    margin: 5px 0;
}
</style>