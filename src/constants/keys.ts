export const Supabase_Url = ``;
export const supabase_Key = ``;

export const BASE_URL = 'http://localhost:3000/api';


export const local_network_address = 'http://localhost:3000';



// status_code
export const STATUS_CODE = {
    OK:200,
    Not_found : 404,
    Internal_server_error :500,
    Email_already_exist : 400,
    OTP_expired : 403,
    OTP_invalid : 401
}

export const RESPONSE_PROPERTIES = {
  200: {
    status_name: 'OK',
    message: 'succeeded',
  },
  403: {
    status_name: 'OTP_expired',
    message: 'OTP expired. Please request a new one.',
  },
  404: {
    status_name: 'Not_found',
    message: 'Email not found. Please register your email first.',
  },
  401: {
    status_name: 'OTP_invalid',
    message: 'Invalid OTP. Please try again.',
  },
  500: {
    status_name: 'Internal_server_error',
    message: 'Something went wrong. Please try again.',
  },
  400: {
    status_name: 'Already_exist',
    message: 'Email already in use. Please use a different email.',
  },
   407: {
    status_name: 'Supabase error',
    message: 'Something went wrong please try again later',
  },
};
