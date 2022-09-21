<template>
    <div class="main">
        <Navbar />
        <router-view></router-view>
        <Footer />
    </div>

</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';

export default {
    components: { Navbar, Footer }
   
}
</script>

<style scoped>


.main {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    padding: 0;
}


</style>