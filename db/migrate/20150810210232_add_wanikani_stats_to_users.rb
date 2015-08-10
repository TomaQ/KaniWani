class AddWanikaniStatsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :gravatar, :string
    add_column :users, :wanikani_level, :integer

    remove_column :users, :wanikani_user_info
  end
end
