export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      &copy; {year} FSD13. All rights reserved.
    </footer>
  );
}