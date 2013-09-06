class User < ActiveRecord::Base

  has_many :surveys
  has_many :answers

    def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end


  def self.login(email,password)
    @user = User.find_by_email(email)
    if @user.password == password
      @user
    else
      @login_error = "Incorrect Username/Password combination"
    end
  end  

end
