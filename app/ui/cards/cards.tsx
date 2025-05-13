"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link";

export default function Cards() {
  const list = [
    {
      title: "Refil desodorante corporal Natura HOMEM 100ml",
      img: "/products/natura-homem.jpg",
      price: "R$34,00",
      url: "https://shopee.com.br/refil-desodorante-corporal-Natura-HOMEM-100ml-i.354982204.21799721872",
    },
    {
      title: "Kit Natura Ilía Completa (2 itens)",
      img: "/products/kit-natura-Ilia.jpg",
      price: "R$138,90",
      url: "https://shopee.com.br/Kit-Natura-Il%C3%ADa-Completa-(2-itens)-i.354982204.23793934483",
    },
    {
      title: "Presente Natura Tododia Flores (4 produtos)",
      img: "/products/natura-tododia-flores.jpg",
      price: "R$158.90",
      url: "https://shopee.com.br/Presente-Natura-Tododia-Flores-(4-produtos)-i.354982204.22198459794",
    },
    // {
    //   title: "Lemon",
    //   img: "https://www.heroui.com/images/fruit-4.jpeg",
    //   price: "$5.30",
    // },
    // {
    //   title: "Avocado",
    //   img: "https://www.heroui.com/images/fruit-5.jpeg",
    //   price: "$15.70",
    // },
    // {
    //   title: "Lemon 2",
    //   img: "https://www.heroui.com/images/fruit-6.jpeg",
    //   price: "$8.00",
    // },
    // {
    //   title: "Banana",
    //   img: "https://www.heroui.com/images/fruit-7.jpeg",
    //   price: "$7.50",
    // },
    // {
    //   title: "Watermelon",
    //   img: "https://www.heroui.com/images/fruit-8.jpeg",
    //   price: "$12.20",
    // },
    // {
    //   title: "Watermelon 2",
    //   img: "https://www.heroui.com/images/fruit-8.jpeg",
    //   price: "$15.20",
    // },
  ];

  return (
    <div className="gap-12 grid grid-cols-1 lg:grid-cols-3 px-6 py-2">
      {list.map((item, index) => (
        <Card key={index} shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Link href={item.url} target="_blank">
              <Image
                alt={item.title}
                className="w-full object-cover h-[150px]"
                radius="none"
                shadow="sm"
                src={item.img}
                height={350}
                width="100%"
              />
            </Link>
          </CardBody>
          <CardBody>
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardBody>
          <CardFooter className="text-small justify-center">
            <Link href={item.url} target="_blank">
              <Button size="lg" color="primary">
                comprar
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
