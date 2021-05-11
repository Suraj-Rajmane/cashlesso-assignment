import React from 'react';
import './Pagination.css';

const Pagination = ({ dataArray, entries, pageNumber, setData, setPageNumber}) => {

    const MAX_PAGE_NUMBER = Math.ceil(dataArray.length / entries);

    const pageNumberArray = new Array(MAX_PAGE_NUMBER)
      .fill(1)
      .map((_, index) => index + 1);
  
    const handlePrevious = () => {
      setPageNumber(pageNumber <= 1 ? pageNumber : pageNumber - 1);
    };
  
    const handleNext = () => {
      setPageNumber(
        pageNumber >= Math.ceil(dataArray.length / entries)
          ? pageNumber
          : pageNumber + 1
      );
    };


    return (
        <div className="pagination">
            <div className="flex-button-container">
            <button disabled={pageNumber === 1} onClick={handlePrevious}>
                Previous
            </button>
            <button
                disabled={pageNumber === Math.ceil(dataArray.length / entries)}
                onClick={handleNext}
            >
                Next
            </button>
            <>
                {pageNumberArray.map((item, index) => (
                    <button key={index} onClick={() => {
                        setPageNumber(item)
                        const paginatedData = (page, limit) => {
                            const startIndex = (page - 1) * limit;
                            const endIndex = startIndex + limit;
                            return dataArray.slice(startIndex, endIndex);
                          };
                
                          const paginatedDataArray = paginatedData(pageNumber, entries);
                
                          setData(paginatedDataArray);
                    }}>
                        {item}
                    </button>
                ))}
            </>
            </div>
            
        </div>
    );
};

export default Pagination;