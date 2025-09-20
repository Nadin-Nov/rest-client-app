export interface Variable {
  key: string;
  value: string;
}

export type VariablesState = Variable[];

export type VariablesAction =
  | { type: 'LOAD'; payload: Variable[] }
  | { type: 'ADD'; payload: Variable }
  | { type: 'UPDATE'; key: string; value: string }
  | { type: 'REMOVE'; key: string }
  | { type: 'CLEAR' };

export interface VariablesContextValue {
  state: VariablesState;
  dispatch: React.Dispatch<VariablesAction>;
  hasVariables: boolean;
}
