import CoinModel from 'App/Models/Coin'

import COIN_GECKO_ROUTES from '../constants/coinGecko'
import AxiosService from '@ioc:Utils/AxiosService'

export class CoinCommandService {
  private CoinModel: typeof CoinModel
  private axiosService: typeof AxiosService
  constructor() {
    this.CoinModel = CoinModel
    this.axiosService = AxiosService
  }
  async syncCoins() {
    let { data }: { data: Record<string, any>[] } = await this.axiosService
      .get(COIN_GECKO_ROUTES.COINS)
      .catch((err) => {
        if (err.response.status == 429) {
          console.log('Maximum api call reached in a minute')
        }
        console.log('ERROR', JSON.stringify(err?.response?.data))
        return { data: [] }
      })

    if (!data?.length) {
      console.log('No Coin Was Synced')
      return
    }

    console.log('total coin to sync', data.length)
    data = data.map(({ id, platforms, ...rest }) => ({
      coin_gecko_id: id,
      platforms: JSON.stringify(platforms),
      ...rest,
    }))
    await this.CoinModel.upsert(data, 'coin_gecko_id')
  }
}
