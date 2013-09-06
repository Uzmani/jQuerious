helpers do

  def log_in_user(email,password)
    User.login(email, password)
    if @user
      session[:user_id] = @user.id
  end


  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    end
  end

  def logged_in?
    !current_user.nil?
  end


end
