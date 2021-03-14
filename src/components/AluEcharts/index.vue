<template>
  <div class="echarts" :id="id"></div>
</template>

<script>
import { watch, onMounted, ref } from "vue";
import * as Echarts from 'echarts'
export default {
  name: "AluEcharts",
  props: {
    id: String,
    options: Object,
    theme: {
        type: String,
        default: ''
    }
  },
  setup(ctx) {
    let dom;
    let chart = null;
    const initChart = () => {
      if (!chart) {
        dom = document.getElementById(ctx.id)
        chart = Echarts.init(dom, ctx.theme);
      } else {
        return
      }
      if (!ctx.options) return
      chart.setOption(ctx.options)
    };
    onMounted(() => {
      initChart();
    });
    watch(() => ctx.options, () => {
        initChart();
        chart.setOption(ctx.options);
      }
    );
    return {
    }
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>