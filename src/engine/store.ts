import { create } from 'zustand';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
} from '@xyflow/react';
import type { ConstructNodeData } from '../types/graph';

type GraphState = {
  nodes: Node<ConstructNodeData>[];
  edges: Edge[];
  
  // Interaction Handlers
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  
  // NEW: A stable action to update data
  updateNodeValue: (id: string, value: any) => void;

  // The "Compiler"
  runGraph: () => void;
};

const initialNodes: Node<ConstructNodeData>[] = [
  {
    id: '1',
    type: 'variable', 
    position: { x: 100, y: 100 },
    data: { label: 'Data: Hello World', value: 'Hello World', type: 'string', isInput: true },
  },
  {
    id: '2',
    type: 'logger',
    position: { x: 500, y: 100 },
    data: { label: 'Logger (Console)', type: 'log' },
  },
];

export const useStore = create<GraphState>((set, get) => ({
  nodes: initialNodes,
  edges: [],

  onNodesChange: (changes) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },

  onEdgesChange: (changes) => {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },

  onConnect: (connection) => {
    const edge = { ...connection, animated: true, style: { stroke: '#00f0ff', strokeWidth: 2 } };
    set({ edges: addEdge(edge, get().edges) });
  },

  // FIX: Implemented the update logic here
  updateNodeValue: (nodeId, newValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // Return a shallow copy of the node with updated data
          return { ...node, data: { ...node.data, value: newValue } };
        }
        return node;
      }),
    });
  },

  runGraph: () => {
    const { nodes, edges } = get();
    const loggerNode = nodes.find((n) => n.data.type === 'log');
    if (!loggerNode) { alert("Error: No Logger Node found."); return; }

    const incomingEdge = edges.find((e) => e.target === loggerNode.id);
    if (!incomingEdge) { alert("Error: Logger is not connected."); return; }

    const sourceNode = nodes.find((n) => n.id === incomingEdge.source);
    if (!sourceNode) return;

    const output = sourceNode.data.value;
    console.log(`[CONSTRUCT ENGINE]: ${output}`);
    setTimeout(() => alert(`> SYSTEM OUTPUT:\n${output}`), 10); 
  },
}));