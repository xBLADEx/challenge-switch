import { notFound } from 'next/navigation';
import devices from '@/data/devices.json';
import { Device } from '@/types/device';
import { DeviceDetails } from './device-details';
import type { Metadata } from 'next';

interface DevicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: DevicePageProps): Promise<Metadata> {
  const { id } = await params;
  const device = (devices as Device[]).find((d) => d.id === id);

  if (!device) {
    return {
      title: 'Device Not Found',
      description: 'The requested device could not be found.',
    };
  }

  return {
    title: `${device.name} - Switch Catalog`,
    description: device.description,
    openGraph: {
      title: device.name,
      description: device.description,
      type: 'website',
    },
  };
}

export default async function DevicePage({ params }: DevicePageProps) {
  const { id } = await params;
  const device = (devices as Device[]).find((d) => d.id === id);

  if (!device) {
    notFound();
  }

  return <DeviceDetails device={device} />;
}
