<template>
    <div class="card-container">
        <div class="jc-name-container">
            <h3 class="card-container__job-call-name">{{jobCallName}}</h3>
        </div>
        <div class="card-container__opening-date">
            <fa icon="fa-solid fa-calendar-days" class="opening-date__icon" />
            <span class="opening-date__text">
                Fecha de cierre: {{formatDate}} </span>
        </div>
        <span class="card-container__job-call-number">Convocatoria N°{{jobCallNumber}}</span>

    </div>
</template>
<script>
import { computed } from 'vue'
export default {
    props: {
        jobCallName: { type: String, required: true },
        jobCallNumber: { type: String, required: true },
        openingDate: { type: String, required: true }
    },
    setup(props) {
        const formatDate = computed(() => {
            const date = new Date(props.openingDate);
            return `${('0'+date.getDate()).slice(-2)}-${('0'+(date.getMonth() + 1)).slice(-2)}-${date.getFullYear()} ${('0'+date.getHours()).slice(-2)}:${('0'+date.getMinutes()).slice(-2)}`;
        })
        return {formatDate}
    }
}
</script>
<style scoped>
.card-container {
    width: 92%;
    height: 40px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
}
.jc-name-container{
    width: 30%;
    text-overflow: ellipsis;
}
.card-container__job-call-name {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    margin: 0px;
}

.card-container__job-call-number {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
}

.card-container__opening-date {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.opening-date__icon {
    width: 25px;
    height: 25px;
}

.opening-date__text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
}

.card-container:hover {
    width: 93%;
    height: 52px;
    transition: 0.3s;
}
</style>