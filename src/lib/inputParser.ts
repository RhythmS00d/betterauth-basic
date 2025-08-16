import { toast } from "sonner";
import { loginSchema } from "./validations/loginValidation";
import { registerSchema } from "./validations/registerValidation";
import * as z from "zod";

type InputParse = {
  type: "login" | "register";
  paramaters: {
    email: string;
    password: string;
    name?: string;
  };
};

export function inputParser(inputParameters: InputParse) {
  try {
    const schema =
      inputParameters.type === "login" ? loginSchema : registerSchema;
    schema.parse(inputParameters.paramaters);

    return "success"
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast.error(error.issues[0].message);
    }
  }
}
