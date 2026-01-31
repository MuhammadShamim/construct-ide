import React, { useCallback } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { useStore } from '../../engine/store';

export function VariableNode({ id, data }: NodeProps) {
  // FIX: Select the stable function from the store
  // This reference never changes, so it won't cause infinite loops.
  const updateNodeValue = useStore((state) => state.updateNodeValue);

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeValue(id, evt.target.value);
  }, [id, updateNodeValue]);

  return (
    <div className="relative rounded-lg bg-black/60 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] min-w-[200px] overflow-hidden group hover:border-cyan-400 transition-all">
      
      {/* Header */}
      <div className="bg-cyan-950/50 px-4 py-2 border-b border-cyan-500/30 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
        <span className="text-cyan-100 font-mono text-xs tracking-widest uppercase font-bold">STRING_VAR</span>
      </div>

      {/* Body */}
      <div className="p-4">
        <label className="text-gray-400 text-[10px] uppercase mb-1 block font-mono">Value</label>
        <input 
          id="text" 
          name="text" 
          // Use 'value' instead of 'defaultValue' for controlled components
          value={data.value} 
          onChange={onChange} 
          className="nodrag w-full bg-black/50 border border-gray-700 rounded px-2 py-1 text-cyan-300 font-mono text-sm focus:outline-none focus:border-cyan-500 transition-colors"
        />
      </div>

      {/* Handle */}
      <Handle 
        type="source" 
        position={Position.Right} 
        className="!bg-cyan-400 !w-3 !h-3 !border-0 !shadow-[0_0_10px_#00f0ff]" 
      />
    </div>
  );
}