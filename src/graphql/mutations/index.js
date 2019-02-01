import Users from "./users";
import Rating from "./ratings";
import Genre from "./genres"
import Movie from "./movies"
export default {
    ...Users,
    ...Rating,
    ...Genre,
    ...Movie
}