require "test_helper"

class Authentication::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should create user" do
  
    assert_difference("User.count") do
      post users_url, params: { user: { email: 'juan@retromarket.com', username: 'juan', password: 'testme' } }
    end

    assert_redirected_to products_url
  end
end
