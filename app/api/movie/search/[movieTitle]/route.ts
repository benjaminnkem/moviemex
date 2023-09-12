import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(_: any, { params }: { params: any }) {
  const { movieTitle } = params;

  const getMovies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieTitle}`
  );
  if (!getMovies.ok) return NextResponse.json([], { status: 500 });

  const moviesData = await getMovies.json();
  return NextResponse.json(moviesData);
}
