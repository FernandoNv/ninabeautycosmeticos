"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Input,
} from "@heroui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SearchProps = {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  props?: [key: string];
};

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: SearchProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Início", "Produtos", "Sobre nós"];

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        height={150}
        isBlurred={false}
        className="sm:border-b-2 sm:border-pink-600"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            className="cursor-pointer"
            icon={<Bars3Icon />}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir menu"}
          />
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarBrand>
            <Link href={"/"}>
              <Image
                src="/nina-logo-small.png"
                alt="Logo Nina Beauty Cosméticos"
                width={150}
                height={150}
              ></Image>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            {menuItems.map((menuItem) => (
              <NavbarItem key={menuItem}>
                <Link color="foreground" href="#">
                  {menuItem}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "hidden sm:block max-w-[15rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Faça a sua busca..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              {/* <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem> */}
              <DropdownItem key="inicio">Inicio</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="sm:hidden p-2 pr-3 border-b-2 border-pink-600">
        <Input
          classNames={{
            base: "w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Faça a sua busca..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
    </>
  );
}
