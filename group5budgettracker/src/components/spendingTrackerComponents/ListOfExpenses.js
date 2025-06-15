import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';

export default function ListOfExpenses({ expenses: initialExpenses }) {
  const [expenses, setExpenses] = useState(initialExpenses);

  // Convert to DataGrid-compatible rows
  const rows = expenses
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((expense, index) => ({
      id: index, // TODO: Replace with real unique ID from backend if available
      ...expense,
      amount: Number(expense.amount)
    }));

 const handleEdit = ({ id, field, value }) => {
  setExpenses((prev) =>
    prev.map((expense, index) =>
      index === id
        ? {
            ...expense,
            [field]: field === 'amount' ? Number(value) : value,
          }
        : expense
    )
  );

    // TODO: API call to update expense, e.g.
    // fetch(`/api/expenses/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ [field]: value }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((_, index) => index !== id));

    // TODO: API call to delete expense
    // fetch(`/api/expenses/${id}`, { method: 'DELETE' });
  };

  const columns = [
    { field: 'date', headerName: 'Date', width: 120, editable: true },
    { field: 'name', headerName: 'Name', flex: 1, editable: true },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Food', 'Clothes', 'Transport', 'Rent', 'Utilities'],
      renderCell: (params) => {
        const category = params.value;
        return (
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            fontWeight="bold"
            color={categoryColors[category] || 'black'}
          >
            {categoryIcons[category]} {category}
          </Box>
        );
      },
    },
{
  field: 'amount',
  headerName: 'Price',
  width: 120,
  editable: true, // enable editing
  renderCell: (params) => {
    if (params.value === null || params.value === undefined) return '';
    return `$${Number(params.value).toFixed(2)}`;
  },
  renderEditCell: (params) => {
    return (
      <input
        type="number"
        step="0.01"
        value={params.value}
        onChange={(e) => {
          params.api.setEditCellValue({ id: params.id, field: 'amount', value: e.target.value }, e);
        }}
        style={{ width: '100%', boxSizing: 'border-box' }}
      />
    );
  },
},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <button
          onClick={() => handleDelete(params.id)}
          className="text-red-600 font-semibold hover:underline"
        >
          Delete
        </button>
      ),
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        pagination
        disableSelectionOnClick
        onCellEditCommit={handleEdit}
      />
    </div>
  );
}
