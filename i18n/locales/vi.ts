export default {
  screens: {
    login_screen: {
      welcome_back: "Chào mừng trở lại!",
      dont_have_an_account: "Chưa có tài khoản?",
      sign_up: "Đăng ký",
      sign_in_with_google: "Đăng nhập với Google",
      forgot_password: "Quên mật khẩu?",
      email: "Email",
      password: "Mật khẩu",
      password_placeholder: "Nhập mật khẩu",
      sign_in: "Đăng nhập"
    },
    signup_screen: {
      sign_up: "Đăng ký",
      already_have_an_account: "Đã có tài khoản?",
      sign_in: "Đăng nhập",
      full_name: "Họ và tên",
      full_name_placeholder: "John Doe",
      email: "Email",
      email_placeholder: "example@gmail.com",
      password: "Mật khẩu",
      password_placeholder: "Tạo mật khẩu",
      terms_and_conditions:
        "Tôi đồng ý với <link>Điều khoản sử dụng</link> và đã đọc và hiểu <link>Chính sách bảo mật</link>.",
      create_account: "Tạo tài khoản của tôi",
      sign_up_with_google: "Đăng ký với Google",
      or_sign_up_with_email: "Hoặc đăng ký bằng email"
    }
  },
  validations: {
    email_required: "Email là bắt buộc",
    email_invalid: "Email không hợp lệ",
    password_required: "Mật khẩu là bắt buộc",
    password_length_invalid: "Mật khẩu phải có từ 8-32 ký tự",
    full_name_required: "Họ và tên là bắt buộc",
    full_name_invalid: "Họ và tên không hợp lệ",
    max50_characters: "Tối đa 50 ký tự"
  },
  errors: {
    something_went_wrong: "Có lỗi xảy ra"
  }
};
