import { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,

  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GenresContext } from "@/context/genres.context";
import { useNavigate } from "react-router";

const genreList = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const Genres = () => {
  const { genres, setGenres } = useContext(GenresContext);
  const [genreName, setGenreName] = useState<string | null>(null);
  const navigate = useNavigate();

  const onChange = (id: number) => {
    setGenres(id);
    const selectedGenre = genreList.find((genre) => genre.id === id);
    setGenreName(selectedGenre?.name || null);
    navigate("/movies");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className="cursor-pointer">
          {genreName || "Genres"}
        </h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
        // @ts-expect-error: TS1234 because the library definition is wrong
          value={genres || ""}
          onValueChange={(value) => onChange(Number(value))}
          className="overflow-auto max-h-96"
        >
          {genreList.map((genre) => (
            <DropdownMenuRadioItem
              key={genre.id}
              value={String(genre.id)}
              onClick={() => setGenreName(genre.name)}
              className="cursor-pointer"
            >
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genres;
