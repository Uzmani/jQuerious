get '/' do
  if logged_in?
    @users_surveys = current_user.surveys
    redirect '/home'
  else
    erb :index
  end
end

