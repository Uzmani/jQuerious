get '/home' do
  @user_surveys = current_user.surveys
  @all_surveys = Survey.all
  erb :dashboard
end

get '/survey/:id/stats' do
  @current_survey = Survey.find(params[:id])
  erb :stats
end



get '/survey/new' do
  #stubbed:
  erb :create_survey

end



post '/survey/create' do

  @current_survey = Survey.create(user_id: current_user.id, name: params[:name])

  # receives JSON. Iterate through questions to create survey
end


get '/survey/:id' do
  @current_survey = Survey.find(params[:id])
  erb :view_survey
end


post '/survey/:id/question/create' do
  redirect '/home'
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
