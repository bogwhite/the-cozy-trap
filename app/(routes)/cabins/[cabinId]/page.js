import { getCabin, getCabins } from "@/app/_library/data-service";
import Cabin from "@/app/_features/cabins/Cabin";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const list = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return list;
}

async function CabinPage({ params }) {
  const cabin = await getCabin(params.cabinId);
  return <Cabin cabin={cabin} />;
}

export default CabinPage;
