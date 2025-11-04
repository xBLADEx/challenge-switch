import { Header } from '@/components/header';
import { ListDevices } from '@/components/list-devices';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-8">
        <ListDevices />
      </main>
    </>
  );
}
