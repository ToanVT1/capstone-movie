import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Card } from "../../atoms/card";
import { useTitle } from "../../../common/hooks";

function CommingMovie() {
  const [listMovie, setListMovie] = useState([]);
  useTitle("Phim Chuan Bi Chieu");

  //   useEffect(() => {
  //     const getData = async () => {
  //       const data = await axios({
  //         method: "get",
  //         url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
  //         headers: {
  //           TokenCybersoft:
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
  //         },
  //       });

  //       setListMovie(data);
  //     };

  //     getData();
  //   }, []);

  useEffect(() => {
    (async () => {
      const data = await axios({
        method: "get",
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
        },
      });

      setListMovie(data.data.content.filter((i) => i.sapChieu));
    })();
  }, []);

  return (
    <>
    <div className="flex justify-center gap-4 mt-4 flex-wrap">

      {listMovie.map((i) => {
        return (
          <>
            <Link to={`/movie/${i.maPhim}`}>
            <Card
                  style={{
                    width: 400,
                  }}
                  className="w-[30rem]"
                  
                  image={i.hinhAnh}
                  name={i.tenPhim}
                />
            </Link>
          </>
        );
      })}
      </div>

    </>
  );
}

export default CommingMovie;
