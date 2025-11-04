import { Search } from '@/components/controls/search';
import { Device } from '@/types/device';

interface ControlsProps {
  setFilteredDevices: (devices: Device[]) => void;
  devices: Device[];
  allDevices: Device[];
}

export function Controls({ setFilteredDevices, allDevices, devices }: ControlsProps) {
  return (
    <div className="m-auto mt-8 w-full max-w-7xl px-4">
      <div className="flex items-center gap-4 rounded-md bg-zinc-900 p-4">
        <h1 className="shrink-0 text-2xl font-bold">Device Store</h1>
        <Search setFilteredDevices={setFilteredDevices} devices={devices} allDevices={allDevices} />
      </div>
    </div>
  );
}
