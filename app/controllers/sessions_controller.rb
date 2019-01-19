class SessionsController < RenderedController
  def new
    @user = User.new
  end

  def create
    user = User.find_by(username: session_params[:username])
    if user && user.authenticate(session_params[:password])
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
