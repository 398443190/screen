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
  },
  data() {
    return {
      a: "",
    };
  },
  methods: {
    handleClick(item) {
      console.log(item, 'item')
    },
    initG6() {
      const that = this;
      const data = {
        nodes: [
          {
            id: "1",
            label: "Company1",
          },
          {
            id: "2",
            label: "Company2",
          },
          {
            id: "3",
            label: "Company3",
          },
          {
            id: "4",
            label: "Company4",
          },
          {
            id: "5",
            label: "Company5",
          },
          {
            id: "6",
            label: "Company6",
          },
          {
            id: "7",
            label: "Company7",
          },
          {
            id: "8",
            label: "Company8",
          },
          {
            id: "9",
            label: "Company9",
          },
          {
            id: "10",
            label: "Company10",
          },
        ],
        edges: [
          {
            source: "1",
            target: "2",
          },
          {
            source: "1",
            target: "3",
          },
          {
            source: "2",
            target: "5",
          },
          {
            source: "5",
            target: "6",
          },
          {
            source: "6",
            target: "10",
          },
          {
            source: "3",
            target: "4",
          },
          {
            source: "4",
            target: "7",
          },
          {
            source: "1",
            target: "8",
          },
          {
            source: "8",
            target: "4",
          },
          {
            source: "1",
            target: "9",
          },
          {
            source: "9",
            target: "4",
          },
        ],
      };
      G6.registerNode(
        "dom-node",
        {
          draw: (cfg, group) => {
            return group.addShape("dom", {
              attrs: {
                x: -width / 2,
                y: -15,
                width: 120,
                height: 40,
                // 传入 DOM 的 html
                html: `
        <div id=${cfg.id}  style="background-color: #fff; border: 2px solid #5B8FF9;padding:5px 10px; border-radius: 5px; display: flex; justify-content: center;align-items: center;">
          ${cfg.label}
        </div>
          `,
              },
            });
          },
          getAnchorPoints: function getAnchorPoints() {
            return [
              [0, 0.5],
              [1, 0.5],
            ];
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
              stroke: "#1A91FF",
              lineWidth: 1,
              endArrow: true,
            },
            name: "path-shape",
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
        },
        defaultEdge: {
          type: "polyline",
        },
      });

      graph.data(data);
      graph.render();
      graph.fitView();

      // const edges = graph.getEdges();
      // edges.forEach(function(edge) {
      //   const line = edge.getKeyShape()
      //   const stroke = line.attr('stroke')
      //   const targetNode = edge.getTarget()
      //   targetNode.update({
      //     style: {
      //       stroke
      //     }
      //   })
      // })
      const nodes = graph.getNodes();
      that.$nextTick(() => {
        nodes.forEach((item) => {
          console.log(item._cfg.model, "item");
          document.getElementById(item._cfg.id).onclick = function () {
            that.handleClick(item._cfg.model);
          };
        });
      });
      graph.paint();
    },
  },
};
</script>
