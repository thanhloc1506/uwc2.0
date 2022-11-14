import React, { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

const CheckboxTable = () => {
  const [check, setCheck] = useState(false);

  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Route name</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Collector</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Janitor</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <p>Status</p>
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="!p-4">
            <Checkbox />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>Apple MacBook Pro 17"</p>
          </Table.Cell>
          <Table.Cell>
            <p>Sliver</p>
          </Table.Cell>
          <Table.Cell>
            <p>Laptop</p>
          </Table.Cell>
          <Table.Cell>
            <p>$2999</p>
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
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="!p-4">
            <Checkbox checked={check} onClick={() => setCheck(!check)} />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>Microsoft Surface Pro</p>
          </Table.Cell>
          <Table.Cell>
            <p>White</p>
          </Table.Cell>
          <Table.Cell>
            <p>Laptop PC</p>
          </Table.Cell>
          <Table.Cell>
            <p>$1999</p>
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
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default CheckboxTable;
