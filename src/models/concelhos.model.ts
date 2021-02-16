import {Entity, model, property} from '@loopback/repository';

@model()
export class Concelhos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'string',
    required: true,
  })
  concelho: string;

  @property({
    type: 'number',
    required: true,
  })
  confirmados: number;

  @property({
    type: 'number',
    required: true,
  })
  ativos: number;

  @property({
    type: 'number',
    required: true,
  })
  obitos: number;


  constructor(data?: Partial<Concelhos>) {
    super(data);
  }
}

export interface ConcelhosRelations {
  // describe navigational properties here
}

export type ConcelhosWithRelations = Concelhos & ConcelhosRelations;
