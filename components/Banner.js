import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col gap-8 items-center p-8">
      <h1 className="text-2xl font-bold">ejercicio-practico-git</h1>
      <Image
        src="/git-github.webp"
        alt="git/github logo"
        width={360}
        height={76}
        priority
      />
    </div>
  );
}
