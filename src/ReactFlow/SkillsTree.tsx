// components/TreeView.tsx
'use client'
import React, { useEffect, useState, useRef } from 'react';
import {
  Background,
  ReactFlow,
  type Edge,
  type Node,
  useReactFlow,
  ReactFlowProvider,
  type FitViewOptions,
} from '@xyflow/react';
import { getResponsiveLayout } from './responsiveLayout';
import { useContainerSize } from '../hooks/useContainerSize';
import { SkillNode, type SkillNodeData } from './CustomNode';
import '@xyflow/react/dist/style.css';
import { supabase } from '../utils/supabase/server';
import { getCachedTree } from '../_lib/skills';
import type { Skill, SkillEdge } from '../_types/types';
type SkillNodeType = Node<SkillNodeData, 'skillNode'>;


const nodeTypes = { skillNode: SkillNode };
const style = { stroke: '#00ff66', strokeWidth: 2 };

const FIT_VIEW_OPTIONS: FitViewOptions = {
  padding: 0.08,
  includeHiddenNodes: false,
  minZoom: 0.35,
  maxZoom: 1.5,
};
const TreeContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerSize(containerRef);
  const { fitView } = useReactFlow();

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [rawData, setRawData] = useState<{ nodes: SkillNodeType[]; edges: Edge[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadSkillsTree = async () => {

      const {skills, edges} = await getCachedTree();
      const typedSkills = (skills ?? []) as Skill[];
      const typedEdges = (edges ?? []) as SkillEdge[];
      const skillIds = new Set(typedSkills.map((skill) => String(skill.id)));

      if (isMounted) {
        setRawData({
          nodes: typedSkills.map((skill) => ({
            id: String(skill.id),
            type: 'skillNode',
            data: {
              label: skill.label,
              icon: skill.icon,
              isLocked: skill.isLocked,
            },
            position: { x: 0, y: 0 },
          })),
          edges: typedEdges
            .filter(
              (edge) =>
                skillIds.has(String(edge.from_node_id)) && skillIds.has(String(edge.to_node_id))
            )
            .map((edge) => ({
              id: `${edge.from_node_id}-${edge.to_node_id}`,
              source: String(edge.from_node_id),
              target: String(edge.to_node_id),
              style,
            })),
        });
      }
    };

    void loadSkillsTree();
    return () => {
      isMounted = false;
    };
  }, []);

  // Recalculate layout whenever the available tree space changes.
  useEffect(() => {
    if (!rawData || width === 0 || height === 0) return;

    const options = {
      containerWidth: width,
      containerHeight: height,
    }
    const { nodes: layoutedNodes, edges: layoutedEdges } = getResponsiveLayout(
      rawData.nodes,
      rawData.edges,
      options
    );

    setNodes(layoutedNodes.map((node) => ({
      ...node,
      data: { ...node.data },
    })));
    setEdges(layoutedEdges);

    window.requestAnimationFrame(() => {
      fitView(FIT_VIEW_OPTIONS);
    });
  }, [rawData, width, height, fitView]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: 'clamp(360px, calc(100vh - 260px), 560px)',
        overflow: 'hidden',
      }}
    >
      {error ? (
        <p className="p-4 text-center font-mono text-red-400">Unable to load skills tree.</p>
      ) : rawData ? (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={FIT_VIEW_OPTIONS}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          preventScrolling={false}
          minZoom={0.35}
          maxZoom={1.5}
          panOnDrag={true}
          defaultEdgeOptions={{ type: 'bezier', style }}
          nodeTypes={nodeTypes}
        >
          <Background />
        </ReactFlow>
      ) : (
        <p className="p-4 text-center font-mono text-[#00ff66]">Loading skills tree...</p>
      )}
    </div>
  );
};

// Wrap With ReactFlowProvider To Use useReactFlow Hook
const SkillsTree = () => (
  <ReactFlowProvider>
    <TreeContent />
  </ReactFlowProvider>
);

export default SkillsTree;
export { SkillsTree };