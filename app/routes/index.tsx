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
      <h1>Hello Clerk + Convex!</h1>
      <div>
      some data:<code>{JSON.stringify(data, null, 2)}</code>
      </div>
      <div>
        user from a Convex query:<code><pre>{JSON.stringify(authData, null, 2)}</pre></code>
      </div>
    </div>
  )
}
