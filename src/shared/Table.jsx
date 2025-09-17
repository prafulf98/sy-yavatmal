import { useEffect } from "react"

const Table = ({ tHead, tBody, customStyle }) => {
    useEffect(() => {
    }, [])

    return (
        <>
            <div className={`${customStyle} flex flex-col max-w-full bg-white border border-gray-400`}>
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className="bg-primary rounded-t-lg">
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-primary uppercase"> Sr. No.</th>
                                        {tHead.map((headItem, i) =>
                                            <th key={i} scope="col" className="px-6 py-3 text-start text-xs font-medium text-primary uppercase">
                                                {headItem}
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {tBody.map((bodyItem, i) =>
                                        <tr key={i}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 text-wrap">
                                                {i + 1}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 text-wrap">
                                                {bodyItem.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 text-wrap">
                                                {bodyItem.designation}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 text-wrap">
                                                {bodyItem.contactNo}
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Table
