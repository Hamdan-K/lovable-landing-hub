import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <div className={cn("inline-flex items-center gap-2 font-display text-lg font-bold", inverse && "text-primary-foreground")}><span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"><Wrench className="size-4" /></span><span>local<span className="text-primary">Fix</span></span></div>;
}
