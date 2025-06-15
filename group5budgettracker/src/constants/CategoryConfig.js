import {
  Utensils, ShoppingBag, Bus, Home, Plug
} from 'lucide-react';

export const categoryColors = {
  Food: '#FF6384',
  Clothes: '#36A2EB',
  Transport: '#FFCE56',
  Rent: '#4BC0C0',
  Utilities: '#9966FF',
  Everything: '#8884d8',
};

export const ICON_SIZE = 16;

export const categoryIcons = {
  Food: <Utensils size={ICON_SIZE} />,
  Clothes: <ShoppingBag size={ICON_SIZE} />,
  Transport: <Bus size={ICON_SIZE} />,
  Rent: <Home size={ICON_SIZE} />,
  Utilities: <Plug size={ICON_SIZE} />,
};