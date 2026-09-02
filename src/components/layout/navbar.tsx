"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Jobs", href: "/jobs" },
  ];

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus first link when open
  useEffect(() => {
    if (isOpen) {
      // small timeout to wait for animation / element mount
      setTimeout(() => firstLinkRef.current?.focus(), 120);
    }
  }, [isOpen]);

  // framer-motion variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const drawerVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
    exit: { x: "-100%" },
  };

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-linkrow-secondary-bg backdrop-blur supports-[backdrop-filter]:bg-linkrow-secondary-bg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md">
            <Image src="/logo2.png" alt="Logo" width={34} height={34} />
          </div>
          <span className="text-xl font-semibold text-linkrow-primary-text">Al Mufawadh</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 text-1xl font-medium text-linkrow-badge-text hover:text-linkrow-primary-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="rounded-full bg-linkrow-primary-text px-6 py-6 text-linkrow-secondary-bg">
            Contact us
            {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-md hover:opacity-90 transition"
        >
          <Menu className="h-6 w-6 text-linkrow-primary-text" />
        </button>
      </nav>

      {/* Mobile drawer with framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu backdrop"
              onClick={() => setIsOpen(false)}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-50 h-screen w-80 overflow-auto border-r border-border/40 bg-linkrow-secondary-bg md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/40">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md">
                    <Image src="/logo2.png" alt="Logo" width={34} height={34} />
                  </div>
                  <span className="text-lg font-semibold text-linkrow-primary-text">Al Mufawadh</span>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center h-10 w-10 rounded-md hover:opacity-90 transition"
                >
                  <X className="h-6 w-6 text-linkrow-primary-text" />
                </button>
              </div>

              {/* Menu items (staggered) */}
              <motion.nav className="flex-1 overflow-y-auto">
                <motion.ul
                  className="flex flex-col p-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listVariants}
                >
                  {navItems.map((item, idx) => (
                    <motion.li key={item.href} variants={itemVariants} className="mb-0.5">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        ref={idx === 0 ? firstLinkRef : undefined}
                        className="block w-full py-3 text-base font-medium text-linkrow-badge-text hover:text-linkrow-primary-text transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>

              {/* Footer CTA */}
              <div className="p-6">
                <Button onClick={() => setIsOpen(false)} className="w-full rounded-full bg-linkrow-primary-text px-6 py-6 text-linkrow-secondary-bg">
                  Contact us
                  {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
