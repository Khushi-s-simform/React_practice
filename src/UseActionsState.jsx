import { useActionState, startTransition } from "react";

async function counterAction(prev, payload) {
  await new Promise(res => setTimeout(res, 1000));
  return prev + payload;
}

export default function UseAction() {
  const [count, dispatch, isPending] =
    useActionState(counterAction, 0);

  function handleClick() {
    startTransition(() => {
      dispatch(1);
    });
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>
        Add {isPending ? "⏳" : ""}
      </button>
    </div>
  );
}
