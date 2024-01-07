import { brands } from "../data";

const Brands = () => {
  return (
    <section className="max-w-[1296px] mt-5 mx-auto">
      <div className="w-full mx-auto flex justify-between flex-wrap">
        {brands?.map((item, i) => (
          <div key={i} className="w-[100px] h-[100px] p-2">
            <img src={item.image} alt="no!!" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Brands;
