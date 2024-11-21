import PackageCard from "../../../components/ui/package-card";

export default function TentPackage() {
  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Paket Tenda</p>
      <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
        <PackageCard
          name="Paket 1"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PackageCard name="Paket 2" image="./header.jpg" />
        <PackageCard
          name="Paket 3"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}
