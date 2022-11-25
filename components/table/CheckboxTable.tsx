import React, { useState } from "react";
import { Checkbox, Pagination, Table, TextInput } from "flowbite-react";

const CheckboxTable = () => {
  const [check, setCheck] = useState(false);

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
              <p>Ly Thuong Kiet</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Van A</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Thi B</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-red-500">New</p>
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
              <p>Cong Hoa</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Van C</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Duc F</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-blue-500">Processing</p>
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
              <p>To Hien Thanh</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Van A</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Thi V</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-green-500">Done</p>
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
              <p>To Hien Thanh</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Van A</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Thi V</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-green-500">Done</p>
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
              <p>To Hien Thanh</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Van A</p>
            </Table.Cell>
            <Table.Cell>
              <p>Nguyen Thi V</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-green-500">Done</p>
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
      <Pagination
        className="float-right mt-8"
        currentPage={1}
        totalPages={100}
        onPageChange={() => {}}
      />
    </>
  );
};

export default CheckboxTable;
