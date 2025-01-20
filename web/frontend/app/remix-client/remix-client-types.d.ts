export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type PostgresDbGetProductsRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'imageUrl' | 'name' | 'price' | 'updatedAt'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.ilike'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: string;
  'where.id.neq'?: string;
  'where.id.gt'?: string;
  'where.id.gte'?: string;
  'where.id.lt'?: string;
  'where.id.lte'?: string;
  'where.id.like'?: string;
  'where.id.ilike'?: string;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.imageUrl.eq'?: string;
  'where.imageUrl.neq'?: string;
  'where.imageUrl.gt'?: string;
  'where.imageUrl.gte'?: string;
  'where.imageUrl.lt'?: string;
  'where.imageUrl.lte'?: string;
  'where.imageUrl.like'?: string;
  'where.imageUrl.ilike'?: string;
  'where.imageUrl.in'?: string;
  'where.imageUrl.nin'?: string;
  'where.imageUrl.contains'?: string;
  'where.imageUrl.contained'?: string;
  'where.imageUrl.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.ilike'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.price.eq'?: string;
  'where.price.neq'?: string;
  'where.price.gt'?: string;
  'where.price.gte'?: string;
  'where.price.lt'?: string;
  'where.price.lte'?: string;
  'where.price.like'?: string;
  'where.price.ilike'?: string;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.ilike'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.updatedAt.contains'?: string;
  'where.updatedAt.contained'?: string;
  'where.updatedAt.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.createdAt'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.imageUrl'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
  'orderby.price'?: 'asc' | 'desc';
  'orderby.updatedAt'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type PostgresDbGetProductsResponseOK = Array<{ 'id'?: string | null; 'name'?: string | null; 'description'?: string | null; 'price'?: string | null; 'imageUrl'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type PostgresDbGetProductsResponses =
  PostgresDbGetProductsResponseOK

export type PostgresDbCreateProductRequest = {
  'id'?: string;
  'name': string;
  'description'?: string | null;
  'price': string;
  'imageUrl'?: string | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * A Product
 */
export type PostgresDbCreateProductResponseOK = {
  'id': string | null;
  'name': string | null;
  'description': string | null;
  'price': string | null;
  'imageUrl': string | null;
  'createdAt': string | null;
  'updatedAt': string | null;
}
export type PostgresDbCreateProductResponses =
  PostgresDbCreateProductResponseOK

export type PostgresDbUpdateProductsRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'imageUrl' | 'name' | 'price' | 'updatedAt'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.ilike'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: string;
  'where.id.neq'?: string;
  'where.id.gt'?: string;
  'where.id.gte'?: string;
  'where.id.lt'?: string;
  'where.id.lte'?: string;
  'where.id.like'?: string;
  'where.id.ilike'?: string;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.imageUrl.eq'?: string;
  'where.imageUrl.neq'?: string;
  'where.imageUrl.gt'?: string;
  'where.imageUrl.gte'?: string;
  'where.imageUrl.lt'?: string;
  'where.imageUrl.lte'?: string;
  'where.imageUrl.like'?: string;
  'where.imageUrl.ilike'?: string;
  'where.imageUrl.in'?: string;
  'where.imageUrl.nin'?: string;
  'where.imageUrl.contains'?: string;
  'where.imageUrl.contained'?: string;
  'where.imageUrl.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.ilike'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.price.eq'?: string;
  'where.price.neq'?: string;
  'where.price.gt'?: string;
  'where.price.gte'?: string;
  'where.price.lt'?: string;
  'where.price.lte'?: string;
  'where.price.like'?: string;
  'where.price.ilike'?: string;
  'where.price.in'?: string;
  'where.price.nin'?: string;
  'where.price.contains'?: string;
  'where.price.contained'?: string;
  'where.price.overlaps'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.ilike'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.updatedAt.contains'?: string;
  'where.updatedAt.contained'?: string;
  'where.updatedAt.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: string;
  'name': string;
  'description'?: string | null;
  'price': string;
  'imageUrl'?: string | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * Default Response
 */
export type PostgresDbUpdateProductsResponseOK = Array<{ 'id'?: string | null; 'name'?: string | null; 'description'?: string | null; 'price'?: string | null; 'imageUrl'?: string | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type PostgresDbUpdateProductsResponses =
  PostgresDbUpdateProductsResponseOK

export type PostgresDbGetProductByIdRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'imageUrl' | 'name' | 'price' | 'updatedAt'>;
  'id': string;
}

/**
 * A Product
 */
export type PostgresDbGetProductByIdResponseOK = {
  'id': string | null;
  'name': string | null;
  'description': string | null;
  'price': string | null;
  'imageUrl': string | null;
  'createdAt': string | null;
  'updatedAt': string | null;
}
export type PostgresDbGetProductByIdResponses =
  PostgresDbGetProductByIdResponseOK

export type PostgresDbUpdateProductRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'imageUrl' | 'name' | 'price' | 'updatedAt'>;
  'id': string;
  'name': string;
  'description'?: string | null;
  'price': string;
  'imageUrl'?: string | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * A Product
 */
export type PostgresDbUpdateProductResponseOK = {
  'id': string | null;
  'name': string | null;
  'description': string | null;
  'price': string | null;
  'imageUrl': string | null;
  'createdAt': string | null;
  'updatedAt': string | null;
}
export type PostgresDbUpdateProductResponses =
  PostgresDbUpdateProductResponseOK

export type PostgresDbDeleteProductsRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'imageUrl' | 'name' | 'price' | 'updatedAt'>;
  'id': string;
}

/**
 * A Product
 */
export type PostgresDbDeleteProductsResponseOK = {
  'id': string | null;
  'name': string | null;
  'description': string | null;
  'price': string | null;
  'imageUrl': string | null;
  'createdAt': string | null;
  'updatedAt': string | null;
}
export type PostgresDbDeleteProductsResponses =
  PostgresDbDeleteProductsResponseOK

export type GetPostgresDbExampleRequest = {
  
}

export type GetPostgresDbExampleResponseOK = unknown
export type GetPostgresDbExampleResponses =
  FullResponse<GetPostgresDbExampleResponseOK, 200>



export interface RemixClient {
  setBaseUrl(newUrl: string) : void;
  setDefaultHeaders(headers: object) : void;
  /**
   * Get products.
   *
   * Fetch products from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbGetProducts(req: PostgresDbGetProductsRequest): Promise<PostgresDbGetProductsResponses>;
  /**
   * Create product.
   *
   * Add new product to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbCreateProduct(req: PostgresDbCreateProductRequest): Promise<PostgresDbCreateProductResponses>;
  /**
   * Update products.
   *
   * Update one or more products in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbUpdateProducts(req: PostgresDbUpdateProductsRequest): Promise<PostgresDbUpdateProductsResponses>;
  /**
   * Get Product by id.
   *
   * Fetch Product using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbGetProductById(req: PostgresDbGetProductByIdRequest): Promise<PostgresDbGetProductByIdResponses>;
  /**
   * Update product.
   *
   * Update product in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbUpdateProduct(req: PostgresDbUpdateProductRequest): Promise<PostgresDbUpdateProductResponses>;
  /**
   * Delete products.
   *
   * Delete one or more products from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  postgresDbDeleteProducts(req: PostgresDbDeleteProductsRequest): Promise<PostgresDbDeleteProductsResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getPostgresDbExample(req: GetPostgresDbExampleRequest): Promise<GetPostgresDbExampleResponses>;
}
type PlatformaticFrontendClient = Omit<RemixClient, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
