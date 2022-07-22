export const Table = () => {
  return (
    <div className="flex flex-col justify-center mx-auto w-screen sm:text-lg">
      <table className="table-fixed text-left leading-loose tracking-widest divide-y-4">
        <thead className="mb-2">
          <tr className="">
            <th className="whitespace-nowrap pr-10"></th>
            <th className="p-2">
              基本コース
              <br />
              年42回レッスン
              <br />
              （平日）
            </th>
            <th className="">月3コース</th>
            <th className="">月2コース</th>
          </tr>
        </thead>
        <tbody className="group divide-y-2">
          <tr className="hover:bg-gray-100 whitespace-normal">
            <td className="whitespace-nowrap font-bold">初級 </td>
            <td className="p-2">7000円（30分）</td>
            <td className="p-2">6000円（30分）</td>
            <td className="whitespace-nowrap">
              5000円（30分）
              <br />
              6000円（40分）
            </td>
          </tr>
          <tr className="hover:bg-gray-100 whitespace-normal">
            <td className="font-bold">中級 </td>
            <td className="p-2">8000円（30分）</td>
            <td className="p-2">7000円（30分）</td>
            <td className="w-1/6">
              5000円（30分） <br />
              6000円（40分）
            </td>
          </tr>
          <tr className="hover:bg-gray-100 whitespace-normal">
            <td className="font-bold">上級 </td>
            <td className="p-2">9000円（30分）</td>
            <td className="p-2">8000円（30分）</td>
            <td className="w-1/6">6000円（40分）</td>
          </tr>
        </tbody>
      </table>
      <div className="text-left py-4 border-y-2 border-gray-200 hover:bg-gray-100">
        <span className="font-bold">ワンレッスン</span> 50分 4000円
      </div>
      <div className="text-left py-4 border-b-2 border-gray-200 hover:bg-gray-100">
        <span className="font-bold">その他のコース</span>
        （固定曜日でないレッスン、40分レッスン、1時間レッスン、他）についてはお問い合わせください。
      </div>
    </div>
  );
};
