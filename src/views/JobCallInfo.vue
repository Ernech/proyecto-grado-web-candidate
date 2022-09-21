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
            <div class="job-call-container__card">
                <div class="job-call-container__card-header">
                    <h3>Requisitos del perfil</h3>
                </div>
                <div class="job-call-container__card-body">
                    <b>Formación</b>
                    <ul>
                        <li>Licenciatura en Administración de Empresas, Marketing, Ingeniería Comercial, Comunicación
                            Social o ramas afines.</li>
                    </ul>
                    <b>Experiencia laboral</b>
                    <ul>
                        <li>Experiencia profesional general de al menos tres años.</li>
                        <li>Experiencia profesional como asistente, apoyo logístico, administrativo y/o atención al
                            público de al menos dos años.</li>
                    </ul>
                    <b>Se valorarán</b>
                    <ul>
                        <li>Conocimientos en manejo de redes sociales empresariales/institucionales.</li>
                        <li>Conocimientos básicos de Diseño Gráfico.</li>
                        <li>Conocimiento del idioma inglés</li>
                    </ul>
                    <b>Se valorarán</b>
                    <ul>
                        <li>Conocimientos en manejo de redes sociales empresariales/institucionales.</li>
                        <li>Conocimientos básicos de Diseño Gráfico.</li>
                        <li>Conocimiento del idioma inglés</li>
                        <li>Organización</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="job-call-info">
            <h3>Convocatoria N° 06/2022</h3>
            <div class="job-call-info-date">
                <b>Fecha límite de presentación:</b>
                <span>6 de abril de 2022</span>
            </div>
            <button class="apply-button">Postularme ahora</button>
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
    width: 90%;
    height: auto;
    margin: 0;
   margin-bottom: 50px;


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
            width: 94.75%;
            background: #F3F3E7;
            border: 1px solid #000000;
        }

        &-body b {
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 17px;
            margin-left: 10px;
        }
    }
}

.job-call-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-right: 25px;

    width: 90%;
    height: 250px;
    left: 1037px;
    top: 182px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-date {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

    }

    &-date b,
    span {
        font-family: 'Inter';
        font-style: normal;
        font-size: 15px;
        line-height: 24px;
        text-align: center;

    }

}

.job-call-info h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;

    color: #000000;
}

.apply-button {
    background: #0094FF;
    border: 1px solid #0094FF;
    border-radius: 8px;
    color: #FFFFFF;
    padding: 10px 15px;
    align-self: center;
    width: 150px;
    margin: 10px 0px;
}
</style>