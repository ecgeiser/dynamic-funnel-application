import { Field, FieldValues, handleFormChange } from '../../global';
import Input from './Input';

const InputPage = ({ fields, handleOnChange, fieldValues }: { fields: Array<Field>, handleOnChange: handleFormChange, fieldValues: FieldValues }) => {
    return (
        fields.map((field) => (
            <Input  key={field.name} field={field} handleOnChange={handleOnChange} fieldValues={fieldValues} />
        ))
    );
};

export default InputPage;