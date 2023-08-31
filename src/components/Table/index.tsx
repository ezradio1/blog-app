import Loader from "@/assets/SVG/Loader";
import clsx from "clsx";
import EmptyState from "../EmptyState";
import Pagination from "../Pagination";
import type { TableProps } from "./index.types";
import Select from "../Select";
import { PER_PAGE_OPTIONS } from "./index.constants";
import { noop } from "@/helpers/noop";

const Table = <T extends unknown>(props: TableProps<T>) => {
  const {
    columns,
    data,
    loading,
    onChangePagination,
    currentPage,
    rowsPerPage = 5,
    onChangeRowPerPage = noop,
  } = props;

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
                  <EmptyState size={125} />
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
                    {columns.map((column, colIndex) => {
                      const normalizedItem = item as unknown as Record<
                        string,
                        string | number
                      >;
                      return (
                        <td
                          key={colIndex}
                          className={clsx(
                            "py-3 px-4",
                            getAlignment(column.align || "left"),
                            column.width
                          )}
                        >
                          {column.key === "no"
                            ? `${Number(
                                rowIndex + 1 + (currentPage - 1) * rowsPerPage
                              )}.`
                            : column.render
                            ? column.render(item)
                            : normalizedItem[column.key]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 items-end md:items-center mt-4">
        <div className="flex gap-2 items-center">
          <p className="text-xs">Rows per page: </p>
          <Select
            options={PER_PAGE_OPTIONS}
            value={rowsPerPage}
            className="w-16 h-7 md:h-10"
            onChange={(evt) =>
              onChangeRowPerPage(Number(evt.target.value || 5))
            }
          />
        </div>
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
