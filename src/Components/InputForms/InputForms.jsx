import "../InputForms/InputForms.css"

// eslint-disable-next-line react/prop-types
function InputForms({ titulo, nome, type, descricao, }) {

  return (
    <>
      <div className="divisoria-label-input">
        <label className="label-input-forms" htmlFor={titulo}>
          {nome}
          <input className="input-forms" id={titulo} type={type} name={titulo} placeholder={descricao} />
        </label>
      </div>
    </>
  );
}

export default InputForms
