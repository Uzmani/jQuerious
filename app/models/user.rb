class User < ActiveRecord::Base

  has_many :surveys
  has_many :answers

  include BCrypt

    def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end


  def self.login(input)
    @user = User.find_by_email(input[:email])
    if @user.password == input[:password]
      @user
    else
      @login_error = "Incorrect Username/Password combination"
    end
  end  

end
