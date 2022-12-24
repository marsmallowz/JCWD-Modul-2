export default function PostProductPage() {
  return (
    <div className="flex flex-col justify-center bg-slate-300 h-screen">
      <form className=" flex flex-col mx-auto lg:w-1/3 w-4/5 px-10 gap-y-2 ">
        <div className="flex flex-col">
          <label htmlFor="name">Product Name</label>
          <input type="text" name="name" className="py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" className="py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" className="py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url">Image URL</label>
          <input type="text" name="image_url" className="py-2" />
        </div>
        <div className="flex flex-col">
          <input
            onClick={() => {
              console.log("Jalan");
            }}
            type="button"
            value="Submit"
            className="py-2 cursor-pointer bg-slate-600"
          />
        </div>
      </form>
    </div>
  );
}
