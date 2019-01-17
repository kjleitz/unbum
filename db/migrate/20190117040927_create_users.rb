class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.integer :days_unbummed, default: 0, null: false
      t.datetime :last_unbummed_at

      t.timestamps
    end
  end
end
