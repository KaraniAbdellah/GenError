import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import addUser from "@/services/user/AddUser";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const SubmitUser = (e) => {
    e.preventDefault();
    const data: { name: string; email: string } = {
      name,
      email,
    };
    addUser(data);
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
          <h1 className="text-2xl font-bold">Open The Doot By :)</h1>
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
        <Field>
          <Button className="cursor-pointer" variant="outline" type="button">
            <FaGoogle />
            with Google
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
