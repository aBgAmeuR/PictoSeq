import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session'
import { Button, Link, User } from "@nextui-org/react";
import { Plus } from 'lucide-react'

export default async function ProjectsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <header className='bg-background text-default-900 w-full h-20 flex flex-row px-12 items-center justify-between'>
        <Image src="/logo.png" alt="PictoSeq" width={150} height={60} />
        <User
          avatarProps={{
            src: user?.image as string,
          }}
          name={user?.name}
          description={(
            <Link href={`https://github.com/${user.login}`} size="sm" isExternal>
              @{user.login}
            </Link>
          )}
        />
      </header>
      <div className='h-[1px] w-full'></div>
      <main className='bg-background text-default-900 h-full pt-10 px-12'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>Mes séquentiels</h1>
          <Button color="primary" startContent={<Plus />}>Nouveau Séquentiel</Button>
        </div>
      </main>
    </>

  )
}
