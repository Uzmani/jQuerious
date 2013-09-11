post '/user/signin' do
  @user = User.find_by_email(params[:email])
  unless @user.nil? # remove
    if @user.password == params[:password] # => if @user && @user.password...
      session[:user_id] = @user.id
      redirect '/'    
    # else
      # lines 11-12
    end
  end # remove
  @error = "Bad E-Mail/Password combination"
  erb :index
end  

post '/user/new' do
  p params
  user = User.new(username: params[:username], email: params[:email], password_hash: params[:password])
     # why is this an instance variable? also, be more specific, as "new" doesn't tell me anything about *what* this thing is.
  
  
  if user.save  
    log_in_user(user)
    redirect '/home'
  else
    redirect '/'
  end 
    
     #where is the code for this method?
  # what happens if @new doesn't save?
  # redirect '/home'
end


get '/logout' do
  session.clear
  redirect '/'
end

