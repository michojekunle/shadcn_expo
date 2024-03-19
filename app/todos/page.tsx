import {getData} from "@/actions/todoActions";
import Todos from "@/components/custom/Todos";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const data = await getData();
  if (!session) {
    redirect('/api/auth/signin')
    return;
  }
  return <Todos todos={data} />;
}