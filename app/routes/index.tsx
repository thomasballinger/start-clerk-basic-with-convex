import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}))
  const { data: authData } = useSuspenseQuery(
    convexQuery(api.tasks.getAuth, {}),
  )
  return (
    <div className="p-2">
      <h1>Hello Clerk!</h1>
      <code>{JSON.stringify(authData)}</code>
      <code>{JSON.stringify(data)}</code>
    </div>
  )
}
