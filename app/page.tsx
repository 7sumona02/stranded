'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/ui/toggle-mode"
import Dashboard from "@/components/Dashboard"
import { ChevronDown, Package2Icon, SearchIcon } from "lucide-react"
import DatePicker from "@/components/DatePicker"

interface CardData {
  id: string;
  title: string;
  description: string;
  progressValue: number;
  imageSrc: string; // Added image source to the interface
}

const cards: CardData[] = [
  { id: '1', title: 'Traveling', description: 'Education', progressValue: 33, imageSrc: '/t1.svg' },
  { id: '2', title: 'Planning', description: 'Education', progressValue: 50, imageSrc: '/t2.svg' },
  { id: '3', title: 'Meditation', description: 'Education', progressValue: 40, imageSrc: '/t3.svg' },
  // Add more cards as needed
];

export default function Page() {
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

  const handleLikeClick = (id: string) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked state for the specific card
    }));
  };

  return (
    <div className="grid min-h-screen w-full pl-5 overflow-hidden lg:grid-cols-[280px_1fr] bg-neutral-100 dark:bg-neutral-800 select-none">
      <div className="py-5">
      <Dashboard />
      </div>
      <div className="flex flex-col">
        {/* <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex md:justify-between md:items-end items-start">
          <h1 className="text-3xl font-semibold max- w-[20vw]">Welcome back, Sumona! 👋</h1>
          <Badge className="bg-white text-neutral-500 shadow-sm font-semibold ml-[42vw] md:ml-0">26, July 2024</Badge>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.id} className="max-w-xs shadow-sm">
          <img src={card.imageSrc} className="w-full h-44 object-cover rounded-t-xl" alt={card.title} />
          <CardHeader className="pb-2 relative">
            <div className="absolute top-9 right-5" onClick={() => handleLikeClick(card.id)}>
              <FontAwesomeIcon 
                icon={likedItems[card.id] ? solidHeart : regularHeart} 
                className="text-[#1865F2] text-xl" 
              />
            </div>
            <CardTitle className="text-xl">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardFooter className="pt-1">
            <Progress value={card.progressValue} />
          </CardFooter>
        </Card>
      ))}
    </div>
        </main> */}
        <div className="flex">
          <div className="w-2/3 py-5">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b dark:border-neutral-600 bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
          <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses" className="border-none shadow-none bg-white rounded-full pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" />
              </div>
            </form>
          </div>
          <div className="flex gap-4 md:ml-auto md:gap-2 lg:gap-2">
            <ModeToggle />
            
          </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              <div className="flex md:justify-between md:items-end items-start">
              <h1 className="text-3xl font-semibold max- w-[20vw]">Welcome back, Sumona! 👋</h1>
              <Badge className="bg-white text-neutral-500 shadow-sm font-semibold ml-[42vw] md:ml-0">26, July 2024</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          {cards.map((card) => (
            <Card key={card.id} className="max-w-xs shadow-sm">
              <img src={card.imageSrc} className="w-full h-44 object-cover rounded-t-xl" alt={card.title} />
              <CardHeader className="pb-2 relative">
                <div className="absolute top-9 right-5" onClick={() => handleLikeClick(card.id)}>
                  <FontAwesomeIcon 
                    icon={likedItems[card.id] ? solidHeart : regularHeart} 
                    className="text-[#1865F2] text-xl" 
                  />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-1">
                <Progress value={card.progressValue} />
              </CardFooter>
            </Card>
          ))}
        </div>
            </main>
          </div>
          <div className="w-1/3 p-4 bg-white dark:bg-neutral-600/10">
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <p className="font-semibold">Sumona</p>
              <p className="text-muted-foreground">sumona8@gmail.com</p>
            </div>
            <div>
            <SignedOut>
              <Button><SignInButton>Login</SignInButton></Button></SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
          </div>

          <div className="px-2 pt-5">
          <div className="px-4 py-2 rounded-xl bg-[#1865F2]">
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center">
                <p className="font-semibold text-neutral-200">Age</p>
                <p className="text-neutral-200">22</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-neutral-200">Grade</p>
                <p className="text-neutral-200">12th</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-neutral-200">Country</p>
                <p className="text-neutral-200">India</p>
              </div>
            </div>
          </div>
          </div>

          <div className="flex justify-center pt-6">
            <DatePicker />
          </div>

          <div className="flex flex-col justify-start pt-8 px-2">
            <p className="font-semibold">Reminders</p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="w-full py-2 text-white bg-[#1865F2] rounded-xl px-4 font-semibold">
                Reminder 1
              </div>
              <div className="w-full py-2 text-white bg-[#1865F2] rounded-xl px-4 font-semibold">
                Reminder 2
              </div> 
              <div className="w-full py-2 text-white bg-[#1865F2] rounded-xl px-4 font-semibold">
                Reminder 3
              </div>
            </div>
            <p className="pt-5 flex items-center justify-center gap-2 text-xs font-medium">Show All <ChevronDown className="w-4" /></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
