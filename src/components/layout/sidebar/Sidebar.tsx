'use client'

import Image from 'next/image'
import { Sun } from 'lucide-react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { MENU } from '@/components/layout/sidebar/sidebar.data'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={45} height={45} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
          >
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={35} />
    </aside>
  )
}
