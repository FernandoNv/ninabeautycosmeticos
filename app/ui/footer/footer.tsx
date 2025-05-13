import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-900 px-2 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center">
        <div>
          <Link href={"/"}>
            <Image
              className="border-2 border-pink-500"
              src="/nina-logo-small.png"
              alt="Logo Nina Beauty Cosméticos"
              width={150}
              height={150}
            ></Image>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Produtos</Link>
            </li>
            <li>
              Contato
              <address>
                <p>
                  <strong>Nina Beauty Cosméticos e Variedades</strong>
                </p>
                <p>
                  Rua Lino Teixeira, 156 - Jacaré Rio de Janeiro - RJ, CEP
                  20970-007
                </p>
                <Link
                  href="https://shopee.com.br/ninabeauty.cosmeticos"
                  target="_blank"
                  className="underline"
                >
                  Link para os produtos na shopee
                </Link>
              </address>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
