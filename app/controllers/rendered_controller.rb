class RenderedController < ActionController::Base
  before_action :set_current_user!
  before_action :set_logged_in!
  # after_action 

  # helper_method :flash
  helper_method :logged_in?

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

  # # I'd rather not add in the middleware/etc. required for the usual flash,
  # # since the back end is mostly an API... this works, though.
  # def flash
  #   session[:flash_stuff] ||= {}
  # end

  # def clear_flash
  #   session[:flash_stuff] = {}
  # end
end
