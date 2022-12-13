import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import Head from 'next/head';
import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

const MyCalendar = (props: any) => {
  
} 

export default function Home() {
  return (
    <div>
      <Head>
        <title>my event calendar</title>
      </Head>

      <div>
        <Calendar
        localizer={localizer}
        // events={""}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        />
      </div>
    </div>
  )
}
