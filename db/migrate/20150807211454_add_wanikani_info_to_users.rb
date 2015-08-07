class AddWanikaniInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :wanikani_user_info, :text
    add_column :users, :wanikani_vocab, :text
  end
end
