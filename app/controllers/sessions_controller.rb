class SessionsController < ActionController::Base
  def new
    # redirect_to root_path and return if logged_in?
    # raise "DUMB"
    @user = User.new
    # render 'new', layout: 'sessions'
  end

  def create
    username, password = session_params.values_at(:username, :password)
    user = User.find_by(username)
    if user && user.authenticate(password)
      set_current_user(user.id)
      flash[:success] = "Logged in as #{user.username}!"
      redirect_to root_path
    else
      flash[:error] = "Invalid login username and/or password. Please try again."
      redirect_to login_path
    end
  end

  def destroy
    clear_current_user
    flash[:success] = "Logged out!"
    redirect_to login_path
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
