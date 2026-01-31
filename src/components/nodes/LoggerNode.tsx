import React from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react'; // <--- Added 'type'
import { Terminal } from 'lucide-react'; 

export function LoggerNode({ data }: NodeProps) {
  return (
    <div className="relative rounded-lg bg-black/60 backdrop-blur-md border border-pink-600/50 shadow-[0_0_15px_rgba(255,0,60,0.2)] min-w-[200px] overflow-hidden group hover:border-pink-500 transition-all">
      
      {/* The Connector (Handle) - Positioned on the Left */}
      <Handle 
        type="target" 
        position={Position.Left} 
        className="!bg-pink-500 !w-3 !h-3 !border-0 !shadow-[0_0_10px_#ff003c]" 
      />

      {/* Header */}
      <div className="bg-pink-950/40 px-4 py-2 border-b border-pink-500/30 flex items-center gap-2">
        <Terminal size={14} className="text-pink-500" />
        <span className="text-pink-100 font-mono text-xs tracking-widest uppercase font-bold">SYSTEM_LOG</span>
      </div>

      {/* Body */}
      <div className="p-4 flex items-center justify-center bg-black/40">
        <span className="text-pink-400/50 text-xs font-mono">Waiting for input...</span>
      </div>
    </div>
  );
}