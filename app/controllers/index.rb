get '/' do
  if logged_in? # => if current_user
    @users_surveys = current_user.surveys
    redirect '/home'
  else
    erb :index, :layout => false #why is layout false?
  end
end

# consolidate this file and c_sessions.rb