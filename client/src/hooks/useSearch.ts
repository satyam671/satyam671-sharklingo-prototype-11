import { useState, useMemo } from 'react';
import { BusinessTerm } from '../types';

export const useSearch = (terms: BusinessTerm[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredTerms = useMemo(() => {
    let filtered = terms;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(term =>
        term.term.toLowerCase().includes(query) ||
        term.simpleExplanation.toLowerCase().includes(query) ||
        term.businessDefinition.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(term => term.category === categoryFilter);
    }

    return filtered;
  }, [terms, searchQuery, categoryFilter]);

  return {
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    filteredTerms
  };
};
