<template>
    <div class="main">
        <div class="job-call-container">
            <div class="job-call-container__title">
                <h3>ASISTENTE TÉCNICO DE MARKETING Y COMUNICACIÓN</h3>
            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Objetivo del cargo</h3>
                </div>
                <div class="job-call-container__card-body">
                    <p>Apoyar la gestión de marketing y atención al cliente a través de brindar información, reclutar y
                        captar nuevos estudiantes para la Universidad Católica Boliviana “San Pablo” Sede La Paz de
                        acuerdo a metas y acciones definidas en la Unidad de Marketing y Comunicación</p>
                </div>
            </div>
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Principales funciones</h3>
                </div>
                <div class="job-call-container__card-body">
                    <ul>
                        <li>Coordinar actividades orientadas a la gestión de reclutamiento de estudiantes nuevos.</li>
                        <li>Apoyar en el seguimiento de estudiantes interesados en la Universidad. </li>
                        <li>Recabar y procesar diferentes tipos de información que permita sistematizar los procesos
                            vinculados a las estrategias de la Unidad de Marketing. </li>
                        <li>Mantener la base de datos e información actualizada.</li>
                        <li>Atender consultas del público, sobre servicios de la Universidad, proceso de admisión, de
                            manera presencial, telefónicamente, vía email o WhatsApp. </li>
                        <li>Realizar la solicitud de pedidos de la Unidad, mediante el Sistema SAP.</li>
                        <li>Cumplir otras funciones pertinentes al área que le sean encomendadas.</li>

                    </ul>
                </div>
            </div>
            
        </div>
        <div class="job-call-info">

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.main {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
    padding-top: 25px;
    padding-left: 50px;
    row-gap: 10px;
    width: auto;
    height: auto;
    

}

h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    margin-left: 15px;
}

p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 15px;
}

ul li {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    margin: 0px;
}

.job-call-container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;


    &__title {
        width: 95%;
        height: 45px;
        left: 47px;
        top: 191px;
        background: #171553;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    &__card {
        display: flex;
        flex-direction: column;

        &-header {
            width: 95%;
            height: 45px;
            left: 47px;
            top: 191px;
            background: #171553;
            display: flex;
            justify-content: flex-start;
            align-items: center;

        }

        &-body {
            width: 94.8%;
            background: #F3F3E7;
            border: 1px solid #000000;
        }
    }
}

.job-call-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-right: 25px;
    gap: 15px;
    width: 80%;
    height: 321px;
    left: 1037px;
    top: 182px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
</style>