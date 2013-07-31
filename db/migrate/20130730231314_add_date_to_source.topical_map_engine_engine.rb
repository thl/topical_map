# This migration comes from topical_map_engine_engine (originally 20130730230936)
class AddDateToSource < ActiveRecord::Migration
  def change
    add_column :sources, :taken_on, :datetime
  end
end
