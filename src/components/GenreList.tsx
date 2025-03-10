import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/images-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGerne: Genre | null;
}
const GenreList = ({ selectedGerne, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGerne?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
