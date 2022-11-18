import { Checkbox, Table } from "flowbite-react";
import React, { useEffect } from "react";

interface ITableRow {
  data: any;
}

const UserTableRow: React.FC<ITableRow> = ({ data }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="!p-4">
        <Checkbox />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <p>{data.displayName}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{data.email}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{data.phone}</p>
      </Table.Cell>
      <Table.Cell>
        <p>{data.position}</p>
      </Table.Cell>
      <Table.Cell>
        {data.status === "Active" ? (
          <p className="text-green-400 font-medium">{data.status}</p>
        ) : (
          <p className="text-red-400 font-medium">{data.status}</p>
        )}
      </Table.Cell>
      <Table.Cell>
        {data.position === "Admin" ? null : (
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        )}
      </Table.Cell>

      <Table.Cell>
        {data.position === "Admin" ? null : (
          <a
            href="/tables"
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete
          </a>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default UserTableRow;
