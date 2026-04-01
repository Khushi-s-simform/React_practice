import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function FormExample() {
  async function handleSubmit(formData) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(formData.get("name"));
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Enter name" />
      <SubmitButton />
    </form>
  );
}