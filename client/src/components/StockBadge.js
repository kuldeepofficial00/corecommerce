import React from 'react';
export default ({ qty }) => <span className={`badge ${qty > 10 ? 'in-stock' : 'low-stock'}`}>{qty > 10 ? 'Available' : 'Reorder Needed'}</span>;
