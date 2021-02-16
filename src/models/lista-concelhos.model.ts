import {Entity, model, property} from '@loopback/repository';

@model()
export class ListaConcelhos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  concelho: string;


  constructor(data?: Partial<ListaConcelhos>) {
    super(data);
  }
}

export interface ListaConcelhosRelations {
  // describe navigational properties here
}

export type ListaConcelhosWithRelations = ListaConcelhos & ListaConcelhosRelations;
