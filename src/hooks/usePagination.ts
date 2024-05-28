import { useState } from 'react';
import { setPageNum } from '../../global';

const usePagination = (): { pageNum: number; setPageNum: setPageNum } => {
    const [pageNum, setPageNum] = useState<number>(0);

    return { pageNum, setPageNum };
};

export default usePagination;