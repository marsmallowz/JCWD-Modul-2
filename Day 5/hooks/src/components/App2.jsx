import { useEffect, useState } from "react";
import "../css/App2.css";
import axios from "axios";
export function App2() {
  const [product, setProduct] = useState({ name: "", url: "", price: 0 });
  const [listProduct, setListProduct] = useState([]);

  function fetchProducts() {
    axios.get("http://localhost:2000/products").then((res) => {
      setListProduct(res.data);
      // if (res.data.length) {
      //   setListProduct([...res.data]);
      // } else {
      //   setListProduct([res.data]);
      // }
      console.log(res);
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="App2">
      <div id="App2-title">Toko Buah</div>
      <div id="App2-body">
        <Search listProduct={listProduct} setListProduct={setListProduct} />
        <Input
          product={product}
          setProduct={setProduct}
          listProduct={listProduct}
          setListProduct={setListProduct}
        />
      </div>
    </div>
  );
}

export function Search(props) {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);

    // props.setListProduct(
    //   props.listProduct.filter((product) => {
    //     return product.name.includes(event.target.value);
    //   })
    // );
  };
  return (
    <div id="Search-content">
      <div id="Search-input">
        <input
          type="text"
          placeholder="Search"
          onChange={searchHandler}
          value={search}
        ></input>
      </div>

      <div id="Search-result">
        {!props.listProduct.length ? (
          <div>KOSONG</div>
        ) : (
          props.listProduct
            .filter((product) => {
              return product.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((product) => {
              return (
                <ProductCard
                  product={product}
                  setListProduct={props.setListProduct}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export function Input(props) {
  function fetchProducts() {
    axios.get("http://localhost:2000/products").then((res) => {
      if (res.data.length) {
        props.setListProduct([...res.data]);
      } else {
        props.setListProduct([res.data]);
      }
      console.log(res);
    });
  }

  function postProduct() {
    // axios.post("http://localhost:2000/products", props.product).then((res) => {
    //   props.setListProduct([...props.listProduct, res.data]);
    // });
    axios.post("http://localhost:2000/products", props.product).then(() => {
      fetchProducts();
    });
  }

  function inputHandler(event) {
    const { value, name } = event.target;

    props.setProduct({
      ...props.product,
      [name]: value,
    });
  }
  function addProduct() {
    if (!props.product.name || !props.product.url || !props.product.price)
      return alert("please fill the textbox");
    else if (
      props.listProduct[props.listProduct.length - 1]?.name ===
      props.product.name
    )
      return alert("you already add this todo");
    // console.log(props.product);

    // props.setListProduct([...props.listProduct, props.product]);
    postProduct();

    // fetchProducts
    // console.log("listProduct");
    // console.log(props.listProduct);
  }
  return (
    <div id="Input">
      <div>Input</div>
      <input
        name="name"
        type="text"
        placeholder="Product Name"
        onChange={inputHandler}
      />
      <input
        name="url"
        type="url"
        placeholder="URL Image"
        onChange={inputHandler}
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={inputHandler}
      />
      <button onClick={addProduct}>Add</button>
    </div>
  );
}

function ProductCard(props) {
  function fetchProducts() {
    axios.get("http://localhost:2000/products").then((res) => {
      props.setListProduct(res.data);
    });
  }

  function deleteProduct(id) {
    let answer = window.confirm(
      "are you sure you want to delete this product?"
    );
    if (answer) {
      axios.delete("http://localhost:2000/products/" + id).then(() => {
        fetchProducts();
        alert("data has been deleted");
      });
    }
  }
  console.log("props.product.id");
  console.log(props.product.id);

  return (
    <div id="ProductCard">
      <div>{props.product.name}</div>
      <img src={props.product.url} alt="" width={"250px"} height={"250px"} />
      <div>Rp. {props.product.price.toLocaleString()}</div>
      <div style={{ display: "flex" }}>
        <button>Change</button>
        <button onClick={() => deleteProduct(props.product.id)}>Delete</button>
      </div>
    </div>
  );
}

// {
//   "id": 1,
//   "name": "Jeruk",
//   "url": "https://cdn-asset.jawapos.com/wp-content/uploads/2020/01/Jeruk-Mandarin-Pixabay.jpg",
//   "price": 2000
// },
// {
//   "id": 2,
//   "name": "Apel",
//   "url": "https://cdn1-production-images-kly.akamaized.net/7hvDehUYgY7qU-iDTgiNMKPgBn0=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3044824/original/013950600_1581144360-shelley-pauls-I58f47LRQYM-unsplash__1_.jpg",
//   "price": 3000
// },
// {
//   "id": 4,
//   "name": "Durian",
//   "url": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/02/16083053/jenis-jenis-buah-durian-dan-manfaatnya-bagi-kesehatan-halodoc.jpg",
//   "price": 5000
// },
// {
//   "id": 5,
//   "name": "Rambutan",
//   "url": "https://cdn1-production-images-kly.akamaized.net/gwLt5lZHDhDb-decuvpA_-GMcOk=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3048090/original/007351800_1581485367-rambutan-2477584_960_720.jpg",
//   "price": 5000
// },
// {
//   "name": "Semangka",
//   "url": "https://akcdn.detik.net.id/visual/2020/11/02/ilustrasi-potongan-semangka_169.jpeg?w=650",
//   "price": "90",
//   "id": 6
// },
// {
//   "name": "Nangka",
//   "url": "https://res.cloudinary.com/dk0z4ums3/image/upload/v1649048234/attached_image/ragam-manfaat-buah-nangka-yang-bisa-anda-dapatkan.jpg",
//   "price": "3000",
//   "id": 7
// },
// {
//   "name": "Pepaya",
//   "url": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/19025309/Ragam-Manfaat-Pepaya-California-yang-Jarang-Diketahui-01-1.jpg",
//   "price": "30000",
//   "id": 8
// },
// {
//   "name": "Pepayaa",
//   "url": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/19025309/Ragam-Manfaat-Pepaya-California-yang-Jarang-Diketahui-01-1.jpg",
//   "price": "30000",
//   "id": 9
// },
// {
//   "name": "Pepayaaaaaaaaaaaaaa",
//   "url": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/19025309/Ragam-Manfaat-Pepaya-California-yang-Jarang-Diketahui-01-1.jpg",
//   "price": "30000",
//   "id": 10
// },
// {
//   "name": "yayapa",
//   "url": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/01/19025309/Ragam-Manfaat-Pepaya-California-yang-Jarang-Diketahui-01-1.jpg",
//   "price": "30000",
//   "id": 11
// },
// {
//   "name": "Jason",
//   "url": "https://th.bing.com/th/id/R.3d1259db80acb85958d0e28254abeeef?rik=MkxvSLk4lBx%2fyA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2fb%2f5%2f60576.jpg&ehk=kQ%2fWyPwWr17LA5%2bS8Ck92Zz1ZPFnB%2fioyykIWoPw%2fr4%3d&risl=&pid=ImgRaw&r=0",
//   "price": "10",
//   "id": 12
// }
