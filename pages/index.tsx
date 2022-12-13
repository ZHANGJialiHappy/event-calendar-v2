import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const localizer = momentLocalizer(moment)

const MyCalendar = (props: any) => {
  
} 

export default function Home() {
  return (
    <div className={styles.container}>
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
