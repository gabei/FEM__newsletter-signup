import { z, ZodError, ZodIssueCode } from 'zod';


// zod validation of user data
const userSchema = z.object({
    name: z.string()
    .min(2, { message: "Name must be 2 or more characters" })
    .max(5, { message: "Name must be 20 characters or less" }),
    email: z.string().email()
})


// shape of the user data for return type
type userData = z.infer<typeof userSchema>;


function validateUser(user: userData): boolean | undefined {
    try 
    {
        if(userSchema.parse(user)){
            return true
        }
    }
    catch(error){
        if(error instanceof ZodError){
            throw new Error("ZOD returned an error during parsing:\n" + ZodIssueCode);
        } else {
            throw error;
        }
    }

    return false;
}


export default validateUser;