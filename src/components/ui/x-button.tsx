import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "bg-x-neutral-900 text-x-neutral-0 px-200 py-150 hover:cursor-pointer",
  {
    variants: {
      variant: {
        normal:
          "text-x-neutral-0 rounded-10 px-400 py-200 font-nunito font-bold text-xl",
        small:
          "py-150 px-200 text-x-neutral-0 rounded-10 font-nunito font-bold text-md",
        rounded:
          "py-150 px-400 font-nunito-sans text-base font-bold rounded-full",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function XButton({
  children,
  variant,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  );
}
