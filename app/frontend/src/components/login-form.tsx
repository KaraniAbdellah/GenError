import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import addUser from "@/services/user/AddUser";
import { toast } from "react-hot-toast";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import GooglePayload from "@/types/GooglePayload";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const SubmitUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: { name: string; email: string } = {
      name,
      email,
    };
    const isUserAdded = await addUser(data);
    if (isUserAdded) {
      window.location.href="/";
      console.log("We Must Navigate to /");
    } else {
      toast.error("Something Wrong Try Again Please", {
        duration: 2000,
        position: "bottom-right",
      });
    }
  };

  const SubmitUserWithGoogle = async (credentiels: CredentialResponse) => {
    if (!credentiels.credential) return;

    const decoded = jwtDecode<GooglePayload>(credentiels.credential);
    if (!decoded) {
      toast.error("Something Error, Please Refresh The Page");
      return;
    }
    const data = { name: decoded?.name, email: decoded?.email };
    const isUserAdded = await addUser(data);
    if (isUserAdded) {
      window.location.href="/";
      console.log("We Must Navigate to /");
    } else
      toast.error("Something Wrong Try Again Please", {
        duration: 2000,
        position: "bottom-right",
      });
  };

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <form
      onSubmit={(e) => SubmitUser(e)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Open The Door By :)</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Entering your email and your name
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="name"
            placeholder="John Deo"
            required
            value={name}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
          />
        </Field>
        <Field>
          <Button className="cursor-pointer" type="submit">
            Open The Door
          </Button>
        </Field>
        <FieldSeparator>Or Open it</FieldSeparator>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={(credentialResponse: CredentialResponse) =>
              SubmitUserWithGoogle(credentialResponse)
            }
            onError={() => {
              toast.error("Can't Login, Try Again Please!");
            }}
          />
        </GoogleOAuthProvider>
      </FieldGroup>
    </form>
  );
}
