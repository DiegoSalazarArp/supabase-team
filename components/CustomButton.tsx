import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"

export default function CustomButton({
  label,
  variant = "default",
  loading,
  onClick,
}: {
  label: string
  variant?: any
  loading: boolean
  onClick: () => void
}) {
  if (loading)
    return (
      <Button variant={"outline"}>
        <Loader2 className="animate-spin" />
      </Button>
    )

  return (
    <Button variant={variant} onClick={() => onClick()}>
      {label}
    </Button>
  )
}
