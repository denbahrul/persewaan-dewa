import PackageCard from "../../../components/ui/package-card";

export default function SoundSystem() {
  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Sound System</p>
      <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
        <PackageCard
          link="/detail-sound"
          name="Sound 5000 WATT"
          image="https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PackageCard
          link="/detail-sound"
          name="Sound 3000 WATT"
          image="https://i.pinimg.com/enabled_lo_mid/736x/66/f2/20/66f220c29a960bf11dd32e3b7a7b0c31.jpg"
        />
        <PackageCard
          link="/detail-sound"
          name="Sound 2500 WATT"
          image="https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}
