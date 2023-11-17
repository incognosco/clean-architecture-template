export class Endpoints {
  public static baseUrl = import.meta.env.VITE_API_URL

  // tslint:disable-next-line: max-classes-per-file
  public static Route = class {
    public static PRODUCT_DATA = '/products'
  }
}
