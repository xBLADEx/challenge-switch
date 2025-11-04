import { Device } from '@/types/device';
import { Card } from '../card';

interface ListDevicesProps {
  devices: Device[];
}

export function ListDevices({ devices }: ListDevicesProps) {
  return (
    <div className="m-auto mt-8 grid w-full max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {devices.map(({ id, name, category, price, rating, description }) => (
        <Card
          key={id}
          id={id}
          name={name}
          title={name}
          price={price}
          rating={rating}
          category={category}
          description={description}
        />
      ))}
    </div>
  );
}
