import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh flex flex-col items-center justify-center">
      <a href="#">
        <Image
          src="/nina-logo.png"
          alt="Nina Beauty Cosmeticos logo"
          width={250}
          height={250}
          priority
        />
      </a>
      <a
        href="https://www.instagram.com/ninabeauty.cosmeticos/"
        target="_blank"
        rel="noopener noreferrer"
        className="pb-4"
      >
        @ninabeauty.cosmeticos
      </a>
      <a
        className="p-4 bg-primary rounded-2xl"
        href="https://shopee.com.br/ninabeauty.cosmeticos"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lista de Produtos na Shopee
      </a>
    </main>
  );
}
