import { TfiArrowLeft } from "react-icons/tfi";
import { TbCameraPlus } from "react-icons/tb";

import Select from "react-select";

import "../index.css";
import { useState } from "react";
import { useFormik } from "formik";
import { axiosInstance } from "../config/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AttributesPage(params) {
  let navigate = useNavigate();

  // const [transmisi, setTransmisi] = useState("");
  // const [wilayah, setWilayah] = useState();
  // const [kota, setKota] = useState();
  // const [tipeBahanBakar, setTipeBahanBakar] = useState("");
  // const [listFoto, setListFoto] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const [enable, setEnable] = useState(false);

  const formik = useFormik({
    initialValues: {
      merek: "",
      model: "",
      transmisi: "",
      varian: "",
      tahun: "",
      jarakTempuh: "",
      tipeBahanBakar: "",
      warna: "",
      tipeBodi: "",
      kapasitasMesin: "",
      tipePenjual: "",
      namaBursaMobil: "",
      judulIklan: "",
      deskripsi: "",
      harga: "",
      listFoto: [],
      wilayah: {},
      kota: {},
      kecamatan: {},
    },
    onSubmit: async () => {
      const res = await axiosInstance.post("/items/", {
        params: formik.values,
      });
      if (res.status === 200)
        navigate("/", { replace: true, state: { user: res.data[0] } });
    },
  });

  useEffect(() => {
    let {
      merek,
      model,
      transmisi,
      tahun,
      jarakTempuh,
      tipeBahanBakar,
      warna,
      judulIklan,
      deskripsi,
      harga,
      listFoto,
      wilayah,
      kota,
      kecamatan,
    } = formik.values;
    if (
      merek &&
      model &&
      transmisi &&
      tahun &&
      jarakTempuh &&
      tipeBahanBakar &&
      warna &&
      judulIklan &&
      deskripsi &&
      harga &&
      listFoto.length !== 0 &&
      Object.keys(wilayah).length !== 0 &&
      Object.keys(kota).length !== 0 &&
      Object.keys(kecamatan).length !== 0
    ) {
      console.log("enable kok");
      setEnable(true);
    } else {
      console.log(" ga enable kok");
      setEnable(false);
    }
    console.log(formik.values);
  }, [formik.values]);

  const listMerek = [
    { value: "audi", label: "Audi" },
    { value: "bmw", label: "BMW" },
    { value: "bimantara", label: "Bimanatra" },
    { value: "daihatsu", label: "Daihatsu" },
    { value: "datsun", label: "Datsun" },
    { value: "honda", label: "Honda" },
    { value: "ferrari", label: "Ferrari" },
    { value: "ford", label: "Ford" },
    { value: "suzuki", label: "Suzuki" },
    { value: "tesla", label: "Tesla" },
    { value: "toyota", label: "Toyota" },
    { value: "volvo", label: "Volvo" },
  ];

  const listModel = [
    { value: "model 1", label: "Model 1" },
    { value: "model 2", label: "model 2" },
    { value: "model 3", label: "Model 3" },
    { value: "model 4", label: "Model 4" },
    { value: "model 5", label: "Model 5" },
  ];

  const listTransmisi = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
  ];

  const listVarian = [
    { value: "varian 1", label: "Varian 1" },
    { value: "varian 2", label: "Varian 2" },
    { value: "varian 3", label: "Varian 3" },
  ];

  const listTahun = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: "2011" },
  ];

  const listJarakTempuh = [
    { value: "0-5.000", label: "0-5.000" },
    { value: "5.000-10.000", label: "5.000-10.000" },
    { value: "10.000-15.000", label: "10.000-15.000" },
    { value: "15.000-20.000", label: "15.000-20.000" },
    { value: "20.000-25.000", label: "20.000-25.000" },
    { value: "25.000-30.000", label: "25.000-30.000" },
    { value: "30.000-35.000", label: "30.000-35.000" },
    { value: "35.000-40.000", label: "35.000-40.000" },
    { value: "40.000-45.000", label: "40.000-45.000" },
    { value: "45.000-50.000", label: "45.000-50.000" },
  ];

  const listWarna = [
    { value: "merah", label: "Merah" },
    { value: "jingga", label: "Jingga" },
    { value: "kuning", label: "Kuning" },
    { value: "hijau", label: "Hijau" },
    { value: "biru", label: "Biru" },
    { value: "nila", label: "Nila" },
    { value: "ungu", label: "Ungu" },
  ];

  const listTipeBodi = [
    { value: "mpv", label: "MPV" },
    { value: "suv", label: "SUV" },
    { value: "hatchback", label: "Hatchback" },
    { value: "sedan", label: "Sedan" },
    { value: "van", label: "Van" },
    { value: "minibus", label: "Minibus" },
    { value: "jeep", label: "Jeep" },
    { value: "offroad", label: "Offroad" },
    { value: "sports", label: "Sports" },
    { value: "classic car", label: "Classic Car" },
  ];

  const listNamaBursaMobil = [
    { value: "bursa a", label: "Bursa A" },
    { value: "bursa b", label: "Bursa B" },
    { value: "bursa c", label: "Bursa C" },
    { value: "bursa d", label: "Bursa D" },
    { value: "bursa e", label: "Bursa E" },
    { value: "bursa f", label: "Bursa F" },
    { value: "bursa x", label: "Bursa X" },
    { value: "bursa y", label: "Bursa Y" },
    { value: "bursa z", label: "Bursa Z" },
  ];

  const lokasi = [
    {
      label: "Kepulauan Riau",
      value: "kepulauanRiau",
      kota: [
        {
          label: "Tanjung Pinang Kota",
          value: "tanjungPinangKota",
          kecamatan: [
            {
              label: "Bukit Bestari",
              value: "bukitBestari",
            },
            {
              label: "Tanjung Pinang Barat",
              value: "tanjungPinangBarat",
            },
            {
              label: "Tanjung Pinang Kota",
              value: "tanjungPinangKota",
            },
            {
              label: "Tanjung Pinang Timur",
              value: "tanjungPinangTimur",
            },
          ],
        },
        {
          label: "Batam Kota",
          value: "batamKota",
          kecamatan: [
            {
              label: "Batam Kota",
              value: "batamKota",
            },
            {
              label: "Batu Aji",
              value: "batuAji",
            },
            {
              label: "Bengkong",
              value: "bengkong",
            },
            {
              label: "Nongsa",
              value: "nongsa",
            },
          ],
        },
      ],
    },
    {
      label: "Jawa Tengah",
      value: "jawaTengah",
      kota: [
        {
          label: "Kota 1",
          value: "kota 1",
          kecamatan: [
            {
              label: "Kecamatan A",
              value: "kecamatan a",
            },
            {
              label: "Kecamatan A",
              value: "kecamatan a",
            },
          ],
        },
        {
          label: "Kota 2",
          value: "kota 2",
          kecamatan: [
            {
              label: "Kecamatan X",
              value: "kecamatan x",
            },
            {
              label: "Kecamatan Y",
              value: "kecamatan y",
            },
            {
              label: "Kecamatan Z",
              value: "kecamatan z",
            },
          ],
        },
      ],
    },
  ];

  function emptyList() {
    let listEmpty = [];
    for (let index = 0; index < 8 - formik.values.listFoto.length; index++) {
      if (index === 0) {
        listEmpty.push(
          <div
            className="p-2 border-2 border-black aspect-square flex flex-col items-center justify-center"
            key={index}
          >
            <TbCameraPlus className="h-10 w-10" />
          </div>
        );
      } else {
        listEmpty.push(
          <div
            className="p-2 border-2 aspect-square flex flex-col items-center justify-center"
            key={index}
          >
            <TbCameraPlus className="text-gray-400 h-10 w-10" />
          </div>
        );
      }
    }
    return <>{listEmpty}</>;
  }

  return (
    <div>
      <div className="sticky top-0 h-30 bg-slate-100 p-6 shadow-md z-50">
        <TfiArrowLeft className="font-bold text-xl" />
      </div>
      <div className="flex flex-col items-center p-4 gap-3">
        <h1 className="font-bold text-2xl">PASANG IKLAN ANDA</h1>
        <div className="flex flex-col w-4/5 md:w-2/3 rounded-sm ">
          <div className="flex flex-col bg-white gap-5 py-5 px-3 items-start justify-center border-x-2 border-t-2">
            <div className=" font-bold text-xl text-gray-800">
              KATEGORI TERPILIH
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-xs text-gray-500">Mobil / Mobil Bekas</div>
              <div className="font-bold text-sm border-b-2 border-black">
                Ubah
              </div>
            </div>
          </div>
          <div className="flex flex-col divide-y-2 border-2 ">
            <div className="w-3/5 flex flex-col px-8 py-9 gap-5">
              <div className="font-bold text-xl text-gray-800 -mb-4 ">
                SERTAKAN BEBERAPA DETAIL
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="merek">Merek *</label>
                <Select
                  id="merek"
                  name="merek"
                  placeholder=""
                  options={listMerek}
                  onChange={(option) => {
                    formik.setFieldValue("merek", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div
                className={
                  formik.values.merek ? "flex flex-col gap-2" : "hidden"
                }
              >
                <label htmlFor="model">Model *</label>
                <Select
                  id="model"
                  name="model"
                  placeholder=""
                  options={listModel}
                  onChange={(option) => {
                    formik.setFieldValue("model", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div
                className={
                  formik.values.model ? "flex flex-col gap-2" : "hidden"
                }
              >
                <label htmlFor="transmisi">Transmisi *</label>
                <Select
                  id="transmisi"
                  name="transmisi"
                  placeholder=""
                  options={listTransmisi}
                  onChange={(option) => {
                    formik.setFieldValue("transmisi", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div
                className={
                  formik.values.transmisi === "automatic"
                    ? "flex flex-col gap-2"
                    : "hidden"
                }
              >
                <label htmlFor="varian">Varian *</label>
                <Select
                  id="varian"
                  name="varian"
                  placeholder=""
                  options={listVarian}
                  onChange={(option) => {
                    formik.setFieldValue("varian", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tahun">Tahun *</label>
                <Select
                  id="tahun"
                  name="tahun"
                  placeholder=""
                  options={listTahun}
                  onChange={(option) => {
                    formik.setFieldValue("tahun", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="jarakTempuh">Jarak tempuh *</label>
                <Select
                  id="jarakTempuh"
                  name="jarakTempuh"
                  placeholder=""
                  options={listJarakTempuh}
                  onChange={(option) => {
                    formik.setFieldValue("jarakTempuh", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tipeBahanBakar">Tipe bahan bakar *</label>
                <div className="flex gap-2 w-full ">
                  <div>
                    <input
                      className="hidden peer"
                      id="bb_1"
                      type="radio"
                      name="tipeBahanBakar"
                      value="diesel"
                      onClick={(e) => {
                        formik.setFieldValue("tipeBahanBakar", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="bb_1"
                    >
                      <div>Diesel</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="bb_2"
                      type="radio"
                      name="tipeBahanBakar"
                      value="bensin"
                      onClick={(e) => {
                        formik.setFieldValue("tipeBahanBakar", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="bb_2"
                    >
                      <div>Bensin</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="bb_3"
                      type="radio"
                      name="tipeBahanBakar"
                      value="hybrid"
                      onClick={(e) => {
                        formik.setFieldValue("tipeBahanBakar", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="bb_3"
                    >
                      <div>Hybrid</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="bb_4"
                      type="radio"
                      name="tipeBahanBakar"
                      value="listrik"
                      onClick={(e) => {
                        formik.setFieldValue("tipeBahanBakar", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="bb_4"
                    >
                      <div>Listrik</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="warna">Warna *</label>
                <Select
                  id="warna"
                  name="warna"
                  placeholder=""
                  options={listWarna}
                  onChange={(option) => {
                    formik.setFieldValue("warna", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tipeBodi">Tipe bodi</label>
                <Select
                  id="tipeBodi"
                  name="tipeBodi"
                  placeholder=""
                  options={listTipeBodi}
                  onChange={(option) => {
                    formik.setFieldValue("tipeBodi", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="kapasitasMesin">Kapasitas mesin</label>
                <div className="flex gap-2 w-full flex-wrap">
                  <div>
                    <input
                      className="hidden peer"
                      id="m_1"
                      type="radio"
                      name="kapasitasMesin"
                      value="<1.000 CC"
                      onClick={(e) => {
                        formik.setFieldValue("kapasitasMesin", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="m_1"
                    >
                      <div>&lt;1.000 CC</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="m_2"
                      type="radio"
                      name="kapasitasMesin"
                      value=">1.000 - 1.500 CC"
                      onClick={(e) => {
                        formik.setFieldValue("kapasitasMesin", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="m_2"
                    >
                      <div>&#62;1.000 - 1.500 CC</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="m_3"
                      type="radio"
                      name="kapasitasMesin"
                      value=">1.500 - 2.000 CC"
                      onClick={(e) => {
                        formik.setFieldValue("kapasitasMesin", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="m_3"
                    >
                      <div>&#62;1.500 - 2.000 CC</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="m_4"
                      type="radio"
                      name="kapasitasMesin"
                      value=">2.000 - 3.000 CC"
                      onClick={(e) => {
                        formik.setFieldValue("kapasitasMesin", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="m_4"
                    >
                      <div>&#62;2.000 - 3.000 CC</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="m_5"
                      type="radio"
                      name="kapasitasMesin"
                      value=">3.000 CC"
                      onClick={(e) => {
                        formik.setFieldValue("kapasitasMesin", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="m_5"
                    >
                      <div>&#62;3.000 CC</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tipePenjual">Tipe Penjual</label>
                <div className="flex gap-2 w-full ">
                  <div>
                    <input
                      className="hidden peer"
                      id="p_1"
                      type="radio"
                      name="tipePenjual"
                      value="individu"
                      onClick={(e) => {
                        formik.setFieldValue("tipePenjual", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="p_1"
                    >
                      <div>Individu</div>
                    </label>
                  </div>
                  <div>
                    <input
                      className="hidden peer"
                      id="p_2"
                      type="radio"
                      name="tipePenjual"
                      value="diler"
                      onClick={(e) => {
                        formik.setFieldValue("tipePenjual", e.target.value);
                      }}
                    />
                    <label
                      className="flex flex-col py-1 px-3.5 border border-gray-400 rounded-sm cursor-pointer peer-checked:border-black items-center justify-center"
                      htmlFor="p_2"
                    >
                      <div>Diler</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="namaBursaMobil">Nama Bursa Mobil</label>
                <Select
                  id="namaBursaMobil"
                  name="namaBursaMobil"
                  placeholder=""
                  options={listNamaBursaMobil}
                  onChange={(option) => {
                    formik.setFieldValue("namaBursaMobil", option.value);
                  }}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "grey",
                      padding: "0.25rem",
                      borderRadius: "0.25rem",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="judulIklan">Judul Iklan *</label>
                <input
                  id="judulIklan"
                  name="judulIklan"
                  type="text"
                  onChange={(option) => {
                    formik.setFieldValue("judulIklan", option.target.value);
                  }}
                  className="h-12 border border-gray-500 rounded py-2 px-3 focus:outline-none focus:border-2 focus:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="deskripsi">Deskripsi *</label>
                <textarea
                  rows="10"
                  cols="60"
                  id="deskripsi"
                  name="deskripsi"
                  onChange={(option) => {
                    formik.setFieldValue("deskripsi", option.target.value);
                  }}
                  className="h-28 border border-gray-500 rounded py-2 px-3 focus:outline-none focus:border-2 focus:border-blue-600"
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <div className="w-3/5 flex flex-col px-8 py-9 gap-5">
                <div className="font-bold text-xl text-gray-800 -mb-4">
                  TENTUKAN HARGA
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="harga">Harga *</label>
                  <input
                    id="harga"
                    name="harga"
                    type="text"
                    onChange={(option) => {
                      formik.setFieldValue("harga", option.target.value);
                    }}
                    className="h-12 border border-gray-500 rounded py-2 px-3 focus:outline-none focus:border-2 focus:border-blue-600"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-3/5 flex flex-col px-8 py-9 gap-5">
                <div className="font-bold text-xl text-gray-800">
                  UNGGAH HINGGA 20 FOTO
                </div>
                <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-2">
                  {formik.values.listFoto.map((foto, key) => {
                    return (
                      <div
                        className="p-1 border-2  aspect-square flex flex-col items-center justify-center"
                        key={key}
                      >
                        <img
                          src={foto}
                          alt=""
                          className="object-cover aspect-square"
                        />
                      </div>
                    );
                  })}
                  {emptyList()}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tambahFoto">Tambah Foto</label>
                  {/* <input
                    id="tambahFoto"
                    name="tambahFoto"
                    type="text"
                    className="h-12 border border-gray-500 rounded py-2 px-3 focus:outline-none focus:border-2 focus:border-blue-600"
                  />
                  <button className=" bg-blue-500 text-white font-bold text-lg py-3 px-5">
                    Submit
                  </button> */}
                  <form>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                      <input
                        type="text"
                        id="tambahFoto"
                        name="tambahFoto"
                        className="block w-full py-2 px-3 text-sm h-12 border border-gray-500 rounded focus:outline-none focus:border-2 focus:border-blue-600"
                        placeholder="Image URL"
                        onChange={(e) => {
                          setImageUrl(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          formik.setFieldValue("listFoto", [
                            ...formik.values.listFoto,
                            imageUrl,
                          ]);
                          setImageUrl("");
                        }}
                        type="button"
                        className="text-white absolute right-2.5 bottom-1.5 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={
                    formik.values.listFoto.length
                      ? "hidden"
                      : "text-red-500 text-xs"
                  }
                >
                  Wajib Diisi
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-3/5 flex flex-col px-8 py-9 gap-5">
                <div className="font-bold text-xl text-gray-800">
                  KONFIRMASIKAN LOKASI IKLAN ANDA
                </div>
                <div className="w-full flex">
                  <div className="py-2 px-10 font-bold border-b-4 border-black">
                    Daftar
                  </div>
                  <div className="p-2 px-10  border-b">Lokasi Saat ini</div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="wilayah">Wilayah *</label>
                  <Select
                    id="wilayah"
                    name="wilayah"
                    placeholder=""
                    options={lokasi}
                    onChange={(option) => {
                      formik.setFieldValue("kecamatan", {});
                      formik.setFieldValue("kota", {});
                      formik.setFieldValue("wilayah", {
                        label: option.label,
                        value: option.value,
                      });
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: "grey",
                        padding: "0.25rem",
                        borderRadius: "0.25rem",
                      }),
                    }}
                  />
                </div>
                <div
                  className={
                    formik.values.wilayah.value
                      ? "flex flex-col gap-2"
                      : "hidden"
                  }
                >
                  <label htmlFor="kota">Kota *</label>
                  <Select
                    clear
                    id="kota"
                    name="kota"
                    placeholder=""
                    options={
                      formik.values.wilayah.value
                        ? lokasi.find(
                            (wil) => wil.value === formik.values.wilayah.value
                          ).kota
                        : []
                    }
                    value={formik.values.kota}
                    onChange={(option) => {
                      formik.setFieldValue("kecamatan", {});
                      formik.setFieldValue("kota", {
                        label: option.label,
                        value: option.value,
                      });
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: "grey",
                        padding: "0.25rem",
                        borderRadius: "0.25rem",
                      }),
                    }}
                  />
                </div>
                <div
                  className={
                    formik.values.kota.value ? "flex flex-col gap-2" : "hidden"
                  }
                >
                  <label htmlFor="kecamatan">Kecamatan *</label>
                  <Select
                    id="kecamatan"
                    name="kecamatan"
                    placeholder=""
                    options={
                      formik.values.kota.value
                        ? lokasi
                            .find(
                              (wil) => wil.value === formik.values.wilayah.value
                            )
                            .kota.find(
                              (kot) => kot.value === formik.values.kota.value
                            ).kecamatan
                        : []
                    }
                    value={formik.values.kecamatan}
                    onChange={(option) => {
                      formik.setFieldValue("kecamatan", {
                        label: option.label,
                        value: option.value,
                      });
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: "grey",
                        padding: "0.25rem",
                        borderRadius: "0.25rem",
                      }),
                    }}
                  />
                </div>
                <div
                  className={
                    formik.values.kecamatan.value
                      ? "hidden"
                      : "text-red-500 text-xs"
                  }
                >
                  Wajib Diisi
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-3/5 flex flex-col px-8 py-9">
                <button
                  disabled={enable ? null : "disable"}
                  className="w-3/5 bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-600 font-bold text-lg py-3 px-5"
                >
                  Pasang Iklan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
