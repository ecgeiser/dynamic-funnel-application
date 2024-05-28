import { SetStateAction } from "react";

interface Field {
    name: string;
    type: 'string' | 'number' | 'date';
};

interface Page {
    fields: Field[];
};

interface Config {
    pages: Page[];
};

interface FieldValues {
    [key: string]: string;
}

type setPageNum = Dispatch<SetStateAction<number>>;
type handleFormChange = Dispatch<SetStateAction<ChangeEvent<HTMLInputElement>>>;
