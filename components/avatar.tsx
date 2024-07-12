import Image from "next/image";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author?.node?.name || null;
  const avatarUrl = author?.node?.avatar.url ? author.node.avatar.url : "";

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={avatarUrl}
          fill
          sizes="auto"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}