import { getCabin, getCabins } from "@/app/_library/data-service";
import Cabin from "@/app/_features/cabins/Cabin";

// Dynamic Metadata
export async function generateMetadata({ params }) {
  // page name | data from the server(cabinId from the dynamic params)
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

// Dynamic routes convert to static | [cabinId]
export async function generateStaticParams() {
  // cabins | data from the server
  const cabins = await getCabins();
  // list
  const list = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // return data
  return list;
}

async function CabinPage({ params }) {
  // cabin | data from the server(cabinId from the dynamic params)
  const cabin = await getCabin(params.cabinId);

  return <Cabin cabin={cabin} />;
}

export default CabinPage;

// App router
// # functions
// - generateStaticParams: statically generate routes at build time instead of on-demand at request time
// # url | dynamic params
// - params: returns an object of the dynamic params from the current URL
// Assignment
// {destructuring} | gives you direct access to the properties
