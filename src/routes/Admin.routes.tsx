import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/User Management/CreateAdmin";
import CreateFaculty from "../pages/admin/User Management/CreateFaculty";
import CreateStudent from "../pages/admin/User Management/CreateStudent";
import { NavLink } from "react-router-dom";
import AcademicSemester from "../pages/admin/Academic Management/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/Academic Management/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/Academic Management/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/Academic Management/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/Academic Management/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/Academic Management/AcademicDepartment";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty></AcademicFaculty>
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  //   acc.push(item);
  if (item.path && item.element) {
    acc.push({
      path: item.name,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

export const adminSidebarItems = adminPaths.reduce((acc: TSidebar[], item) => {
  //   acc.push(item);
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);

// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
// ];
