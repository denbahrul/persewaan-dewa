export default function WeddingInspiration() {
  const items = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-2 row-span-1",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-2 row-span-1",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Inspirasi Wedding</p>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 py-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg bg-gray-100 shadow hover:shadow-lg ${item.span}`}
          >
            <img
              src={item.src}
              alt={`Image ${item.id}`}
              className="h-72 w-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* <div className="mt-4 grid grid-cols-4 gap-4">
        <Card
          name="Minimalist Wedding"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card name="Minimalist Wedding" image="./header.jpg" />
        <Card
          name="Minimalist Wedding"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          name="Traditional Wedding"
          image="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card name="Minimalist Wedding" image="./header.jpg" />
        <Card
          name="Traditional Wedding"
          image="https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card name="Minimalist Wedding" image="./header.jpg" />
        <Card
          name="Minimalist Wedding"
          image="https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div> */}
    </div>
  );
}
