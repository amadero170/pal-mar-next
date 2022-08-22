import Image from "next/image";
import logoazul from "../public/imgs/logo-palmar-azul.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <Image
          alt="imagen"
          src={logoazul}
          placeholder="empty"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
      <div className="footer-2">
        <div className="footer-title">Contact Us</div>
        <div className="footer-contact">
          <div className="contact-icon">
            <span className="material-symbols-outlined">smartphone</span>
          </div>
          <div className="contact-data">33 3100 8114 </div>
        </div>
        <div className="footer-contact">
          <div className="contact-icon">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="contact-data">gonzalo@pal-mar.mx</div>
        </div>
        <div className="footer-social">
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
