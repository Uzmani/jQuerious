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
