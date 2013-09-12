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
  #stubbed: (what is this for? -lla)
  erb :create_survey
end

post '/survey/:id/submit' do
  current_survey = params[:id]
  params.keep_if {|k,_| /\A\d+\z/ === k}
  params.each_pair do |k,v|
    Answer.create(user_id: current_user.id, question_id: k, choice_id: v)
  end
  redirect "/survey/#{current_survey}/stats"
end

post '/survey/create' do
  puts "*" * 80
  p params
  parse_form(params) #move this from the helper into here and define
  puts "*" * 80
  "I'm in the Post"
end

get '/survey/:id' do
  @current_survey = Survey.find(params[:id])
  erb :view_survey
end

post '/survey/:id/question/create' do
  # this needs to be built out
  redirect '/home'
end

get '/form/question' do
  erb :"/survey/_create_qa", layout: false
end

get '/form/choice' do
  erb :"/survey/_create_choice", layout: false
end

#chae erase this line and on (? -lla)

get '/signin' do
  erb :_signin, layout: false
end

get '/signup' do
  erb :_signup, layout: false
end
# ^ move 54-60 to the sessions controller
