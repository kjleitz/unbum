class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6, maximum: 100 }

  before_save :touch_last_unbummed_at!, if: :days_unbummed_changed?

  private

  def touch_last_unbummed_at!
    touch(:touch_last_unbummed_at!)
  end
end
