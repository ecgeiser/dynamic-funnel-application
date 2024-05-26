import { useState } from 'react';

const useFormState = () => {
    const [fieldValues, setFieldValues] = useState({});

    const handleFormChange = (e) => {
        setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = () => {
        // do nothing
    };

    return { fieldValues, handleFormChange, handleFormSubmit };
};

export default useFormState;