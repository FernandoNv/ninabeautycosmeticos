import Image from "next/image";
import { Button } from "@heroui/button";

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
        href="https://shopee.com.br/ninabeauty.cosmeticos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="primary" size="lg" radius="sm">
          Lista de Produtos na Shopee
        </Button>
      </a>
    </main>
  );
}
