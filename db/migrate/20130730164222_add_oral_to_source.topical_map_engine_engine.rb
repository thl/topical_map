# This migration comes from topical_map_engine_engine (originally 20130730161318)
class AddOralToSource < ActiveRecord::Migration
  def change
    add_column :sources, :oral, :string
  end
end
