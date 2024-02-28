export type TodoT = {
  checked: boolean;
  name: string;
  description: string;
  type: 'personal' | 'business';
  createdAt: number;
}

export type TodoCreateT = {
  name: string;
  description: string;
  type: 'personal' | 'business';
}
