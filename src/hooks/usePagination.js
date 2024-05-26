import { useState } from 'react';

const usePagination = () => {
    const [pageNum, setPageNum] = useState(0);

    return { pageNum, setPageNum };
};

export default usePagination;