import Card from "../../../components/ui/card";

export default function TentAndStage() {
  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Tenda dan Panggung</p>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card
          price="300.000"
          name="Tenda Sentris 4x5"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card price="300.000" name="Tenda Sentris 4x5" image="./header.jpg" />
        <Card
          price="300.000"
          name="Tenda Sentris 4x5"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          price="300.000"
          name="Traditional Wedding"
          image="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card price="300.000" name="Tenda Sentris 4x5" image="./header.jpg" />
        <Card
          price="300.000"
          name="Traditional Wedding"
          image="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card price="300.000" name="Tenda Sentris 4x5" image="./header.jpg" />
        <Card
          price="300.000"
          name="Tenda Sentris 4x5"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}
