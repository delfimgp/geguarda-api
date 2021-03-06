import {Entity, model, property} from '@loopback/repository';

@model()
export class Casos extends Entity {
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

  @property({
    type: 'string',
  })
  concelhosId?: string;

  constructor(data?: Partial<Casos>) {
    super(data);
  }
}

export interface CasosRelations {
  // describe navigational properties here
}

export type CasosWithRelations = Casos & CasosRelations;
