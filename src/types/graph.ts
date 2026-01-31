// The types of nodes our IDE supports
export type NodeType = 'variable' | 'logger';

export interface ConstructNodeData {
  // Visuals
  label: string;
  type?: string;     // 'string' | 'number' | 'log'
  
  // Logic
  value?: any;       // The actual data (e.g., "Hello World")
  isInput?: boolean; // Is this a starting point?
}