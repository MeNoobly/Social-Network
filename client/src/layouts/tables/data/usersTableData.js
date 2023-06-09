/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import createAuthor from "functions/author/createAuthor";

export const Author = ({ image, name, email }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  </MDBox>
);

export const Job = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);

export default function data() {
  const dataOfAuthors = [
    {
      name: "Nick",
      email: "84956743974@mail.ru",
      title: "Programmer",
      status: "online",
      registrationDate: "19/11/2003",
    },
  ];

  return {
    columns: [
      { Header: "author", accessor: "author", width: "55%", align: "left" },
      { Header: "role", accessor: "role", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "registered", accessor: "registered", align: "center" },
    ],

    rows: dataOfAuthors.map((author) => createAuthor(author)),
  };
}
