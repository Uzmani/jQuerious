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
  @new = User.new(params) # why is this an instance variable? also, be more specific, as "new" doesn't tell me anything about *what* this thing is.
  log_in_user(params) if @new.save #where is the code for this method?
  # what happens if @new doesn't save?
  redirect '/home'
end


get '/logout' do
  session.clear
  redirect '/'
end

