get '/' do
  if logged_in? # => if current_user
    @users_surveys = current_user.surveys
    redirect '/home'
  else
    erb :index    #, :layout => false #why is layout false?
  end
end

post '/user/signin' do
  @user = User.find_by_email(params[:email])
  if @user && @user.password == params[:password] # => if @user && @user.password...
    session[:user_id] = @user.id
    redirect '/'    
    # else
      # lines 11-12
  end # remove
  @error = "Bad E-Mail/Password combination"
  erb :index
end  

post '/user/new' do
  p params
  signup_user = User.find_by_email(params[:email])
  p signup_user
  if signup_user
    @error = "User with that email already exists!"
    erb :index
  else
    user = User.new(username: params[:username], email: params[:email])
    user.password = params[:password]
    user.save
    log_in_user(user)
    redirect '/home'
   # why is this an instance variable? also, be more specific, as "new" doesn't tell me anything about *what* this thing is.
  
  # elsif user.save  
  end 
    
     #where is the code for this method?
  # what happens if @new doesn't save?
  # redirect '/home'
end


get '/logout' do
  session.clear
  redirect '/'
end

