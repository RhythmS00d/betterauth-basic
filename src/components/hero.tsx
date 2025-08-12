"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TITLES = ["amazing", "new", "wonderful", "beautiful", "smart"];

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % TITLES.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="cursor-pointer">
              <Link href="/" className="flex items-center gap-2">
                Read documentation <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Butter Auth is</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {TITLES.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Butter Auth is a modern authentication and user management
              platform designed for developers who want to add secure,
              customizable login and identity features to their applications
              without building them from scratch.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="cursor-pointer">
              <Link href="/login" className="flex gap-2 items-center">
                Login here <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
