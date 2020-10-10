import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHtttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeRemoteAuthentication = (): RemoteAuthentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHtttpClient())
}
