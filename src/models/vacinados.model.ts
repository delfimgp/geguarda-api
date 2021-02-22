import {Entity, model, property} from '@loopback/repository';

@model()
export class Vacinados extends Entity {
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
  valor: number;


  constructor(data?: Partial<Vacinados>) {
    super(data);
  }
}

export interface VacinadosRelations {
  // describe navigational properties here
}

export type VacinadosWithRelations = Vacinados & VacinadosRelations;
