import Hero from "./Hero";
import Features from "./Features";
import { useTheme } from '@mui/material/styles';

export default function Home() {

const theme = useTheme();
const isDark = theme.palette.mode === 'dark';

  return (
    <div>
        <Hero />
        <Features />
    </div>
  );
}
