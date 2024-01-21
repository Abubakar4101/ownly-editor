export enum ModulesPaths {
  ROOT = '/',
}

export type UserTypes = 'admin' | 'member';

export type ListResponse<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    offset: number;
  };
};

export interface Pagination {
  count: number;
  page: number;
  size: number;
}
