import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'

export const makeAxiosHtttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
