export type PokemonModel = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }
  ];
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      }
    }
  ]
}