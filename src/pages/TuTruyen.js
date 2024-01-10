import ListAudio from "../compoments/audio/ListAudio";

const TuTruyen = () => {
  const list = [
    {
      id: 1,
      date: "123",
      modified: "123123",
      slug: "123123",
      title: "123123",
      content: "123123123123",
      trang_thai: "123131231",
      url: "231231231231",
      sotap: 23123123,
      baseurl: "12312312",
    },
    {
      id: 2,
      date: "dsxd",
      modified: "wdcz",
      slug: "asdc",
      title: "dfcasdf",
      content: "fdad",
      trang_thai: "cxzv",
      url: "dfqf",
      sotap: 32,
      baseurl: "dsfa",
    },
    {
      id: 3,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
    {
      id: 4,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
    {
      id: 5,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
    {
      id: 6,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
    {
      id: 7,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
    {
      id: 8,
      date: "12123sxca",
      modified: "2fezx21",
      slug: "cccccc",
      title: "aaaaa",
      content: "asdasdasd",
      trang_thai: "aaaaaaaaaa",
      url: "aaaaa",
      sotap: 11,
      baseurl: "aaa",
    },
  ];

  return (
    <>
      <div className="relative">
        <h3 className="page-title">Tu truyen</h3>
      </div>
      <ListAudio onList={list} />
    </>
  );
};

export default TuTruyen;
