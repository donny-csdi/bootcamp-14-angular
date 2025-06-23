export interface ICvData {
    name: string,
    age: number,
    phone: string,
    image: string,
    email: string,
    address: string,
    techStack: string[]
}

export interface IPokemon {
    name: string,
    id: number,
    spirits: string
    url?:string
    element?:string
}

export interface IPokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    cries: {
      latest: string;
      legacy: string;
    };
    sprites: {
      front_default: string;
      back_default: string;
    };
    types: Array<{
      type: {
        name: string;
      };
    }>;
    stats: Array<{
      base_stat: number;
      stat: {
        name: string;
      };
    }>;
  }