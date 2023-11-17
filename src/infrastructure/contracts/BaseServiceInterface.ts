  export interface BaseServiceInterface {
    handle: (param?: any) => Promise<any>
    context: any
  }