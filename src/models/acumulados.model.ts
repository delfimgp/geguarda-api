import {Entity, model, property} from '@loopback/repository';

@model()
export class Acumulados extends Entity {
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


  constructor(data?: Partial<Acumulados>) {
    super(data);
  }
}

export interface AcumuladosRelations {
  // describe navigational properties here
}

export type AcumuladosWithRelations = Acumulados & AcumuladosRelations;
