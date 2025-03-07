const Home = () => {
  return (
    <>
      <div className="mt-12">
        <div className="flex justify-items-center gap-10 px-18">
          <div className="h-56 w-10 bg-gray-200 px-40 py-12 shadow rounded-lg font-bold text-black ">
         
          </div>
          <img src="/jumia 1.jpg" alt="" />
          <div className="h-56 w-10 bg-gray-200 px-40 py-12 shadow rounded-lg font-bold text-black">
            Successful
          </div>
          <div className="h-56 w-20 bg-gray-200 px-40 py-12 shadow rounded-lg font-bold text-black">
            Failed
          </div>
        </div>
        <div className="container mx-auto p-40 relative bottom-20 right-32">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="w-full py-56">
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 ">Transaction No.</th>
                <th className="border border-gray-300 p-3">Status</th>
                <th className="border border-gray-300 p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-center">
                  001 TN
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  Pending
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  1/02/24
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">
                  002 TN
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  Successful
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  7/12/24
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">
                  003 TN
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  Failed
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  7/22/24
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">
                  004 TN
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  Pending
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  8/30/24
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-center">
                  005 TN
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  Failed
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  9/01/24
                </td>
              </tr>
              <td></td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
