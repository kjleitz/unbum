class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password,
    presence: true,
    confirmation: true,
    length: { minimum: 6, maximum: 100 },
    on: :create

  before_save :touch_last_unbummed_at!, if: -> { days_unbummed_changed? && days_unbummed.positive? }

  private

  def touch_last_unbummed_at!
    touch(:last_unbummed_at)
  end
end
