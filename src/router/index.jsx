import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { UserTemplate } from "../atomic/templates/user";
//Lazy Load
const Movie = lazy(() => import("../atomic/pages/movie/Movie"));
const Anime = lazy(() => import("../atomic/pages/anime/Anime"));
const ShowingMovie = lazy(() => import("../atomic/pages/showing-movie"));
const Home = lazy(()=> import("../atomic/pages/home"));
const CommingMovie = lazy(()=>import("../atomic/pages/comming-movie"))
const DetailMovie = lazy(()=>import("../atomic/pages/detail-movie"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTemplate />,
    children: [
      {
        path: "",
        element: <Home/>
      },

      {
        path: "showing-movie",
        element: <ShowingMovie/>,
      },

      {
        path: "coming-movie",
        element: <CommingMovie/>,
      },
      {// params: truyen duoc mot tham so
        path: "movie/:id",
        element: <DetailMovie />,
      },

      {//search params: truyen duoc nhieu tham so
        //movie?id=123&q-456
        // path: "movie",
        // element: <DetailMovie />,
      },
    ],
  },

  {
    path: "admin",
    element: <>Admin</>,
    children: [
      {
        path: "create-user",
        element: "",
      },
      {
        path: "delete-user",
        element: "",
      },
    ],
  },

  {
    path: "movie",
    element: (
      // Đợi page của chúng ta tải xong rồi mới sử dụng để render.
      // fallback: render tạm thời khi page chưa tải xong
      <Suspense fallback={<>Loading....</>}>
        <Movie />
      </Suspense>
    ),
  },

  {
    path: "tv-series",
    element: <>tv-series</>,
  },

  {
    path: "anime",
    element: (
      <Suspense fallback={<>Loading....</>}>
        <Anime />
      </Suspense>
    ),
  },

  {
    path: "*",
    // C1: Custom Page Not Found
    // element: <>Not Found</>,

    // C2: Mong muốn chuyển về trang home
    element: <Navigate to={"/"} replace />,
  },
]);
