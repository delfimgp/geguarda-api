import {Entity, model, property} from '@loopback/repository';

@model()
export class Vacinas extends Entity {
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
  vacinados: number;


  constructor(data?: Partial<Vacinas>) {
    super(data);
  }
}

export interface VacinasRelations {
  // describe navigational properties here
}

export type VacinasWithRelations = Vacinas & VacinasRelations;
