import { Mail, Phone, Facebook, Instagram } from 'react-feather';

export default function Footer() {
  return (
    <footer className="my-3 md:my-6">
      <div className="flex justify-center md:justify-normal space-x-3">
        <a className="flex space-x-1 md:space-x-3 mb-3" href="mailto:info@katemartintherapy.com" target="_blank">
        <Mail />
        <span className="ml-3">info@katemartintherapy.com</span>
      </a>
      <a className="flex space-x-1 md:space-x-3 mb-3" href="tel:6463971025">
        <Phone />
        <span>646-397-1025</span>
      </a>
      </div>
      <div className="flex justify-center md:justify-normal space-x-3">
      <a className="flex space-x-1 md:space-x-3" href="https://www.facebook.com/profile.php?id=100091974518354" target="_blank">
        <Facebook />
      </a>
      <a className="flex space-x-1 md:space-x-3" href="https://www.facebook.com/profile.php?id=100091974518354" target="_blank">
        <Instagram />
      </a>
      </div>
    </footer>

  );
}