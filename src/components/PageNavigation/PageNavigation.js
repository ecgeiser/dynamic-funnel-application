import './PageNavigation.css';

const PageNavigation = ({ pageNum, setPageNum, maxPages }) => {
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
