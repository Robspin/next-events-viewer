import EventsTable, { Event } from '@/components/events-table'
import { unstable_noStore } from 'next/cache'

const getEvents = async (): Promise<Event[] | undefined> => {
    unstable_noStore()
    try {
        return await (await fetch(`${process.env.DENO_EVENTS_API_URL}/events`, { headers: { 'Authorization': process.env.DENO_EVENTS_API_TOKEN ?? '' }})).json() as Event[]
    } catch (e) {
        console.error(e)
    }
}

export default async function Page() {
    const events = await getEvents() ?? []

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <EventsTable events={events} />
    </main>
  )
}
