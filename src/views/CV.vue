<template>
    <div class="main-cv-container">
            <div class="stepper-container">

            <div class="stepper">
                <div class="stepper-progress">
                    <div class="stepper-progress-bar" :style="'width:'+stepperProgress">

                    </div>
                </div>
                <div class="stepper-item" v-for="item in 13" :key="item"
                    :class="{'current':step===item }, {'success': step>item}">
                    <div class="stepper-item-counter">

                    </div>
                </div>
            </div>

            <div class="form-container">
                <PersonalData v-if="step===1" />
                <AcademicTraining v-if="step===2" />
                <Languages v-if="step===3" />
                <CurrentProfessionalData v-if="step===4" />
                <JobExperience v-if="step===5" />
                <TeachingExperience v-if="step===6" />
                <CoursesAndSeminars v-if="step===7" />
                <Publications v-if="step===8" />
                <ConsultingsAndResearchs v-if="step===9" />
                <Awards v-if="step===10" />
                <Affiliations v-if="step===11" />
                <Affiliations v-if="step===12" />
                <FamilyReferences v-if="step===13" />
            </div>
            <div class="controls">
                <button class="back-button" @click="decrement" :disabled="step===1"
                    :class="{'disabled':step===1}">Anterior</button>
                <button class="next-button" @click="increment" :disabled="step>=13"
                    :class="{'disabled':step>=13}">Siguiente</button>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import PersonalData from '../components/step-form-sections/PersonalData.vue'
import AcademicTraining from '../components/step-form-sections/AcademicTraining.vue'
import Languages from '../components/step-form-sections/Languages.vue'
import CurrentProfessionalData from '../components/step-form-sections/CurrentProfessionalData.vue'
import JobExperience from '../components/step-form-sections/JobExperience.vue'
import TeachingExperience from '../components/step-form-sections/TeachingExperience.vue'
import CoursesAndSeminars from '../components/step-form-sections/CoursesAndSeminars.vue'
import Publications from '../components/step-form-sections/Publications.vue'
import ConsultingsAndResearchs from '../components/step-form-sections/ConsultingsAndResearchs.vue'
import Awards from '../components/step-form-sections/Awards.vue'
import Affiliations from '../components/step-form-sections/Affiliations.vue'
import FamilyReferences from '../components/step-form-sections/FamilyReferences.vue'
const step = ref(1)
const decrement = () => {
    step.value--
}
const increment = () => {
    step.value++
}


const stepperProgress = computed(() => {
    return (100 / 12) * (step.value - 1) + '%'
})

const isCurrent = (item) => {
    return step.value === item
}
const isSuccess = (item) => {
    return step.value > item
}

</script>
<style lang="scss" scoped>
@import "../styles/stepper.scss"
</style>