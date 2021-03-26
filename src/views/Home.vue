<template>
  <div class="container">
    <container :options="{width: 3840, height: 2160}">
      <div class="header">
        <Header />
      </div>
      <div class="separator-wrapper">
        <AluSeparator />
      </div>
      <div class="center">
        <div class="left">
          <div class="left1">
            left1
          </div>
          <div class="left2">
            <AluAverageAge
              :data="[
              {axis: '0-20',color: 'red',startValue: 131475, value:131456},
              {axis: '20-40',color: 'blur',startValue: 131475, value:131456},
              {axis: '40-60',color: 'green',startValue: 131475, value:131456},
              {axis: '60-80',color: 'grey',startValue: 131475, value:131456}]"
              :avg-age="20"
              ref="AluAverageAge"
            />
          </div>
          <div class="left3">
            <AluTotalDevice :data="[
                {value: 335, key: '直接访问'},
                {value: 310, key: '邮件营销'},
                {value: 234, key: '联盟广告'},
                {value: 135, key: '视频广告'},
                {value: 1548, key: '搜索引擎'}
            ]" />
          </div>
          <div class="left4">
            <AluTotalGender />
          </div>
          <div class="left5">
            <AluLineChart />
          </div>
          <div class="left6">
            left6
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            right-top1
          </div>
          <div class="right-top2">
            right-top2
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                right-left1
              </div>
              <div class="right-left2">
                right-left2
              </div>
              <div class="right-left3">
                right-left3
              </div>
              <div class="right-left4">
                right-left4
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
              </div>
              <div class="right-right2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  /* eslint-disable */
  import { getCurrentInstance, onMounted } from 'vue'
  import Container from '../components/AluContainer/AluContainer.vue'
  import AluEcharts from '../components/AluEcharts'
  import AluSeparator from '../components/AluSeparator' // 头部下面的线段
  import Header from '../components/TopHeader2' // 头部组件 
  import AluAverageAge from '../components/AluAverageAge' // 左边第二个组件
  import AluTotalGender from '../components/AluTotalGender' // 左边第二个组件
  import AluTotalDevice from '../components/AluTotalDevice'// 组件第三个组件
  import AluLineChart from '../components/AluLineChart'// 组件第三个组件

  export default {
    components: {
      Container,
      Header,
      AluEcharts,
      AluSeparator,
      AluAverageAge,
      AluTotalDevice,
      AluTotalGender,
      AluLineChart
    },
    setup () {
      const context = getCurrentInstance().ctx

      return {
        options: {
          xAxis: {
            data: [1,2,3,4,5]
          },
          yAxis: {},
          series: [{
            name: 'sales',
            type: 'bar',
            data: [1,2,3,4,5]
          }]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    // background-color: rgb(50, 47, 48);
    background: rgb(29, 29, 29);
    color: #fff;
    font-size: 48px;

    #alu-container {
      display: flex;
      flex-direction: column;

      .header {
        height: 167px;
        margin-top: 10px;
      }

      .separator-wrapper {
        height: 10px;
        background: red;
      }

      .center {
        flex: 1;
        display: flex;

        .left {
          flex: 0 0 860px;
          display: flex;
          flex-direction: column;
          width: 860px;
          height: 100%;
          margin: 0 10px;
          box-sizing: border-box;
          background: rgb(60, 61, 64);

          .left1, .left2, .left3, .left4, .left5, .left6 {
            padding-bottom: 20px;
          }

          .left1 {
            height: 300px;
          }

          .left2 {
            height: 320px;
          }

          .left3 {
            height: 280px;
          }

          .left4 {
            height: 230px;
          }

          .left5 {
            height: 360px;
          }

          .left6 {
            height: 360px;
          }
        }

        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          margin: 0 10px;
          max-width: 2960px;
          overflow: hidden;

          .right-top1 {
            height: 206px;
            margin-bottom: 20px;
          }

          .right-top2 {
            height: 48px;
            margin-bottom: 20px;
          }

          .right-bottom {
            flex: 1;
            display: flex;

            .right-left {
              display: flex;
              flex-direction: column;
              width: 1917px;

              .right-left1 {
                height: 999px;
              }

              .right-left2 {
                height: 80px;
                padding-top: 20px;
                box-sizing: border-box;
              }

              .right-left3 {
                height: 350px;
                margin-top: 10px;

                .dv-border-box-8 {
                  width: 100%;
                  height: 100%;
                  padding: 5px;
                  box-sizing: border-box;
                  background: rgb(66, 68, 70);
                  border-radius: 10px;
                  box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
                }
              }

              .right-left4 {
                height: 220px;
                margin-top: 10px;
              }
            }

            .right-right {
              flex: 1;
              display: flex;
              flex-direction: column;
              margin-left: 10px;

              .right-right1 {
                width: 100%;
                height: 999px;
                padding-right: 10px;
                box-sizing: border-box;
              }

              .right-right2 {
                width: 100%;
                height: 650px;
                margin-top: 20px;
              }
            }
          }
        }
      }
    }
  }
</style>
