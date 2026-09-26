import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function PublicHeader() {
  return <header className="absolute inset-x-0 top-0 z-30"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Link to="/" aria-label="localFix home"><Logo /></Link><nav className="hidden items-center gap-8 text-sm font-semibold md:flex"><Link to="/professionals">Find a pro</Link><Link to="/guide">Repair guides</Link><Link to="/dashboard">My repairs</Link></nav><div className="hidden gap-2 md:flex"><Button asChild variant="ghost"><Link to="/auth">Sign in</Link></Button><Button asChild><Link to="/diagnose">Start a repair</Link></Button></div><Button className="md:hidden" variant="outline" size="icon" aria-label="Open menu"><Menu /></Button></div></header>;
}
