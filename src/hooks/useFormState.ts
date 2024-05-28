import { ChangeEvent, useState } from 'react';
import { FieldValues } from '../../global';

const useFormState = () => {
    const [fieldValues, setFieldValues] = useState<FieldValues>({});

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });

        // const { name, value, type, checked } = e.target;
        // setFieldValues({ ...fieldValues, [name]: type === 'checkbox' ? checked : value });
    };

    const handleFormSubmit = () => {
        // form submission out of assingment scope
    };

    return { fieldValues, handleFormChange, handleFormSubmit };
};

export default useFormState;