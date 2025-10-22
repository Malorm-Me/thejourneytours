import { destinations } from "@/lib/destinations"
import DestinationDetailClientPage from "./client-page"

export function generateStaticParams() {
  return destinations.map((destination) => ({
    id:destination.id,
  }))
}

export default async function DestinationDetailPage({ params }: { params: { id: string } }) {
  // Ensure params is fully resolved before sending to the client
  const plainParams = await Promise.resolve(params)

  return <DestinationDetailClientPage params={plainParams} />
}

