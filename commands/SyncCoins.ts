import { BaseCommand, inject } from '@adonisjs/core/build/standalone'

@inject()
export default class SyncCoins extends BaseCommand {
  public static commandName = 'sync:coins'

  /**
   * Command name is used to run the command
   */

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }
  @inject()
  public async run() {
    const { CoinCommandService } = await import('commandServices/Coins')
    await new CoinCommandService().syncCoins()
    this.logger.info('Command Executed')
  }
}
