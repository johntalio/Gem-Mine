class StaticPagesController < ApplicationController
  def root
    # @mines = Mine.query([:search]).order("created_at DESC")
  end

  def favorites
  end
end
