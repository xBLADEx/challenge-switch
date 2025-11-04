import { Header } from '@/components/header';
import devices from '@/data/devices.json';
// import categories from '@/data/categories.json';
import { Device } from '@/types/device';
import { Card } from '@/components/card';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="m-auto min-h-screen w-full max-w-7xl px-4">
          {(devices as Device[]).map(({ id, name, category, price, rating, description }) => (
            <Card
              key={id}
              id={id}
              name={name}
              title={name}
              category={category}
              price={price}
              rating={rating}
              description={description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
