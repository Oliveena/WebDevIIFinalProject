import { useState } from 'react';
import {
  TextField, Button, MenuItem, Box, Typography
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const categories = ['Food', 'Clothes', 'Transport', 'Rent', 'Utilities'];

export default function AddExpenseForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    date: dayjs(),
  });

  const handleChange = (field) => (event) => {
    const value = field === 'date' ? event : event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // reusable input style for form fields
  const inputStyle = {
  backgroundColor: '#ffffff',
  color: '#000',
};

// adding a new expense
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      date: formData.date.format('YYYY-MM-DD'),
      amount: parseFloat(formData.amount),
    };
    onAdd(newExpense);
    setFormData({ name: '', amount: '', category: '', date: dayjs() });
  };

  return (
  <Box className="bg-[#000814] text-white rounded-3xl p-10 mt-20 text-center">
  <Typography variant="h4" fontWeight="bold" className="mb-2 p-5">
    Add a New Expense
  </Typography>
  <Typography variant="body1" className="mb-4 opacity-80 p-5">
    Track your budget by logging every purchase as it happens.
  </Typography>
  <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* Row 1: Name, Amount */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <TextField
        label="Name"
        value={formData.name}
        onChange={handleChange('name')}
        required
        size="small"
        variant="outlined"
        InputProps={{ style: inputStyle }}
      />
      <TextField
        label="Amount"
        value={formData.amount}
        onChange={handleChange('amount')}
        required
        size="small"
        variant="outlined"
        type="number"
        InputProps={{ style: inputStyle }}
      />
    </Box>

    {/* Row 2: Category, Date, Button */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        select
        label="Category"
        value={formData.category}
        onChange={handleChange('category')}
        required
        size="small"
        variant="outlined"
        InputProps={{ style: inputStyle }}
        sx={{ minWidth: 160 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      <DateTimePicker
        label="Date"
        value={formData.date}
        onChange={handleChange('date')}
        slotProps={{
          textField: {
            size: 'small',
            InputProps: { style: inputStyle },
          },
        }}
      />

      <Button variant="contained" color="secondary" type="submit">
        Add
      </Button>
    </Box>
  </Box>
</Box>
  );
}