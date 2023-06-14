import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CoinModel extends BaseModel {
  public static table = 'coins'
  public static boot() {
    if (this.booted) {
      return
    }

    super.boot()
  }

  public static async upsert(data: Record<string, any>[], conflictColumn) {
    await this.query().knexQuery.insert(data).onConflict(conflictColumn).merge()
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public coinGeckoId: string

  @column()
  public symbol: string

  @column()
  public name: string

  @column()
  public platforms: object

  @column()
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
