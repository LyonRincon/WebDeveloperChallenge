const Paging = ({ currentPage, totalPages, changePage }) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
          style={{
            margin: '5px',
            fontWeight: pageNumber === currentPage ? 'bold' : 'normal',
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export { Paging };
