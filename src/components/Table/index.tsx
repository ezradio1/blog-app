import { ReactNode } from "react";
import { TableProps } from "./index.types";
import clsx from "clsx";
import Loader from "@/assets/SVG/Loader";
import EmptyData from "@/assets/SVG/EmptyData";
import Pagination from "./components/Pagination";

const Table = <T extends Record<string, string | number>>(
  props: TableProps<T>
) => {
  const { columns, data, loading, onChangePagination, currentPage } = props;

  const getAlignment = (value: "left" | "center" | "right") => {
    const alignment = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return alignment[value];
  };

  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-xs border">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={clsx(
                    "py-3 px-4 text-left bg-gray-100 font-bold uppercase text-gray-600 border-b border-gray-300",
                    getAlignment(column.align || "left"),
                    column.width
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {!loading && data.length === 0 ? (
              <tr className="border">
                <td colSpan={columns.length} className="py-8">
                  <EmptyData />
                  <p className="text-center mt-2 font-medium">
                    No data available
                  </p>
                </td>
              </tr>
            ) : loading ? (
              <tr className="border h-64">
                <td colSpan={columns.length} className="py-8">
                  <Loader />
                  <p className="text-center">Loading...</p>
                </td>
              </tr>
            ) : (
              <>
                {data.map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className={clsx(
                          "py-3 px-4",
                          getAlignment(column.align || "left"),
                          column.width
                        )}
                      >
                        {column.key === "no"
                          ? `${Number(rowIndex + 1 + (currentPage - 1) * 10)}.`
                          : column.render
                          ? column.render(item)
                          : item[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <Pagination
          isPrevDisabled={data.length === 0 || currentPage === 1}
          isNextDisabled={data.length === 0 && currentPage > 1}
          onChangePagination={onChangePagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Table;
