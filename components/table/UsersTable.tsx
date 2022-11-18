import { Checkbox, Pagination, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const UserTableRow = dynamic(() => import("./UserTableRow"), {
  ssr: false,
});

const users = [
  {
    displayName: "Administrator",
    email: "admin@gmail.com",
    phone: "0123456789",
    position: "Admin",
    status: "Active",
  },
  {
    displayName: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
    phone: "0123456789",
    position: "Janitor",
    status: "Active",
  },
  {
    displayName: "Nguyen Thi B",
    email: "nguyenthib@gmail.com",
    phone: "0123456789",
    position: "Selector",
    status: "Active",
  },
  {
    displayName: "Tran Van C",
    email: "tranvanc@gmail.com",
    phone: "0123456789",
    position: "Officer",
    status: "Active",
  },
  {
    displayName: "Le Thi D",
    email: "lethid@gmail.com",
    phone: "0123456789",
    position: "Janitor",
    status: "In Active",
  },
];

const UsersTable = () => {
  const [check, setCheck] = useState(false);

  const onPageChange = () => {};
  return (
    <>
      <TextInput
        id="search"
        placeholder="Search..."
        required={false}
        color="green"
        className="w-[30%] mb-5"
        //   helperText={<React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
      />
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>
            <p>Display name</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <p>Email</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <p>Phone</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <p>Position</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <p>Status</p>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user, index) => (
            <UserTableRow key={index} data={user} />
          ))}
        </Table.Body>
      </Table>
      <Pagination
        className="float-right mt-8"
        currentPage={1}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default UsersTable;
