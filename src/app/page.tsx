import { Button } from '@nextui-org/button';
import { LoginBtn } from '@/components/login-btn';
import { getCurrentUser } from '@/lib/session';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default async function Home() {
  const user = await getCurrentUser();

  console.log(user);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background text-default-900">
      <h1>PictoSeq</h1>
      <div className="flex flex-col items-center justify-between">
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="secondary">Secondary</Button>
      </div>
      <LoginBtn />
      <p>{user?.name}</p>
      <ThemeSwitcher />
    </main>
  )
}
