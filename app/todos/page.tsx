import {getData} from "@/actions/todoActions";
import Todos from "@/components/custom/Todos";
import { getSession } from 'next-auth/react';

export default async function Home() {

  const data = await getData();
  return <Todos todos={data} />;
}