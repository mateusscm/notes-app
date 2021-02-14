import { InputAlt } from "./styles";

function Input({ label, onChange, variant, fullWidth, errorMsg, ...props }) {
  return (
    <InputAlt>
      <InputAlt.Label>{label}</InputAlt.Label>
      {variant === "input" ? (
        <>
          <InputAlt.Normal onChange={onChange} fullWidth {...props} />
          {errorMsg !== "" && <InputAlt.Error>{errorMsg}</InputAlt.Error>}
        </>
      ) : (
        <>
          <InputAlt.Textarea onChange={onChange} fullWidth {...props} />
          {errorMsg !== "" && <InputAlt.Error>{errorMsg}</InputAlt.Error>}
        </>
      )}
    </InputAlt>
  );
}

export default Input;
