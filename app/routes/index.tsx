import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}))
  console.log(data);
  return (
    <div className="p-2">
      <h1>Hello Clerk + Convex!</h1>
    </div>
  )
}
