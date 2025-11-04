import { Header } from '@/components/header';
import { ListDevice } from '@/components/list-device';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-8">
        <ListDevice />
      </main>
    </>
  );
}
