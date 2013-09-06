get '/home' do 
  erb :dashboard
end


get '/stats' do 

  erb :stats
end


get '/survey/new' do 

  erb :create_survey
end

get '/survey/:id' do 

end

#chae erase this line and on

get '/signin' do
  erb :_signin, layout: false
end

get '/signup' do
  erb :_signup, layout: false
end
