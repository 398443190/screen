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
    };
  },
  methods: {
    handleClick(item) {
      console.log(item, "item");
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
            source: "7",
            target: "6",
          },
        ],
      };
      G6.registerNode(
        "round-rect",
        {
          drawShape: function drawShape(cfg, group) {
            const width = cfg.style.width;
            const stroke = cfg.style.stroke;
            const rect = group.addShape("rect", {
              attrs: {
                x: -width / 2,
                y: -15,
                width,
                height: 30,
                radius: 15,
                stroke,
                lineWidth: 1.2,
                fillOpacity: 1,
              },
              name: "rect-shape",
            });
            return rect;
          },
          getAnchorPoints: function getAnchorPoints() {
            return [
              [0, 0.5],
              [1, 0.5],
            ];
          },
          update: function update(cfg, item) {
            const group = item.getContainer();
            const children = group.get("children");
            const node = children[0];
            const circleLeft = children[1];
            const circleRight = children[2];

            const stroke = cfg.style.stroke;

            // if (stroke) {
            //   node.attr("stroke", stroke);
            //   circleLeft.attr("fill", stroke);
            //   circleRight.attr("fill", stroke);
            // }
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
          type: "round-rect",
          labelCfg: {
            style: {
              fill: "#000000A6",
              fontSize: 10,
            },
          },
          style: {
            stroke: "#72CC4A",
            width: 150,
          },
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
      graph.paint();
    },
  },
};
</script>
