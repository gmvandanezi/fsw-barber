import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex items-center gap-3 border-b border-solid p-5">
          <Avatar>
            <AvatarImage src="https://plus.unsplash.com/premium_vector-1719490075178-2d646661a17f?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Avatar>
          <div>
            <p className="font-bold">Guilherme Vandanezi</p>
            <p className="text-xs">guilherme@vandanezi.io</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          {quickSearchOptions.map((option, index) => (
            <Button key={index} className="justify-start gap-2" variant="ghost">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={18}
                height={18}
              />
              {option.title}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-2 py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </>
  )
}

export default SidebarSheet
