import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, { params }: { params: any }) {
  const { movieId } = params

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,options);

  if (!res.ok) return NextResponse.json([], { status: 500 });

  const moviesData = await res.json();
  return NextResponse.json(moviesData);
}
