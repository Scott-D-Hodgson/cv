<script setup lang="ts">
import { useTermModal } from '../../composables/useTermModal';
import { useDurations } from '../../composables/useDurations';
import { useDarkMode } from '../../composables/useDarkMode';
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement } from 'chart.js';
import { computed, getCurrentInstance, onMounted, onUpdated, ref } from 'vue';

const darkMode = useDarkMode();
const termModal = useTermModal();
const durations = useDurations();
const id = ref(getCurrentInstance()?.uid);
const heading = computed((): string => {
    if (termModal.term) {
        return termModal.term.value?.value!;
    };
    return 'Placeholder';
});

onMounted(() => {
    let selector = `Modal${id.value}`;
    const uiModal = document.getElementById(selector);
    if (uiModal) {
        termModal.bind(uiModal);
    };
});

onUpdated(() => {
    if (Chart.getChart('term-modal-chart')) {
        Chart.getChart('term-modal-chart')?.destroy();
    };
    let ctx = document.getElementById('term-modal-chart');
    if (ctx) {
        Chart.register(LineController);
        Chart.register(CategoryScale);
        Chart.register(LinearScale);
        Chart.register(PointElement);
        Chart.register(LineElement);
        let labelset = durations.labelSet({
            from: new Date('Jan 1, 2000'),
            to: new Date(),
            interval: 'yearly'
        });
        let dataset = durations.dataSet({
            from: new Date('Jan 1, 2000'),
            to: new Date(),
            reference: termModal.term.value?.reference!,
            interval: 'yearly'
        });
        console.log(`Labels: ${labelset.length}, Values: ${dataset.length}`); 
        new Chart((ctx as HTMLCanvasElement), {
            type: 'line',
            data: {
                labels: labelset,
                datasets: [
                    {
                        label: termModal.term.value?.value,
                        data: dataset,
                        borderColor: darkMode.isOn() ? '#f8f9fa' : 'crimson',
                        //backgroundColor: "#000000",
                        borderWidth: 1,
                        fill: false,
                        tension: 0,
                        pointStyle: false
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    };
});
</script>

<template>
    <div :id="`Modal${id}`" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">
                        {{ heading }}
                        <template v-if="termModal.term.value?.acronym">
                            ({{ termModal.term.value?.acronym }})
                        </template>
                    </h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <canvas v-if="termModal.mode().value === 'experience'" id="term-modal-chart"></canvas>
                    <p v-if="termModal.mode().value === 'definition' && termModal.term?.value?.content" class="mb-0" v-html="termModal.term.value.content"></p>
                </div>
                <div class="modal-footer">
                    <div class="btn-group float-start">
                        <button 
                            type="button" 
                            class="btn btn-secondary" 
                            :disabled="termModal.mode().value === 'definition'" 
                            @click="termModal.mode().value = 'definition'">
                            Definition
                        </button>
                        <button 
                            type="button" 
                            class="btn btn-secondary" 
                            :disabled="termModal.mode().value === 'experience'" 
                            @click="termModal.mode().value = 'experience'">
                            Experience
                        </button>
                    </div>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
canvas {
    height: 0.5vh;
}
</style>