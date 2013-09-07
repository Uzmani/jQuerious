post '/user/signin' do
  log_in_user(params)
    unless @login_error
      redirect '/home'
    end
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

