const DisplayPage = ({ fieldValues }) => {
    const isEmpty = Object.keys(fieldValues).length === 0;
    
    return (
        <div className='display-content'>
        {isEmpty ? (
            <div>No form data entered.</div>
        ) : (
            Object.keys(fieldValues).map(key => (
                <div key={key}>
                {`${key}: ${fieldValues[key]}`}
                </div>
            ))
        )}
        </div>

    );
};

export default DisplayPage;