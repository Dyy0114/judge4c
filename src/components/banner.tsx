import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "lucide-react";

interface BannerProps {
  className?: string;
  link?: string;
  text?: string;
}

export function Banner({
  className,
  link = siteConfig.url.repo.github,
  text = "Star this project if you like it.",
  ...props
}: BannerProps) {
  return (
    <header
      {...props}
      className={cn("h-12 flex items-center justify-center bg-muted text-foreground", className)}
    >
      <a href={link} className="group flex justify-center text-sm">
        <span className="me-1 text-base leading-none">✨</span>
        {text}
        <ArrowRightIcon
          className="ms-2 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
          size={16}
          aria-hidden="true"
        />
      </a>
    </header>
  );
}
