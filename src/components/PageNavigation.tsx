const PageNavigation = ({ pageNum, setPageNum, maxPages }: { pageNum: number, setPageNum: setPageNum, maxPages: number }) => {
    return (
        <div className="page-navigation">
            <button
                onClick={() => setPageNum(pageNum - 1)}
                disabled={pageNum === 0}
            >
                {`<`}
            </button>
            <button
                onClick={() => setPageNum(pageNum + 1)}
                disabled={pageNum === maxPages}
            >
                {`>`}
            </button>
        </div>
    )
};

export default PageNavigation;
