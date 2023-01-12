<template>
    <div class="title-container">
        <h3 class="title">{{title}}</h3>
        <p class="mandatory-field">(*) Campo obligatorio</p>
    </div>
</template>
<script>
export default{
    props:{
        title:{type:String,required:true},
    },
}

</script>
<style lang="scss" scoped>
@import "../../../styles/labels.scss";
.title-container{
    width: 90%;
    display: flex;
    flex-direction: row;
   justify-content: space-between;
   padding: 0;
}
</style>