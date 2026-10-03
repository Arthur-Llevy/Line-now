import { ShoppingCart, Moon } from "lucide-react";

export default function Header() {
    return (
      <header className="h-16 flex items-center justify-between px-4 ">
        <div className="flex gap-2 items-center text-xl">
            <span className="bg-[#cec0ad] p-2 rounded-full text-2xl">ᨒ</span>
            <span>Line Now</span>
        </div>
        <div className="flex gap-4 items-center text-xl">
            <ShoppingCart color="#6c6159"/>
            <Moon color="#6c6159" className="border-2 rounded-full h-[34px] w-[34px] p-1 border-[#dcd5cb] pointer" />
        </div>  
      </header>
    );  
}