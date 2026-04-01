import { useFormState, useFormStatus } from "react-dom";
 
/* -------------------- SERVER ACTION -------------------- */
async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
 
  // simulate API delay
  await new Promise((res) => setTimeout(res, 1500));
 
  // validation
  if (!email || !email.includes("@")) {
    return { error: "Invalid email" };
  }
 
  if (!password || password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }
 
  return { success: "Login successful 🎉" };
}
 
/* -------------------- SUBMIT BUTTON -------------------- */
function SubmitButton() {
  const { pending } = useFormStatus();
 
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
 
/* -------------------- MAIN COMPONENT -------------------- */
export default function UseFormStateExample() {
  const [state, formAction] = useFormState(loginAction, {});
 
  return (
    <form
      action={formAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "250px",
      }}
    >
      <h2>Login</h2>
 
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        className="border border-black px-2 rounded-xl"
      />
 
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className="border border-black px-2 rounded-xl"
      />
 
      {/* Error */}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
 
      {/* Success */}
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}
 
      <SubmitButton />
    </form>
  );
}
 
 