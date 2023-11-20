import Image from 'next/image'
import { MessagesSquare, Phone, Settings, Sun, Users2 } from 'lucide-react'
import styles from '/Sidebar.module.scss'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <div>
        <Link href="/friends">
          <Users2 />
        </Link>
        <Link href="/call">
          <Phone />
        </Link>
        <Link href="/chats">
          <MessagesSquare />
        </Link>
        <Link href="/settings">
          <Settings />
        </Link>
      </div>
      <Sun />
    </aside>
  )
}
