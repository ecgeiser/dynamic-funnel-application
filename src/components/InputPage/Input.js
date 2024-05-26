const Input = ({ field, handleOnChange, fieldValues }) => {
    return (
        <>
            <label htmlFor={field.name}>{`${field.name}`}</label>
            <input
                name={field.name}
                type={field.type}
                onChange={handleOnChange}
                value={fieldValues[field.name] || ''}
            />
        </>
    );
};

export default Input;