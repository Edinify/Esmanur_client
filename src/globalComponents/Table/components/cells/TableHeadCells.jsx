import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import 'moment/locale/az';
 
 export const TableHeadCells = ({ week }) => {
    const dispatch = useDispatch()
    const {tableType} = useSelector(state=>state.tableType);
    const {weeksBetweenSelectedDates} = useSelector(state=>state.weeksBetweenSelectedDates);
    const {pageNumber} = useSelector(state=>state.pageNumber);
    const [selectedWeek, setSelectedWeek] = useState()
    const startWeek = new Date();
    startWeek.setDate(startWeek.getDate() - (startWeek.getDay() === 0 ? 7 : startWeek.getDay()) + 1)

    const [weekday, setWeekday] = useState(() => {
      switch(week) {
        case "B.e": 
          return startWeek.setDate(startWeek.getDate() + 0)
        case "Ç.a": 
          return startWeek.setDate(startWeek.getDate() + 1)
        case "Ç.": 
          return startWeek.setDate(startWeek.getDate() + 2)
        case "C.a": 
          return startWeek.setDate(startWeek.getDate() + 3)
        case "C.": 
          return startWeek.setDate(startWeek.getDate() + 4)
        case "Ş.": 
          return startWeek.setDate(startWeek.getDate() + 5)
        case "B.": 
          return startWeek.setDate(startWeek.getDate() + 6)
        default: 
          return ''
      }
    })

    useEffect(() => {
      if(weeksBetweenSelectedDates.length > 0 && pageNumber > 0) {
        setSelectedWeek(() => {
          switch(week) {
            case "B.e": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.monday
            case "Ç.a": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.tuesday
            case "Ç.": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.wednesday
            case "C.a": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.thursday
            case "C.": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.friday
            case "Ş.": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.saturday
            case "B.": 
              return weeksBetweenSelectedDates[pageNumber - 1].allWeekDays.sunday
            default: 
              return ''
          }
        })
      }
    }, [pageNumber])

    return(
      <th className="row">
        <span className="row-head">{week}</span>
        {tableType === 'current' &&
          <span className="row-date"> {weekday ? moment(weekday).locale('az').format( "DD MMMM") : ''}</span>
        }

        {tableType === 'main page' && !(pageNumber > 0) &&
          <span className="row-date"> {weekday ? moment(weekday).locale('az').format( "DD MMMM") : ''}</span>
        }

        {tableType === 'main page' && (pageNumber > 0) &&
          <span className="row-date"> {selectedWeek ? moment(new Date(selectedWeek)).locale('az').format( "DD MMMM") : ''}</span>
        }

        {tableType === 'temporary page' && (pageNumber > 0) &&
          <span className="row-date"> {selectedWeek ? moment(new Date(selectedWeek)).locale('az').format( "DD MMMM") : ''}</span>
        }
      </th>
    )
  
  };