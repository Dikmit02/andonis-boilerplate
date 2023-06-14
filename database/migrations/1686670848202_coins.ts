import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'coins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('coin_gecko_id').index().unique()
      table.string('symbol').index()
      table.string('name').index().unique()
      table.json('platforms')
      table.dateTime('created_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP'))
      table.dateTime('updated_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP '))
    }).raw(`
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
     NEW."updated_at"=now(); 
     RETURN NEW;
    END;
    $$ language 'plpgsql';
  `).raw(`
    CREATE TRIGGER update_coins_updated_at BEFORE UPDATE
    ON coins FOR EACH ROW EXECUTE PROCEDURE 
    update_updated_at_column();
  `)
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
