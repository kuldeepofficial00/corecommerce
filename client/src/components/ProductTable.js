import React from 'react';
import EmptyState from './EmptyState';
export default ({ products = [] }) => products.length === 0 ? <EmptyState /> : <table>...</table>;
