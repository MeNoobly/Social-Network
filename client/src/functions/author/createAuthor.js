import { Author } from "layouts/tables/data/usersTableData";
import team2 from "assets/images/team-2.jpg";

export default function createAuthor({ name, email }) {
  return {
    author: <Author image={team2} name={name} email={email} />,
  };
}
