import { cva } from "class-variance-authority";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React from "react";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "text-white bg-[#000000]",
      Failed: "text-[#EC6A5B] bg-[#FDEFEE]",
      Pending: "text-[#E68F38] bg-[#FFF4EE]",
      InProgress: "text-[#008DFF] bg-[#E5F3FE]",
      Submitted: "text-[#6D3CFA] bg-[#EFEAFF]",
      InReview: "text-[#E6961F] bg-[#FCF4DB]",
      Success: "text-[#37C25C] bg-[#E1FAE8]",
      Expired: "text-[#787878] bg-[#F1F1F1]",
    },
    size: {
      default: "h-12",
      medium: "h-24",
      large: "h-52",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const iconMap = {
  default: "/icons/file.svg",
  Failed: "/icons/cross-small.svg",
  Pending: "/icons/pending.svg",
  InReview: "/icons/inreview.svg",
  InProgress: "/icons/inprogress.svg",
  Submitted: "/icons/submitted.svg",
  Success: "/icons/success.svg",
  Expired: "/icons/expired.svg",
} as const;

type IconMapKey = keyof typeof iconMap;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "default" | "medium" | "large";
  name?: string;
  variant?: IconMapKey;
}

const Button = ({ className, size = "default", name, variant = "default", ...props }: ButtonProps) => {
  return (
    <>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          className={twMerge(
            "rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center gap-2  font-semibold sm:text-xl h-10 sm:h-12 px-5 sm:w-auto",
            buttonVariants({ variant, size, className })
          )}

          {...props}
        >
          <Image
            className=""
            src={iconMap[variant]}
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
