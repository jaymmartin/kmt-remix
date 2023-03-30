import { Mail, Phone } from 'react-feather';

export default function Footer() {
  return (
    <footer className="my-3 md:my-6">
      <a className="flex space-x-1 md:space-x-3 mb-3" href="mailto:info@katemartintherapy.com">
        <Mail />
        <span className="ml-3">info@katemartintherapy.com</span>
      </a>
      <a className="flex space-x-1 md:space-x-3" href="tel:5555555555">
        <Phone />
        <span>646-397-1025</span>
      </a>
    </footer>

  );
}