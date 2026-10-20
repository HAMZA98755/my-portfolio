// lib/responsiveLayout.ts

import dagre from '@dagrejs/dagre';
import { Node, Edge } from '@xyflow/react';

interface LayoutOptions {
  containerWidth: number;
  containerHeight: number;
}

export const getResponsiveLayout = (
  nodes: Node[],
  edges: Edge[],
  options: LayoutOptions
): { nodes: Node[]; edges: Edge[] } => {
  const { containerWidth } = options;

  // Keep the graph compact and use the same dimensions as the rendered node.
  const isMobile = containerWidth < 768;
  const direction = 'TB';
  const nodeSize = isMobile ? 162 : Math.min(240, Math.max(216, containerWidth * 0.2));

  const nodeSep = isMobile ? 24 : Math.min(48, Math.max(30, containerWidth * 0.03));
  const rankSep = isMobile ? 45 : 63;

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: nodeSep,
    ranksep: rankSep,
    marginx: 18,
    marginy: 18,
  });

  // 3. Add Nodes And Edges To Dagre Graph
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeSize, height: nodeSize });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // 4. Calculate Layout
  dagre.layout(dagreGraph);

  // 5. Apply Positions Back To React Flow Nodes
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      style: {
        width: nodeSize,
        height: nodeSize,
        ...node.style,
      },
      position: {
        x: nodeWithPosition.x - nodeSize / 2,
        y: nodeWithPosition.y - nodeSize / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};