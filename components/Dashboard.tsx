import { Book, Calendar, HomeIcon, Paperclip, Settings, UsersIcon, Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BiSupport } from 'react-icons/bi'

const Dashboard = () => {
  return (
    <div className='h-full'>
        <div className="hidden h-full border-r bg-white dark:bg-black rounded-2xl lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              {/* <Package2Icon className="h-6 w-6 text-neutral-100" /> */}
              <span className="text-neutral-900 dark:text-neutral-100">Stranded.io</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 py-5 text-sm font-medium">
                <h1 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">MENU</h1>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <Book className="h-4 w-4" />
                Courses
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <Calendar className="h-4 w-4" />
                Calendar
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <Paperclip className="h-4 w-4" />
                Resources
              </Link>
            </nav>

            <nav className="grid items-start px-4 py-5 text-sm font-medium">
                <h1 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">OTHERS</h1>  
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <Wallet className="h-4 w-4" />
                Payments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Community
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-neutral-900 dark:text-neutral-100 transition-all hover:text-primary"
                prefetch={false}
              >
                <BiSupport className="h-4 w-4" />
                Help
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
