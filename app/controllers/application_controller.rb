class ApplicationController < ActionController::API
  before_action :set_current_user!
  before_action :set_logged_in!

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def set_current_user(user)
    session[:user_id] = user.is_a?(User) ? user.id : user;
  end

  def set_current_user!
    current_user
  end

  def set_logged_in!
    @logged_in = logged_in?
  end

  def clear_current_user
    session.delete(:user_id)
  end

  def logged_in?
    !!current_user
  end
end
