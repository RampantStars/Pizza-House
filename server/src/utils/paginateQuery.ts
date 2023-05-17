import { ApiQuery } from '@nestjs/swagger';

export interface IApiQueryOptions {
  name: string;
  type: any;
  description?: string;
  required?: boolean;
  example?: any;
}

export const IPaginateQuery = (...options: IApiQueryOptions[]) => {
  const queries = options.map((opt) => ApiQuery(opt));
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    queries.forEach((query) => {
      query(target, propertyKey, descriptor);
    });
  };
};

export const queryPaginate = [
  {
    name: 'page',
    type: Number,
    description: 'Номер страницы',
    required: false,
    example: '1',
  },
  {
    name: 'limit',
    type: Number,
    description: 'Количество элементов на странице',
    required: false,
    example: 10,
  },
  {
    name: 'sort',
    type: String,
    description: 'Строка сортировки',
    required: false,
  },
  {
    name: 'filter.categories.name',
    type: String,
    description: 'Строка фильтрации по категориям',
    required: false,
    example: 'Грибная',
  },
  {
    name: 'filter.price',
    type: String,
    description: 'Строка фильтрации по диапазону цены',
    required: false,
    example: '$btw:300,500',
  },
  {
    name: 'search',
    type: String,
    description: 'Строка поиска',
    required: false,
    example: 'Пепперони',
  },
];
