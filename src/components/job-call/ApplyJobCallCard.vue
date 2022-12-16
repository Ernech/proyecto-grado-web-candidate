<template>
    <div class="card-container">
        <div class="jc-name-container">
            <h3 class="card-container__job-call-name">{{jobCallName}}</h3>
        </div>
        <div class="card-container__opening-date">
            <fa icon="fa-solid fa-calendar-days" class="opening-date__icon" />
            <span class="opening-date__text">
                Fecha de postulación: {{formatDate}} </span>
        </div>
        <span class="card-container__job-call-number">Convocatoria N°{{jobCallNumber}}</span>
        <span v-if="applyStatus==='PENDING'" class="card-container__job-apply-status-pending">PENDIENTE</span>
        <span v-else-if="applyStatus==='ACEPTED'" class="card-container__job-apply-status-acepted">ACEPTADO</span>
        <span v-else-if="applyStatus==='REJECTED'" class="card-container__job-apply-status-rejected">RECHAZADO</span>
    </div>
</template>
<script>
import { computed } from 'vue'
export default {
    props: {
        jobCallName: { type: String, required: true },
        jobCallNumber: { type: String, required: true },
        openingDate: { type: String, required: true },
        applyStatus: { type:String, required:true }
        
    },
    setup(props) {
        const formatDate = computed(() => {
            const date = new Date(props.openingDate);
            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        })
      
        return {formatDate}
    }
}
</script>
<style scoped lang="scss">
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

.card-container__job-apply-status-acepted{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #3ad622;
    &-rejected{
        color: #ee2243;
    }
    &.pending{
        color: #e19039;
    }
}
.card-container__job-apply-status-rejected{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ee2243;
    
}
.card-container__job-apply-status-pending{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #e19039;
    
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