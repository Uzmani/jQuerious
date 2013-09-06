get '/home' do 
  @user_surveys = current_user.surveys
  @all_surveys = Survey.all
  erb :dashboard
end



get '/stats' do 

  erb :stats
end




get '/survey/new' do 

  erb :create_survey
end



post '/survey/create' do 
  # receives JSON. Iterate through questions to create survey
end



post '/question/create' do 

end

get '/survey/:id' do 
  @current_survey = Survey.find(params[:id])
  erb :view_survey
end



post '/survey' do

end




#chae erase this line and on

get '/signin' do
  erb :_signin, layout: false
end

get '/signup' do
  erb :_signup, layout: false
end


#create survey to pass to _create_qa
#
