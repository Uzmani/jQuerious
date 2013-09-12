helpers do

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def log_in_user(user)
    p user
    # user = User.find_by_email(params[:email])
    
    session[:user_id] = user.id
  end
  # ^ redundant, remove

end
