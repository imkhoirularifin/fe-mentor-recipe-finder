import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  const { icon, iconAlt, title, description } = props;

  return (
    <div className="flex w-full flex-col items-start gap-250 lg:gap-300">
      <div className="bg-x-neutral-0 flex h-[60px] w-[60px] items-center justify-center rounded-md border border-x-neutral-200 shadow-md">
        <Image src={icon} alt={iconAlt} width={35} height={35} />
      </div>

      <div className="flex w-full flex-col gap-150">
        <h3 className="text-preset-3">{title}</h3>
        <p className="text-preset-6">{description}</p>
      </div>
    </div>
  );
}
