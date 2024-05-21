"use client"

import { useState } from "react"
import New from "./New"
import { DataTable } from "../Datatable"
import { columns } from "./Members/Columns"

export default function Team() {
  const [members, setMembers] = useState<any>([
    {
      name: "John Doe",
      email: "jonhdoe@gmail.com",
      role: "admin",
      status: "active",
    },
    {
      name: "Mark Sinclair",
      email: "marksinclair@gmail.com",
      role: "member",
      status: "pending",
    },
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "manager",
      status: "removed",
    },
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "admin",
      status: "active",
    },
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "member",
      status: "pending",
    },
  ])

  return (
    <div className="grid gap-6 border rounded-lg shadow-lg px-5 py-4 w-full max-w-[800px]">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">Team</h1>
          <p>Invite new members to the team</p>
        </div>
        <New />
      </header>
      <main>
        <DataTable columns={columns} data={members} />
      </main>
    </div>
  )
}
