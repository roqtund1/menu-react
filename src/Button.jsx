export default function Button({text, func}) {
  return (
    <button onClick={() => func(text)} className="btn">
      {text}
    </button>
  );
}
