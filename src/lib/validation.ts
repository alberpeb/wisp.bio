import { object, string, infer as zodInfer, ZodError } from 'zod';
//import { ZodError, fromZodError } from 'zod-validation-error';

export const userSignupValidationSchema = object({
    username:
        string()
        .toLowerCase()
        .min(5, "Min. length is 5")
        .max(20, "Max. length is 20")
        .regex(new RegExp("(?!.*[.]{2})"), "Two consecutive dots not allowed")
        .regex(new RegExp(/^[a-zA-Z0-9_.-]*$/), "Username must only contain letters, numbers, undercore or dots")
        .regex(new RegExp(/^(?!\.)/), "Dots at start not allowed")
        .regex(new RegExp(/^(?!.*\.$)/), "Dots at the end not allowed")
        .regex(new RegExp(/^(?!.*__).*$/), "Two consecutive undercores not allowed"),
    email:
        string()
        .email("Enter a valid email format")
        .toLowerCase()
        .min(14, "Min. length is 14")
        .max(40, "Max. length is 40"),
    password:
        string()
        .min(10, "Min. length is 10")
        .max(60, "Max. length is 60"),
    confirmpswd:
        string(),
  })
  .refine((data) => data.password === data.confirmpswd, {
    message: "Password and confirmation must match",
    path: ["confirmpswd"] 
  });

export const userSigninValidationSchema = object({
  usernameOrEmail: 
      string()
      .toLowerCase()
      .min(5, "Min. length is 5")
      .max(40, "Max. length is 40"),
  password:
      string().nonempty("Enter your password")
});
 
export type UserSignup = zodInfer<typeof userSignupValidationSchema>;

export type UserSignin = zodInfer<typeof userSigninValidationSchema>;

export type ValidUser = {
  success: boolean;
  value: UserSignup;
}

export type InvalidUser = {
  success: boolean;
  value: string;
}

export type SignupValidationUnion =
| {
  success: true;
  value: UserSignup;
}
| {
  success: false;
  value: ZodError;
}

export type SigninValidationUnion =
| {
  success: true;
  value: UserSignin;
}
| {
  success: false;
  value: ZodError;
}

export const validateUserSignup = (inputs: UserSignup): SignupValidationUnion => {
    const validationResult = userSignupValidationSchema.safeParse(inputs)

    if(!validationResult.success && validationResult.error.issues) {
        return { success: false, value: validationResult.error };
    }
    return {success: true, value: inputs};
};

export const validateUserSignin = (inputs: UserSignin): SigninValidationUnion => {
  const validationResult = userSigninValidationSchema.safeParse(inputs)

  if(!validationResult.success && validationResult.error.issues) {
      return { success: false, value: validationResult.error };
  }
  return {success: true, value: inputs};
};