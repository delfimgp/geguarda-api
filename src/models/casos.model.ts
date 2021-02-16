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
  obitos: number;

  @property({
    type: 'number',
    required: true,
  })
  recuperados: number;

  @property({
    type: 'number',
    required: true,
  })
  vigilancia: number;

  @property({
    type: 'number',
    required: true,
  })
  profissionais: number;

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


  constructor(data?: Partial<Casos>) {
    super(data);
  }
}

export interface CasosRelations {
  // describe navigational properties here
}

export type CasosWithRelations = Casos & CasosRelations;
