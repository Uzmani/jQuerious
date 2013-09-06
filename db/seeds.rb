9.times do
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Lorem.word)
end
users = User.all

test_user = User.create(username: "test", email: "test@dbc.com", password: "password");

# survey creation
5.times do
  Survey.create(user: test_user, name: Faker::Lorem.sentence)
end

surveys = Survey.all

surveys.each do |survey|
  10.times do |i|
    i+=1
    survey.questions.create(title: Faker::Lorem.sentence)
  end
end
