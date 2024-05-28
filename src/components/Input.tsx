import { Field, handleFormChange, FieldValues } from "../../global";

const Input = ({ field, handleOnChange, fieldValues }: { field: Field, handleOnChange: handleFormChange, fieldValues: FieldValues }) => {
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