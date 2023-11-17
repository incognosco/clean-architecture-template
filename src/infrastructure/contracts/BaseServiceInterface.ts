  export interface BaseServiceInterface {
    handle: (context: any, param?: any) => Promise<any>
    
  }