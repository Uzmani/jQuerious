get '/' do
  # Look in app/views/index.erb
  erb :index
end

#chae erase this line and on

get '/signin' do
  erb :_signin, layout: false
end

get '/signup' do
  erb :_signup, layout: false
end
