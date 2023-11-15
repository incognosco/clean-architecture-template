type ErrorResponse = 'DATA-NOT-FOUND'

export interface APIResponse<T> {
  message: 'success' | 'failed' | string
  data: T
  error: ErrorResponse | string
}