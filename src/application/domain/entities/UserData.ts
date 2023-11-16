export class UserData {
  private id: number
  private isRegistered: boolean

  constructor(
    id: number,
    isRegistered: boolean
  ) {
    this.id = id
    this.isRegistered = isRegistered
  }
}

export class User {
  public success: boolean
  public message: string
  public data?: UserData[]

  constructor(
    success: boolean,
    message: string,
    data?: UserData[]
  ) {
    this.success = success
    this.message = message
    this.data = data
  }
}
