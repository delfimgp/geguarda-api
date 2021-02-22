import {Entity, model, property} from '@loopback/repository';

@model()
export class Ativos extends Entity {
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
  internados: number;

  @property({
    type: 'number',
    required: true,
  })
  uci: number;

  @property({
    type: 'number',
    required: true,
  })
  domicilio: number;


  constructor(data?: Partial<Ativos>) {
    super(data);
  }
}

export interface AtivosRelations {
  // describe navigational properties here
}

export type AtivosWithRelations = Ativos & AtivosRelations;
