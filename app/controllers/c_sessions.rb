post '/user/signin' do 
  User.login(params)
    unless @login_error
      redirect '/home'
    end
  end
end


post '/user/new' do
  User.create(params)
  redirect 'home'
end


get '/logout' do 
  session.clear
  erb :index
  end
end
