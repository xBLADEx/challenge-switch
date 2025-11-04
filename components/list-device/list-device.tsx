import { Device } from '@/types/device';
import { Card } from '../card';
import devices from '@/data/devices.json';

export function ListDevice() {
  return (
    <div className="m-auto mt-8 grid min-h-screen w-full max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {(devices as Device[]).map(({ id, name, price, rating, description }) => (
        <Card
          key={id}
          id={id}
          name={name}
          title={name}
          price={price}
          rating={rating}
          description={description}
        />
      ))}
    </div>
  );
}
