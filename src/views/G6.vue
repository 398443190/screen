<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  mounted() {
    this.initG6();
    document.getElementById('select').onchange = function(e) {
      console.log(e.target.value, 'value')
    }
  },
  data () {
    return {
      a: '',
    }
  },
  methods: {
    gradeChange() {
      console.log(111)
    },
    initG6() {
      const that = this
      const colorMap = {
        A: "#72CC4A",
        B: "#1A91FF",
        C: "#FFAA15",
      };
      const data = {
        nodes: [
          {
            id: "1",
            label: "Company1",
            custom: '123123'
          },
          {
            id: "2",
            label: "Company2",
            versionList: [ {version:'V01', label: 'V0101',selected: false} , {version:'V02', label: 'V0202',selected: true} ],
            custom: '123123'
          },
          {
            id: "3",
            label: "Company3",
            versionList: [ {version:'V03', label: 'V0303',selected: false} , {version:'V04', label: 'V0404',selected: true} ],
            custom: '123123'
          },
          {
            id: "4",
            label: "Company4",
            custom: '123123'
          },
          {
            id: "5",
            label: "Company5",
            custom: '123123'
          },
          {
            id: "6",
            label: "Company6",
            custom: '123123'
          },
          {
            id: "7",
            label: "Company7",
            custom: '123123'
          },
          {
            id: "8",
            label: "Company8",
            custom: '123123'
          },
          {
            id: "9",
            label: "Company9",
            custom: '123123'
          },
          {
            id: "10",
            label: "Company10",
            custom: '123123'
          },
        ],
        edges: [
          {
            source: "1",
            target: "2",
            data: {
              type: "A",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "1",
            target: "3",
            data: {
              type: "B",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "2",
            target: "5",
            data: {
              type: "C",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "5",
            target: "6",
            data: {
              type: "B",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "6",
            target: "10",
            data: {
              type: "B",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "3",
            target: "4",
            data: {
              type: "C",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "4",
            target: "7",
            data: {
              type: "B",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "1",
            target: "8",
            data: {
              type: "B",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
          {
            source: "1",
            target: "9",
            data: {
              type: "C",
              amount: "100,000 Yuan",
              date: "2019-08-03",
            },
          },
        ],
      };

      //   G6.registerNode(
      //     "round-rect",
      //     {
      //       drawShape: function drawShape(cfg, group) {
      //         const width = cfg.style.width;
      //         const stroke = cfg.style.stroke;
      //         const rect = group.addShape("rect", {
      //           attrs: {
      //             x: -width / 2,
      //             y: -15,
      //             width,
      //             height: 30,
      //             radius: 15,
      //             stroke,
      //             lineWidth: 1.2,
      //             fillOpacity: 1,
      //           },
      //           name: "rect-shape",
      //         });
      //         group.addShape("circle", {
      //           attrs: {
      //             x: -width / 2,
      //             y: 0,
      //             r: 3,
      //             fill: stroke,
      //           },
      //           name: "circle-shape",
      //         });
      //         group.addShape("circle", {
      //           attrs: {
      //             x: width / 2,
      //             y: 0,
      //             r: 3,
      //             fill: stroke,
      //           },
      //           name: "circle-shape2",
      //         });
      //         return rect;
      //       },
      //       getAnchorPoints: function getAnchorPoints() {
      //         return [
      //           [0, 0.5],
      //           [1, 0.5],
      //         ];
      //       },
      //       update: function update(cfg, item) {
      //         const group = item.getContainer();
      //         const children = group.get("children");
      //         const node = children[0];
      //         const circleLeft = children[1];
      //         const circleRight = children[2];

      //         const stroke = cfg.style.stroke;

      //         if (stroke) {
      //           node.attr("stroke", stroke);
      //           circleLeft.attr("fill", stroke);
      //           circleRight.attr("fill", stroke);
      //         }
      //       },
      //     },
      //     "single-node"
      //   );
      G6.registerNode(
        "dom-node",
        {
          draw: (cfg, group) => {
            if (cfg.id === '2' || cfg.id === '3') {
              console.log(cfg, "cfg");                                    
              console.log(group, "group");
              let option = ''
              console.log(cfg.versionList)
              if (cfg.versionList && cfg.versionList.length > 0){
                cfg.versionList.forEach(item => {

                option += `<option value=${item.version} selected=${item.selected}>${item.label}</option>`
                })
              } else {
                ''
              }
              return group.addShape("dom", {
                attrs: {
                  width: 80,
                  height: 30,
                  custom: cfg.label,
                  // 传入 DOM 的 html
                  html: `

        <div id="dom-node11" name=${cfg} style="background-color: #fff; border: 2px solid #5B8FF9; border-radius: 5px; width: 45px; height: 25px; display: flex;">
          <select id="select">${option}</select></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       `,
                },
              });
            } else {
              return group.addShape("dom", {
                attrs: {
                  width: 50,
                  height: 30,
                  // 传入 DOM 的 html
                  html: `
        <div id="dom-node" label=${cfg.label} style="background-color: #fff; border: 2px solid #5B8FF9; border-radius: 5px; width: 45px; height: 25px; display: flex;">
          <span label=${cfg.label} style="margin:auto; padding:auto; color: #5B8FF9">${
            cfg.label
          }</span>
        </div>
          `,
                },
              });
            }
          },
        },
        "single-node"
      );

      G6.registerEdge("polyline", {
        itemType: "edge",
        draw: function draw(cfg, group) {
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;

          const Ydiff = endPoint.y - startPoint.y;

          const slope = Ydiff !== 0 ? 500 / Math.abs(Ydiff) : 0;

          const cpOffset = 16;
          const offset = Ydiff < 0 ? cpOffset : -cpOffset;

          const line1EndPoint = {
            x: startPoint.x + slope,
            y: endPoint.y + offset,
          };
          const line2StartPoint = {
            x: line1EndPoint.x + cpOffset,
            y: endPoint.y,
          };
          // 控制点坐标
          const controlPoint = {
            x:
              ((line1EndPoint.x - startPoint.x) * (endPoint.y - startPoint.y)) /
                (line1EndPoint.y - startPoint.y) +
              startPoint.x,
            y: endPoint.y,
          };

          let path = [
            ["M", startPoint.x, startPoint.y],
            ["L", line1EndPoint.x, line1EndPoint.y],
            [
              "Q",
              controlPoint.x,
              controlPoint.y,
              line2StartPoint.x,
              line2StartPoint.y,
            ],
            ["L", endPoint.x, endPoint.y],
          ];

          if (Ydiff === 0) {
            path = [
              ["M", startPoint.x, startPoint.y],
              ["L", endPoint.x, endPoint.y],
            ];
          }

          const line = group.addShape("path", {
            attrs: {
              path,
              stroke: colorMap[cfg.data && cfg.data.type],
              lineWidth: 1.2,
              endArrow: false,
            },
            name: "path-shape",
          });

          const labelLeftOffset = 0;
          const labelTopOffset = 8;
          // amount
          const amount = group.addShape("text", {
            attrs: {
              text: cfg.data && cfg.data.amount,
              x: line2StartPoint.x + labelLeftOffset,
              y: endPoint.y - labelTopOffset - 2,
              fontSize: 14,
              textAlign: "left",
              textBaseline: "middle",
              fill: "#000000D9",
            },
            name: "text-shape-amount",
          });
          // type
          group.addShape("text", {
            attrs: {
              text: cfg.data && cfg.data.type,
              x: line2StartPoint.x + labelLeftOffset,
              y: endPoint.y - labelTopOffset - amount.getBBox().height - 2,
              fontSize: 10,
              textAlign: "left",
              textBaseline: "middle",
              fill: "#000000D9",
            },
            name: "text-shape-type",
          });
          // date
          group.addShape("text", {
            attrs: {
              text: cfg.data && cfg.data.date,
              x: line2StartPoint.x + labelLeftOffset,
              y: endPoint.y + labelTopOffset + 4,
              fontSize: 12,
              fontWeight: 300,
              textAlign: "left",
              textBaseline: "middle",
              fill: "#000000D9",
            },
            name: "text-shape-date",
          });
          return line;
        },
      });

      const width = document.getElementById("container").scrollWidth;
      const height = document.getElementById("container").scrollHeight || 400;
      const graph = new G6.Graph({
        container: "container",
        renderer: "svg",
        width,
        height,
        layout: {
          type: "dagre",
          rankdir: "LR",
          nodesep: 30,
          ranksep: 100,
        },
        modes: {
          default: ["drag-canvas"],
        },
        defaultNode: {
          type: "dom-node",
          labelCfg: {
            style: {
              fill: "#000000A6",
              fontSize: 10,
            },
          },
          style: {
            stroke: "#72CC4A",
            width: 120,
          },
        },
        defaultEdge: {
          type: "polyline",
        },
      });

      graph.data(data);
      graph.render();

      const edges = graph.getEdges();
      edges.forEach(function (edge) {
        const line = edge.getKeyShape();
        const stroke = line.attr("stroke");
        const targetNode = edge.getTarget();
        targetNode.update({
          style: {
            stroke,
          },
        });
      });
      const nodes = graph.getNodes();
      debugger
      nodes.forEach((item) => {
        console.log(item._cfg.model.custom, 'item')
        this.testoo(item._cfg.model.custom)
      });
      graph.paint();

    //   if (typeof window !== "undefined")
    //     window.onresize = () => {
    //       if (!graph || graph.get("destroyed")) return;
    //       if (!container || !container.scrollWidth || !container.scrollHeight)
    //         return;
    //       graph.changeSize(container.scrollWidth, container.scrollHeight);
    //     };
    },
    testoo(e){
      console.log(e,'eee');
      this.$nextTick(() => {
        document.getElementById('dom-node').onclick = function(e, cfg) {
          console.log(e, '32323')
        }
      })
    }
  },
};
</script>
