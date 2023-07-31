import { useState } from "react"

export default function Calendar(){
  const [currentYear, setCorrentYear] = useState(2023)

  const month = [
    "Januery",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return(
    <h1>Calendário</h1>
  )
}