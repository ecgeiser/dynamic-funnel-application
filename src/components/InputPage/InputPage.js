import './InputPage.css';
import Input from './Input';

const InputPage = ({ fields, handleOnChange, fieldValues }) => {
    return (
        fields.map(field => (
            <Input  key={field.name} field={field} handleOnChange={handleOnChange} fieldValues={fieldValues} />
        ))
    );
};

export default InputPage;