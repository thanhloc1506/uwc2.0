import { Checkbox, Table } from "flowbite-react";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const UserTableRow = dynamic(() => import("./UserTableRow"), {
  ssr: false,
});
const UsersTable = () => {
  const [check, setCheck] = useState(false);

  return (
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
          <p>Password</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Category</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Status</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <UserTableRow data={[]} />
        <UserTableRow data={[]} />
        <UserTableRow data={[]} />
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
