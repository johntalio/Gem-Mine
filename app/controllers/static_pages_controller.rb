class StaticPagesController < ApplicationController
  def root
    @mines = Mine.all
    if params[:search]
      @mines = Mine.search(params[:search]).order("created_at DESC")
    else
      flash[:notice] = "Oh no! Looks like that gem can't be found."
    end
  end

  def favorites
  end
end
