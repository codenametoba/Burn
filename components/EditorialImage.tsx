import Image from "next/image";

export function EditorialImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative min-h-[26rem] overflow-hidden border border-[#B48A52]/20 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
    </div>
  );
}
