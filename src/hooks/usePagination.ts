import { Dispatch, SetStateAction, useState } from 'react';

const usePagination = (): { pageNum: number; setPageNum: setPageNum } => {
    const [pageNum, setPageNum] = useState<number>(0);

    return { pageNum, setPageNum };
};

export default usePagination;