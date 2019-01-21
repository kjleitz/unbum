class UsersController < RenderedController
  helper_method :current_user, :logged_in?
  before_action :set_user, only: [:update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      set_current_user(@user)
      flash[:success] = "Successfully created user '#{@user.username}'"
      redirect_to root_path
    else
      flash[:error] = @user.errors.full_messages
      redirect_to signup_path
    end
  end

  def update
    if !@user
      render status: 404
    elsif @user.update(user_params)
      respond_to do |format|
        format.json { render json: @user }
        format.html do
          flash[:success] = "Successfully updated user '#{@user.username}'"
          redirect_to root_path
        end
      end
    else
      flash[:error] = @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :days_unbummed)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
