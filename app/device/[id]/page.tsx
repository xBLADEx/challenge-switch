import { notFound } from 'next/navigation';
import devices from '@/data/devices.json';
import { Device } from '@/types/device';
import { DeviceDetails } from './device-details';

interface DevicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DevicePage({ params }: DevicePageProps) {
  const { id } = await params;
  const device = (devices as Device[]).find((d) => d.id === id);

  if (!device) {
    notFound();
  }

  return <DeviceDetails device={device} />;
}
