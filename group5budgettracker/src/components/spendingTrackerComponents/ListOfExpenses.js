import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';

export default function ListOfExpenses({ expenses }) {
  // Reverse expenses for LIFO (latest first)
  const rows = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((expense, index) => ({
      id: index, // unique id needed for DataGrid
      date: expense.date,
      name: expense.name,
      category: expense.category,
      amount: expense.amount,
    }));

  const columns = [
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
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
      sortable: false,
      filterable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 110,
      type: 'number',
      valueFormatter: (params) => {
        const val = params.value;
        return val !== undefined && val !== null ? `$${val.toFixed(2)}` : '';
      },
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        pagination
        disableSelectionOnClick
        autoHeight={false}
      />
    </div>
  );
}
