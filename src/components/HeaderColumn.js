const HeaderColumn = ({ id, label, sortBy, sortOrder, handleSortChange }) => {
  return (
    <th onClick={() => handleSortChange(id)}>
      {label} {id === sortBy && (sortOrder === 'asc' ? '▲' : '▼')}
    </th>
  );
};

export { HeaderColumn };
