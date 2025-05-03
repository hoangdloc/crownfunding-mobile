export default {
  screens: {
    login_screen: {
      welcome_back: "Welcome back!",
      dont_have_an_account: "Don't have an account?",
      sign_up: "Sign up",
      sign_in_with_google: "Sign in with Google",
      forgot_password: "Forgot password?",
      email: "Email",
      password: "Password",
      password_placeholder: "Enter password",
      sign_in: "Sign in"
    },
    signup_screen: {
      sign_up: "Sign up",
      already_have_an_account: "Already have an account?",
      sign_in: "Sign in",
      full_name: "Full Name",
      full_name_placeholder: "John Doe",
      email: "Email",
      email_placeholder: "example@gmail.com",
      password: "Password",
      password_placeholder: "Create a password",
      terms_and_conditions:
        "I agree to the <link>Terms of Use</link> and have read and understand the <link>Privacy Policy</link>.",
      create_account: "Create my account",
      sign_up_with_google: "Sign up with Google",
      or_sign_up_with_email: "Or sign up with email"
    },
    forgot_password_screen: {
      step_1: {
        title: "Forgot Password",
        description: "Enter your email address so that we can send you OTP.",
        email: "Email",
        email_placeholder: "example@gmail.com",
        send_otp: "Send OTP"
      }
    }
  },
  validations: {
    email_required: "Email is required",
    email_invalid: "Email is invalid",
    password_required: "Password is required",
    password_length_invalid: "Password must have 8-32 characters",
    full_name_required: "Full name is required",
    full_name_invalid: "Full name is invalid",
    max50_characters: "Maximum 50 characters"
  },
  errors: {
    something_went_wrong: "Something went wrong"
  }
};
