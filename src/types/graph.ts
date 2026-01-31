// src/types/graph.ts

// The types of nodes our IDE supports
export type NodeType = 'variable' | 'logger' | 'math' | 'function';

export interface NodeInput {
  id: string; // e.g., 'arg_1' or 'input_a'
  type: 'string' | 'number' | 'boolean' | 'any';
  connected: boolean;
  label?: string; // e.g. "Input A"
}

export interface NodeOutput {
  id: string; // e.g., 'result'
  type: 'string' | 'number' | 'boolean' | 'any';
  label?: string;
}

export interface ConstructNodeData {
  // VISUALS
  label: string;
  icon?: string; 
  color?: string; // 'cyan', 'magenta'
  status?: 'idle' | 'running' | 'error' | 'success'; 

  // LOGIC
  value?: any;        // For variable nodes
  isInput?: boolean;  // Is this a starting point?
  codeSnippet?: string; // Future use: for transpiler
  
  // PORTS (Crucial for Phase 2)
  inputs?: NodeInput[];
  outputs?: NodeOutput[];
}