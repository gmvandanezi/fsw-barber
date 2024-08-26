import { Copyright } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex flex-row flex-nowrap justify-center gap-2 px-5 py-6 align-middle">
          <Copyright size={12} className="text-gray-400" />
          <p className="text-xs text-gray-400">
            2023 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
