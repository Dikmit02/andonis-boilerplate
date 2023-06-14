import Config from '@ioc:Adonis/Core/Config'
const HOST = Config.get('apiRoutes.coinGeckoApi')
const COIN_GECKO_ROUTES = {
  COINS: `${HOST}/coins/list?include_platform=true`,
}
export default COIN_GECKO_ROUTES
