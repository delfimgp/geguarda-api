import {Entity, model, property} from '@loopback/repository';

@model()
export class Variantes extends Entity {
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
  variante: string;

  @property({
    type: 'number',
    required: true,
  })
  casos: number;


  constructor(data?: Partial<Variantes>) {
    super(data);
  }
}

export interface VariantesRelations {
  // describe navigational properties here
}

export type VariantesWithRelations = Variantes & VariantesRelations;
