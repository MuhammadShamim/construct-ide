import React, { useMemo } from 'react'; // <--- Import useMemo
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useStore } from './engine/store';
// IMPORT YOUR NEW NODES
import { VariableNode } from './components/nodes/VariableNode';
import { LoggerNode } from './components/nodes/LoggerNode';

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, runGraph } = useStore();

  // MAPPING: Node Type String -> React Component
  const nodeTypes = useMemo(() => ({
    variable: VariableNode,
    logger: LoggerNode,
  }), []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      
      {/* HUD */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-6 pointer-events-none">
        <div>
          <h1 className="text-white font-mono text-2xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            CONSTRUCT
          </h1>
          <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase ml-1">
            v0.1 Pre-Alpha
          </span>
        </div>
        <button 
          onClick={runGraph}
          className="pointer-events-auto bg-green-600 hover:bg-green-500 text-black font-bold font-mono px-6 py-2 rounded shadow-[0_0_15px_rgba(0,255,0,0.4)] hover:shadow-[0_0_25px_rgba(0,255,0,0.6)] transition-all border border-green-400"
        >
          ▶ EXECUTE
        </button>
      </div>

      {/* CANVAS */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes} // <--- PASS THE MAPPING HERE
        fitView
      >
        <Background color="#222" gap={25} size={1} />
        <Controls className="bg-gray-900 border-gray-700 fill-white" />
      </ReactFlow>
    </div>
  );
}