import { useFormState } from "react-dom";

async function formAction(prevState, formData) {
  const name = formData.get("name");

  if (!name) {
    return { error: "Name is required" };
  }

  return { success: `Hello, ${name}` };
}

export default function FormWithValidation() {
  const [state, formActionHandler] = useFormState(formAction, {});

  return (
    <form action={formActionHandler}>
      <input name="name" placeholder="Enter name" />

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}