import { ChangeEvent, useState } from 'react';

const useFormState = () => {
    const [fieldValues, setFieldValues] = useState<FieldValues>({});

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = () => {
        // do nothing
    };

    return { fieldValues, handleFormChange, handleFormSubmit };
};

export default useFormState;