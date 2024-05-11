"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Item } from "@/app/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const deliveryData: Item[] = [
  {
    description: "Wireless Mouse",
    quantity: 15,
    status: "success",
    dateReceived: "2024-05-01",
  },
  {
    description: "Keyboard",
    quantity: 10,
    status: "processing",
    dateReceived: "2024-05-02",
  },
  {
    description: "USB-C Adapter",
    quantity: 20,
    status: "pending",
    dateReceived: "2024-05-03",
  },
  {
    description: "Monitor Stand",
    quantity: 5,
    status: "failed",
    dateReceived: "2024-05-04",
  },
  {
    description: "HDMI Cable",
    quantity: 25,
    status: "success",
    dateReceived: "2024-05-05",
  },
];

const trackingData: Item[] = [
  {
    description: "Wireless Mouse",
    quantity: 15,
    expectedDeliveryDate: "2024-05-06",
    status: "in transit",
    trackingNumber: "AB123456789CD",
  },
  {
    description: "Keyboard",
    quantity: 10,
    expectedDeliveryDate: "2024-05-07",
    status: "in transit",
    trackingNumber: "EF123456789GH",
  },
  {
    description: "USB-C Adapter",
    quantity: 20,
    expectedDeliveryDate: "2024-05-08",
    status: "in transit",
    trackingNumber: "IJ123456789KL",
  },
  {
    description: "Monitor Stand",
    quantity: 5,
    expectedDeliveryDate: "2024-05-09",
    status: "in transit",
    trackingNumber: "MN123456789OP",
  },
  {
    description: "HDMI Cable",
    quantity: 25,
    expectedDeliveryDate: "2024-05-10",
    status: "in transit",
    trackingNumber: "QR123456789ST",
  },
];

const deliveryColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "dateReceived",
    header: "Date Received",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const trackingColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "expectedDeliveryDate",
    header: "Expected Delivery Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "trackingNumber",
    header: "Tracking Number",
  },
];

export function Items({ variant }: { variant: "delivery" | "tracking" }) {
  const data = variant === "delivery" ? deliveryData : trackingData;
  const columns = variant === "delivery" ? deliveryColumns : trackingColumns;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-[#cbb55d] font-semibold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-gray-300">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-300"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
