class Mine < ApplicationRecord
  validates :name, :info, presence: true
  validates_uniqueness_of :name

  def self.query(gem_name)
    query = Gems.info(gem_name)
    Mine.find_or_create_by(name: query["name"], info: query["info"], dependencies: query["dependencies"].to_s, documentation_uri: query["documentation_uri"])
  end
end
