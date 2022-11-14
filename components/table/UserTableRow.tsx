import { Checkbox, Table } from "flowbite-react";
import React, { useEffect } from "react";

interface ITableRow {
  data: any[];
}

const UserTableRow: React.FC<ITableRow> = ({ data }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="!p-4">
        <Checkbox />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <p>Magic Mouse 2</p>
      </Table.Cell>
      <Table.Cell>
        <p>Black</p>
      </Table.Cell>
      <Table.Cell>
        <p>Accessories</p>
      </Table.Cell>
      <Table.Cell>
        <p>$99</p>
      </Table.Cell>
      <Table.Cell>
        <p>$99</p>
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
  );
};

export default UserTableRow;
