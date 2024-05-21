import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Roles({
  selected = "member",
  setSelected,
}: {
  selected: string
  setSelected: (value: string) => void
}) {
  const roles = ["member", "admin", "manager"]

  return (
    <Select defaultValue={selected} onValueChange={setSelected}>
      <SelectTrigger className="w-full capitalize">
        <SelectValue placeholder="Select Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {roles.map((role) => (
            <SelectItem key={role} value={role} className="capitalize">
              {role}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
