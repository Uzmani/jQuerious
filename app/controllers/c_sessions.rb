post '/user/signin' do
    @user = User.find_by_email(params[:email])
    unless @user.nil?
      if @user.password == params[:password]
        session[:user_id] = @user.id
        redirect '/'    
      end
    end
        @error = "Bad E-Mail/Password combination"
        erb :index

end  

post '/user/new' do
  p params
  @new = User.new(params)
  log_in_user(params) if @new.save
  redirect '/home'
end


get '/logout' do
  session.clear
  redirect '/'
end

