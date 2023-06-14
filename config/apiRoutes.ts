import Env from '@ioc:Adonis/Core/Env'

const apiRoutesConfig = { coinGeckoApi: Env.get('COINGECKO_API') }
export default apiRoutesConfig
