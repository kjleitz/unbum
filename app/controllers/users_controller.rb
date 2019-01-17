class UsersController < ApplicationController
  helper_method :current_user, :logged_in?
  before_action :set_user, only: [:update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      set_current_user(@user)
      render status: 201, json: { id: @user.id, username: @user.username }
    else
      render status: 400, json: { errors: @user.errors.full_messages }
    end
  end

  def update
    if !@user
      render status: 404, json: { errors: ['User not found'] }
    elsif @user.update(user_params)
      render status: 200, json: { id: @user.id, username: @user.username }
    else
      render status: 400, json: { errors: @user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :days_unbummed)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
