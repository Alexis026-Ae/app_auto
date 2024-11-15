class Product < ApplicationRecord
  include Favoritable

  has_one_attached :photo
  validates :title, :description, :price, presence: true
  
  belongs_to :category
  belongs_to :user, default: -> { Current.user }

  # Método de búsqueda con prioridad en título sobre descripción
  def self.search_with_priority(query)
    sanitized_query = "%#{sanitize_sql_like(query)}%"
    where("title LIKE :query OR description LIKE :query", query: sanitized_query)
      .order(Arel.sql("CASE WHEN title LIKE #{sanitize_sql_for_conditions(['?', query])} THEN 1 ELSE 2 END"))
  end

  ORDER_BY = {
    newest: "created_at DESC",
    expensive: "price DESC",
    cheapest: "price ASC"
  }

  def owner?
    user_id == Current.user&.id
  end
end



