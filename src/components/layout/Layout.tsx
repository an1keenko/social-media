import { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <main>
      <Sidebar />
      <section>{children}</section>
    </main>
  )
}
