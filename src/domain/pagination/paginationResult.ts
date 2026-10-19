export interface PaginationResult<T> {
    items:    T[];
    nextPage: number;
    limit:    number;
}