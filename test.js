/* eslint-disable @typescript-eslint/no-unused-vars */
const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  //   acc.push(item);
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }

  return acc;
}, []);
// console.log(newArray);

//!!for routes
const newArrayRoute = adminPaths2.reduce((acc, item) => {
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
// console.log(newArray);

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, item) => {
  // console.log(acc);
  //   return acc + item;
  acc.push(acc + item);
  return acc;
}, []);

// console.log(result);
