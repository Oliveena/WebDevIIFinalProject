import React from 'react';
import { Select, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { categoryColors, categoryIcons } from '../../constants/CategoryConfig';
const categories = ['Everything', 'Food', 'Clothes', 'Transport', 'Rent', 'Utilities'];

export default function CategorySelect({ selectedCategory, onChange }) {
  return (
    <Select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      displayEmpty
      renderValue={(selected) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: categoryColors[selected] }}>
          {categoryIcons[selected]}
          {selected}
        </div>
      )}
    >
      {categories.map((category) => (
       <MenuItem
  key={category}
  value={category}
  sx={{ color: categoryColors[category], display: 'flex', alignItems: 'center', gap: 1 }}
>
  <ListItemIcon>{categoryIcons[category]}</ListItemIcon>
  <ListItemText primary={category} />
</MenuItem>

      ))}
    </Select>
  );
}
