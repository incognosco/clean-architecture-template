// export interface IPost {
//     id: number;
//     title: string;
//   }

export interface IPost {
  date:string;
  temperatureC: number;
  temperatureF: number;
  summary:string;
}

export interface IEntries {
  API:string;
  Description: string;
  Auth: string;
  HTTPS:string;
  Cors:string;
  Link:string;
  Category:string;
}