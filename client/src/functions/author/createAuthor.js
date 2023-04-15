import { Author, Job } from "layouts/tables/data/usersTableData";
import team2 from "assets/images/team-2.jpg";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";

export default function createAuthor({ name, email, title, status, registrationDate }) {
  const author = {
    author: <Author image={team2} name={name} email={email} />,
    role: <Job title={title} description="" />,
    status: (
      <MDBox ml={-1}>
        <MDBadge
          badgeContent={status}
          color={status === "online" ? "success" : "error"}
          variant="gradient"
          size="sm"
        />
      </MDBox>
    ),
    registered: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {registrationDate}
      </MDTypography>
    ),
  };

  return author;
}
