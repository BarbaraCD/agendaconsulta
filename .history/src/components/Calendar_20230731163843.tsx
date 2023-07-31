import moment from "moment"
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

  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
  })

  return(
    <h1>Calendário</h1>
  )
}

function MonthCard(props){
  return
}