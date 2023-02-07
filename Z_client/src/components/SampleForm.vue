<template>
    <form>
        <label for="sample-size-picker">Sample Size: </label>
        <input type="number" id="sample-size-picker" required v-model="sampleSize" min="0" />
        <button class="submit" :disabled="!validSampleSize">Submit</button>
        <p v-if="!validSampleSize" id="sample-size-error-message">Invalid sample size</p>
    </form>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SampleForm extends Vue {
    sampleSize = 20;

    get validSampleSize() {
        return this.sampleSize > 0;
    }
}
</script>

<style scoped lang="less">
#sample-size-error-message {
    color: red;
}
</style>
