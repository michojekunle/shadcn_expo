import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  function getFallbackFromName(name: string) {
    const [ first, last ] = name.split(' ');
    return first.charAt(0) + last.charAt(0);
  }
  export function UserAvatar({ url, name }: { url: string, name: string }) {
    return (
      <Avatar>
        <AvatarImage src={url} alt={url} />
        <AvatarFallback>{getFallbackFromName(name)}</AvatarFallback>
      </Avatar>
    )
  }
