import { Mail, Phone } from 'react-feather';

export default function Footer() {
  return (
    <footer>
      <a href="mailto:info@katemartintherapy.com"><Mail /><span>info@katemartintherapy.com</span></a><br />
      <a href="tel:5555555555"><Phone /><span>646-397-1025</span></a><br />
    </footer>

  );
}