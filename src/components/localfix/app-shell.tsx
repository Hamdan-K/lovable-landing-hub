import { Link, useRouterState } from "@tanstack/react-router";
import { ClipboardList, Home, Search, Settings, UserRound, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const items = [
  { label: "Overview", to: "/dashboard", icon: Home },
  { label: "My repairs", to: "/repairs", icon: ClipboardList },
  { label: "Find a pro", to: "/professionals", icon: Search },
  { label: "Pro workspace", to: "/pro", icon: Wrench },
];

export function AppShell({ children, title, eyebrow }: { children: React.ReactNode; title: string; eyebrow?: string }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <div className="min-h-screen bg-muted/35"><aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-background px-5 py-6 lg:block"><Link to="/"><Logo /></Link><nav className="mt-12 space-y-1">{items.map(({label,to,icon:Icon}) => <Link key={to} to={to} className={cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", path === to && "bg-primary/10 text-primary")}><Icon className="size-4" />{label}</Link>)}</nav><div className="absolute inset-x-5 bottom-6 border-t pt-5"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-secondary font-bold text-primary">AK</span><div><p className="text-sm font-bold">Alex Kim</p><p className="text-xs text-muted-foreground">Customer</p></div><Settings className="ml-auto size-4 text-muted-foreground" /></div></div></aside><main className="pb-24 lg:ml-64 lg:pb-0"><header className="flex h-20 items-center justify-between border-b bg-background px-5 lg:px-10"><div><p className="text-xs font-bold uppercase text-primary">{eyebrow}</p><h1 className="font-display text-xl font-bold sm:text-2xl">{title}</h1></div><Button asChild><Link to="/diagnose"><Wrench />Start repair</Link></Button></header><div className="p-5 lg:p-10">{children}</div></main><nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t bg-background/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">{items.map(({label,to,icon:Icon}) => <Link key={to} to={to} className={cn("flex h-16 flex-col items-center justify-center gap-1 text-[10px] font-semibold text-muted-foreground", path === to && "text-primary")}><Icon className="size-5" />{label.replace(" workspace","")}</Link>)}</nav></div>;
}
