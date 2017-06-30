class SearchController < ApplicationController
  def create
    query = params[:query].downcase
    search_gems = Gems.search query

    @result = search_gems.find {|result| result["name"].downcase == query }
    if @result
      render partial: '/searches/success'
    else
      render partial: '/searches/failure'
    end
  end

end
