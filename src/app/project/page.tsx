import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/session'
import { Button, Link, User } from "@nextui-org/react";
import { Plus } from 'lucide-react'
import { prisma } from '@/lib/prisma';
import { Sequentiel } from '@/components/sequentiel';

export default async function ProjectsPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/api/auth/signin');

  const sequentiels = await prisma.project.findMany({
    where: {
      userId: user.login
    }
  })

  return (
    <>
      <header className='bg-background text-default-900 w-full h-24 flex flex-row px-12 items-center justify-between'>
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
      <div className='mx-12'>
        <div className='h-[1px] border-none bg-[#5c5c5c] w-full'></div>
      </div>
      <main className='bg-background text-default-900 h-full pt-10 px-12' >
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>Mes séquentiels</h1>
          <Button color="primary" startContent={<Plus />}>Nouveau Séquentiel</Button>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-10'>
          {sequentiels.map((sequentiels) => (
            <Sequentiel key={sequentiels.id} {...sequentiels} />
          ))}
        </div>
      </main>
    </>

  )
}
